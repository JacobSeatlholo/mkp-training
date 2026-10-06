#!/bin/bash
# Wrapper that calls Python SSH implementation
exec /usr/bin/python3 /home/z/my-project/scripts/ssh-paramiko.py "$@"
