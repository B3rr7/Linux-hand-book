---
name: sshpass
summary: Non-interactive SSH password authentication.
category: Network
tags: ssh, password, automation, non-interactive
popular: false
---

## Additional Notes

`sshpass` provides non-interactive password authentication for SSH connections. It works by supplying the password to SSH via a pseudo-terminal (PTY), bypassing SSH's direct password prompt requirement. This is intended for scripting and automation where password authentication is unavoidable.

Because it exposes passwords on the command line or in environment variables, `sshpass` is less secure than key-based authentication. Its primary use case is automating connections to legacy systems that do not support public key authentication. Key-based authentication with `ssh-agent` is strongly preferred for production environments.

## Syntax

```bash
sshpass [-f filename | -d num | -p password | -e] ssh [ssh_options] user@host [command]
```

## Parameters

- `password`: The password to use for SSH authentication.
- `user@host`: The SSH destination.
- `command`: Optional command to execute on the remote host.

## Password Source Options

- `-p password`: Provide the password directly on the command line (insecure, visible in process listing).
- `-f filename`: Read the password from the first line of the specified file.
- `-d number`: Read the password from file descriptor `number`.
- `-e`: Read the password from the `SSHPASS` environment variable.
- `-P prompt`: Specify the password prompt string to look for (default: `password:`).

## Common SSH Options

- `-o StrictHostKeyChecking=no`: Skip host key checking (use with caution).
- `-o UserKnownHostsFile=/dev/null`: Do not save the host key.
- `-p port_num`: Specify the SSH port (use SSH's `-o Port=port` syntax with `sshpass`).

## Examples

```bash
sshpass -p 'mypassword' ssh alice@server.example.com
```

Connect using a password on the command line.

```bash
sshpass -f password.txt ssh alice@server.example.com
```

Read the password from a file.

```bash
export SSHPASS='mypassword'
sshpass -e ssh alice@server.example.com
```

Use the `SSHPASS` environment variable.

```bash
sshpass -p 'mypassword' ssh alice@server.example.com 'ls -la /tmp'
```

Execute a remote command with password authentication.

```bash
sshpass -p 'mypassword' scp file.txt alice@server.example.com:~/ 
```

Use `sshpass` with SCP for file transfer.

```bash
sshpass -f pass.txt rsync -av -e ssh ./dir/ alice@server.example.com:~/dir/
```

Use with rsync for automated backups.

## Practical Notes

- Password visible in process listings (`ps aux`) when using `-p`.
- For production automation, always use SSH key authentication instead.
- Some SSH configurations may reject password authentication; `sshpass` cannot override server-side settings.
- The `-o StrictHostKeyChecking=no` option disables host key verification, reducing security.
- On systems with SELinux, `sshpass` may need specific SELinux booleans enabled.
- `sshpass` is not installed by default on many distributions; available via `apt install sshpass` or `yum install sshpass`.
