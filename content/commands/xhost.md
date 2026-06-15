---
name: xhost
summary: Control X server access permissions.
category: System
tags: x11, access, security, permission, display
popular: false
---

## Additional Notes

`xhost` manages the access control list (ACL) for the X server. It controls which clients (hosts or users) are allowed to connect to the X display. The default configuration typically allows only local connections from the same user.

The modern and more secure approach to X11 access control is `xauth` (MIT-MAGIC-COOKIE authentication), where each client must present a matching cookie. Using `xhost +` (allow all connections) is a security risk and should be avoided except for testing or trusted local networks.

## Syntax

```bash
xhost [options] [hostname...]
```

## Parameters

- `+hostname`: Add a host to the access control list.
- `-hostname`: Remove a host from the access control list.
- `+`: Disable all access control (allow all connections).
- `-`: Enable access control (default, requires authentication).

## Common Options

- `+SI:username`: Add access for a specific user on any host.
- `-SI:username`: Remove access for a specific user.
- `+local:username`: Allow connections from the local machine for a specific user.
- `-local:username`: Disallow local connections for a specific user.

## Examples

```bash
xhost
```

Show the current access control status and allowed hosts.

```bash
xhost +SI:localuser:alice
```

Allow user `alice` to connect from the local machine.

```bash
xhost +192.168.1.100
```

Allow connections from IP 192.168.1.100.

```bash
xhost -
```

Enable access control (reject connections without a valid cookie).

```bash
xhost +
```

Disable all access control. Security risk. Only use in isolated environments.

## Practical Notes

- Running `xhost +` allows anyone on any network to connect to your X display and capture keystrokes or screen contents.
- Use `xauth` for secure authentication instead of relying solely on host-based control.
- Access control changes only affect future connections; existing connections are not dropped.
- On Wayland, `xhost` does not apply (Wayland uses different security models).
- The `ssh -X` and `ssh -Y` options handle X11 access automatically using xauth cookies.
