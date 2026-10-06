#!/usr/bin/python3
"""Force push to GitHub using Dulwich with custom Paramiko SSH vendor."""
import sys
import os
import io
import select
import time
import threading

sys.path.insert(0, '/home/z/.local/lib/python3.13/site-packages')

from dulwich.repo import Repo
from dulwich.client import SSHGitClient, SSHVendor
import paramiko

REPO_PATH = '/home/z/my-project'
REMOTE_HOST = 'github.com'
REMOTE_USER = 'git'
REMOTE_PATH = 'JacobSeatlholo/mkp-training.git'
SSH_KEY = os.path.expanduser('~/.ssh/id_ed25519_mkp')
BRANCH = b'main'


class ChannelReader:
    def __init__(self, channel):
        self._channel = channel
        self._buffer = b''
        self._lock = threading.Lock()
        self._eof = False
        self._thread = threading.Thread(target=self._reader_thread, daemon=True)
        self._thread.start()
    
    def _reader_thread(self):
        while True:
            if self._channel.recv_ready():
                data = self._channel.recv(65536)
                if not data:
                    with self._lock:
                        self._eof = True
                    break
                with self._lock:
                    self._buffer += data
            elif self._channel.exit_status_ready():
                while self._channel.recv_ready():
                    data = self._channel.recv(65536)
                    if data:
                        with self._lock:
                            self._buffer += data
                with self._lock:
                    self._eof = True
                break
            else:
                time.sleep(0.01)
    
    def read(self, size=-1):
        while True:
            with self._lock:
                if size == -1 or size is None:
                    if self._eof:
                        result = self._buffer
                        self._buffer = b''
                        return result
                else:
                    if len(self._buffer) >= size:
                        result = self._buffer[:size]
                        self._buffer = self._buffer[size:]
                        return result
                    if self._eof and self._buffer:
                        result = self._buffer
                        self._buffer = b''
                        return result
                    if self._eof and not self._buffer:
                        return b''
            time.sleep(0.005)


class ChannelWriter:
    def __init__(self, channel):
        self._channel = channel
    def write(self, data):
        self._channel.sendall(data)
    def flush(self):
        pass
    def close(self):
        try:
            self._channel.shutdown_write()
        except:
            pass


class ParamikoSSHVendor(SSHVendor):
    def run_command(self, host, command, username=None, port=None,
                     password=None, key_filename=None, ssh_command=None,
                     protocol_version=None):
        print(f"  SSH: {username or 'git'}@{host}:{port or 22}")
        key = paramiko.Ed25519Key.from_private_key_file(SSH_KEY)
        ssh_client = paramiko.SSHClient()
        ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh_client.connect(host, port=port or 22, username=username or 'git',
                           pkey=key, timeout=30, compress=True)
        channel = ssh_client.get_transport().open_session()
        channel.exec_command(command)
        return ParamikoSSHWrapper(ssh_client, channel)


class ParamikoSSHWrapper:
    def __init__(self, ssh_client, channel):
        self._client = ssh_client
        self._channel = channel
        self._reader = ChannelReader(channel)
        self._writer = ChannelWriter(channel)
        self.read = self._reader.read
        self.write = self._writer.write
    
    @property
    def stderr(self):
        stderr_data = b''
        while True:
            if self._channel.recv_stderr_ready():
                data = self._channel.recv_stderr(4096)
                if data:
                    stderr_data += data
                else:
                    break
            else:
                break
        return io.BytesIO(stderr_data)
    
    def can_read(self):
        with self._reader._lock:
            return len(self._reader._buffer) > 0
    
    def close(self, timeout=60):
        try:
            self._writer.close()
        except:
            pass
        try:
            self._channel.close()
            self._client.close()
        except:
            pass


def main():
    print(f"Opening repo at {REPO_PATH}...")
    repo = Repo(REPO_PATH)
    
    ref_name = b'refs/heads/' + BRANCH
    local_sha = repo.refs[ref_name]
    print(f"Local {BRANCH.decode()}: {local_sha.hex()}")
    
    vendor = ParamikoSSHVendor()
    client = SSHGitClient(REMOTE_HOST, username=REMOTE_USER, vendor=vendor, thin_packs=True)
    
    # Fetch first
    print("\nFetching remote refs...")
    try:
        remote_refs = client.fetch(REMOTE_PATH, repo)
        for ref, sha in remote_refs.items():
            if isinstance(sha, bytes) and len(sha) == 20:
                print(f"  {ref.decode()}: {sha.hex()[:12]}")
    except Exception as e:
        print(f"Fetch: {e}")
    
    def update_refs(old_refs):
        print(f"  Force updating refs/heads/main -> {local_sha.hex()[:12]}")
        return {ref_name: local_sha}
    
    def generate_pack_data(have, want, ofs_delta=True, progress=None):
        return repo.generate_pack_data(have, want, ofs_delta=ofs_delta, progress=progress)
    
    print(f"\nForce pushing {BRANCH.decode()} ({local_sha.hex()[:12]})...")
    
    try:
        result = client.send_pack(REMOTE_PATH, update_refs, generate_pack_data)
        print(f"\n✅ Successfully force pushed to GitHub!")
        if result:
            print(f"Result: {result}")
    except Exception as e:
        print(f"Push error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == '__main__':
    main()
