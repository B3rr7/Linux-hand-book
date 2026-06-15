---
name: semanage
summary: Manage SELinux policy configurations.
category: Security
tags: selinux, policy, management, security, context
popular: false
---

## Additional Notes

`semanage` is the SELinux policy management tool for configuring SELinux policy without modifying policy source files. It manages the persistent local policy settings, including file context mappings, port labels, login mappings, booleans, and user mappings.

Unlike `chcon` which changes security context temporarily, `semanage` makes permanent changes to the SELinux policy that persist across filesystem relabeling (`restorecon`). This makes it the correct tool for defining how files, ports, and other objects should be labeled on the system.

## Syntax

```bash
semanage {login|user|port|interface|node|fcontext|boolean|permissive|dontaudit} [options]
```

## Subcommands

- `fcontext`: Manage file context mappings (defines default labels for paths).
- `port`: Manage port type mappings for network services.
- `boolean`: Manage SELinux booleans to toggle policy rules.
- `login`: Manage Linux-to-SELinux user mappings.
- `user`: Manage SELinux user identities.
- `interface`: Manage network interface context.
- `node`: Manage network node context.
- `permissive`: Manage permissive domain list.
- `dontaudit`: Toggle dontaudit rules.
- `module`: Manage SELinux policy modules.

## Parameters

- `options`: Flags that change how `semanage` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-l`, `--list`: List the current configuration for the given subcommand.
- `-a`, `--add`: Add a new mapping or entry.
- `-d`, `--delete`: Delete a mapping or entry.
- `-m`, `--modify`: Modify an existing entry.
- `-t type`: Specify the SELinux type for the mapping.
- `-p proto`: Specify protocol (tcp or udp) for port operations.
- `-f ftype`: Specify file type for fcontext (`a` for all, `f` for regular, `d` for directory, etc.).

## Examples

```bash
semanage fcontext -l
```

List all file context mappings.

```bash
semanage fcontext -a -t httpd_sys_content_t "/var/www(/.*)?"
```

Add a file context mapping for `/var/www` so `restorecon` labels it correctly.

```bash
semanage port -l
```

List all port type mappings.

```bash
semanage port -a -t http_port_t -p tcp 8080
```

Map TCP port 8080 to the `http_port_t` type.

```bash
semanage boolean -l
```

List all booleans with their current and default values.

```bash
semanage boolean -m --on httpd_can_network_connect
```

Enable the `httpd_can_network_connect` boolean persistently.

## Practical Notes

- Changes made with `semanage` persist across reboots and relabeling.
- File context mappings use regular expressions for path matching.
- After adding fcontext rules, run `restorecon -Rv /path` to apply the new labels.
- Port labeling tells SELinux which ports services are allowed to bind to.
- `semanage` requires root privileges for most operations.
- The `selinux-policy-devel` or `policycoreutils-python-utils` package provides `semanage`.
