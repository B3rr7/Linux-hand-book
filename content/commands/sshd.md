---
name: sshd
summary: OpenSSH SSH daemon for secure remote login.
category: Network
tags: ssh, daemon, remote, secure, server
popular: true
---

## Additional Notes

`sshd` is the OpenSSH SSH daemon that listens for incoming SSH connections, handles authentication, and provides secure encrypted remote shell access, file transfer (SFTP/SCP), port forwarding, and X11 forwarding. It is the server-side component of the OpenSSH suite and is the standard remote access daemon on virtually all Unix-like operating systems.

When a client connects, `sshd` authenticates the user using one of several methods: password (hashed, never plaintext), public key, keyboard-interactive, GSSAPI/Kerberos, host-based, or certificate-based. After authentication, it establishes an encrypted session that provides a remote shell, command execution, or a subsystem such as SFTP. Configuration is done in `/etc/ssh/sshd_config`, which controls authentication settings, permitted ciphers, key exchange algorithms, port forwarding, and access controls.

## Syntax

```bash
sshd [options]
```

## Parameters

- `options`: Flags that change how `sshd` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-4`: Use IPv4 addresses only.
- `-6`: Use IPv6 addresses only.
- `-d`: Debug mode (run in foreground, verbose logging to stderr).
- `-D`: Do not daemonize (run in foreground, normal logging).
- `-e`: Write logs to stderr instead of syslog.
- `-f config`: Specify an alternative configuration file (default: `/etc/ssh/sshd_config`).
- `-g login_grace_time`: Set the login grace time (default: 120 seconds).
- `-h host_key_file`: Specify a host key file (default: `/etc/ssh/ssh_host_*`).
- `-o option`: Override a configuration option (e.g., `-o "Port 2222"`).
- `-p port`: Specify the listening port (default: 22).
- `-q`: Quiet mode (no logging).
- `-T`: Test mode: parse and print the effective configuration, then exit.
- `-t`: Test mode: check the configuration file for syntax errors.
- `-u len`: Specify the utmp record length.

## Key Configuration Directives (sshd_config)

- `Port 22`: Listening port number.
- `PermitRootLogin prohibit-password`: Allow root login with key authentication but not password.
- `PubkeyAuthentication yes`: Enable public key authentication.
- `PasswordAuthentication yes`: Enable password authentication.
- `AllowUsers user1 user2`: Limit allowed login users.
- `DenyUsers user1`: Block specific users.
- `AllowGroups group1`: Limit allowed login groups.
- `ListenAddress 0.0.0.0`: IP address to listen on.
- `Protocol 2`: Only allow SSH protocol version 2.
- `MaxAuthTries 6`: Maximum authentication attempts per connection.
- `MaxSessions 10`: Maximum concurrent shell/subsystem sessions per connection.
- `ClientAliveInterval 0`: Send keepalive messages at this interval (0 = disabled).
- `ClientAliveCountMax 3`: Maximum client alive messages before disconnect.
- `UseDNS yes`: Resolve client hostnames (can slow connections).
- `Subsystem sftp /usr/lib/openssh/sftp-server`: SFTP subsystem path.
- `X11Forwarding yes`: Allow X11 display forwarding.
- `AllowTcpForwarding yes`: Allow port forwarding.
- `Banner /etc/issue.net`: Display message before authentication.

## Examples

```bash
sshd
```

Start the SSH daemon (usually started at boot via systemd or init).

```bash
sshd -p 2222
```

Start `sshd` listening on port 2222.

```bash
sshd -t
```

Check the configuration file for syntax errors.

```bash
sshd -T
```

Print the effective configuration after applying all directives.

```bash
sshd -d
```

Run `sshd` in debug mode (foreground, verbose) for troubleshooting.

```bash
sshd -o "Port 2222" -o "PermitRootLogin no"
```

Start with overridden configuration options.

```bash
sshd -D -e
```

Run `sshd` in the foreground with log output to stderr (useful in containers).

## Practical Notes

- After editing `/etc/ssh/sshd_config`, always test with `sshd -t` before restarting.
- A syntax error in `sshd_config` can lock you out of the server. Keep a root shell open while testing.
- Disabling password authentication (`PasswordAuthentication no`) and using only keys greatly improves security.
- The `.ssh/authorized_keys` file must have permissions `600` (owner read/write only).
- Host keys are created on first start in `/etc/ssh/ssh_host_*`.
- Use `journalctl -u sshd` or `/var/log/auth.log` to troubleshoot connection issues.
- SSH protocol version 1 is obsolete and should never be enabled.
- Key exchange algorithms, ciphers, and MACs can be customized for security compliance.
- Fail2Ban is commonly paired with `sshd` to rate-limit authentication attempts.
- For bulk key management, consider using SSH Certificate Authority (CA) instead of individual key deployment.
