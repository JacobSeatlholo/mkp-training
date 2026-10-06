#!/usr/bin/python3
"""Custom SSH command using Paramiko (replaces missing openssh-client)."""
import sys
import paramiko
import os

def main():
    args = sys.argv[1:]
    
    identity_file = None
    port = 22
    host_str = None
    command = None
    
    i = 0
    while i < len(args):
        if args[i] == '-i' and i + 1 < len(args):
            identity_file = args[i + 1]
            i += 2
        elif args[i] == '-p' and i + 1 < len(args):
            port = int(args[i + 1])
            i += 2
        elif args[i] == '-o':
            i += 2
        elif args[i] == '-T':
            i += 1
        elif '@' in args[i] and host_str is None:
            host_str = args[i]
            i += 1
        else:
            command = ' '.join(args[i:])
            break
    
    if not host_str or not command:
        print(f"Usage: ssh [-i identity] user@host command", file=sys.stderr)
        sys.exit(1)
    
    user, host = host_str.split('@', 1)
    
    if identity_file:
        identity_file = os.path.expanduser(identity_file)
    
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        if identity_file:
            key = paramiko.Ed25519Key.from_private_key_file(identity_file)
            client.connect(host, port=port, username=user, pkey=key, timeout=30)
        else:
            client.connect(host, port=port, username=user, timeout=30)
        
        chan = client.get_transport().open_session()
        chan.exec_command(command)
        chan.setblocking(0)
        
        import select
        
        while True:
            r, w, x = select.select([chan, sys.stdin], [], [], 0.1)
            
            if chan in r:
                data = chan.recv(4096)
                if not data:
                    break
                sys.stdout.buffer.write(data)
                sys.stdout.buffer.flush()
            
            if sys.stdin in r:
                data = sys.stdin.buffer.read1(4096) if hasattr(sys.stdin.buffer, 'read1') else sys.stdin.buffer.read(4096)
                if not data:
                    chan.shutdown_write()
                else:
                    chan.sendall(data)
            
            if chan.exit_status_ready():
                while True:
                    data = chan.recv(4096)
                    if not data:
                        break
                    sys.stdout.buffer.write(data)
                    sys.stdout.buffer.flush()
                break
        
        sys.exit(chan.recv_exit_status())
        
    except Exception as e:
        print(f"SSH error: {e}", file=sys.stderr)
        sys.exit(1)
    finally:
        client.close()

if __name__ == '__main__':
    main()
