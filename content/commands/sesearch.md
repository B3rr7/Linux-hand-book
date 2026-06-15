---
name: sesearch
summary: Search SELinux policy rules.
category: System
tags: selinux, policy, search, rules
popular: false
---

## Additional Notes

`sesearch` searches SELinux policy rules for specific types, classes, permissions, or roles. It is part of the `setools-console` package and allows administrators to find the allow rules, type transitions, role transitions, and other policy statements that govern access control.

Understanding SELinux denials (AVC messages) often requires searching the policy to find why access was granted or denied. `sesearch` is the primary tool for this, allowing you to query what a domain can access or what can access a domain.

## Syntax

```bash
sesearch [options] [expression]
```

## Parameters

- `options`: Flags that change how `sesearch` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-A`, `--allow`: Search for allow rules.
- `--neverallow`: Search for neverallow rules.
- `--audit`: Search for auditallow rules.
- `--dontaudit`: Search for dontaudit rules.
- `-T`, `--type_trans`: Search for type transition rules.
- `-R`, `--role_trans`: Search for role transition rules.
- `-s source`: Specify the source type (domain).
- `-t target`: Specify the target type.
- `-c class`: Specify the object class.
- `-p perms`: Specify permissions (comma-separated).
- `-d`, `--direct`: Search in the direct policy, not expanded.
- `-b boolean`: Search for rules conditional on a boolean.
- `--eregex`: Interpret type/class names as extended regular expressions.

## Examples

```bash
sesearch -A -s httpd_t
```

Find all allow rules where `httpd_t` is the source domain.

```bash
sesearch -A -t httpd_sys_content_t
```

Find all allow rules that target the `httpd_sys_content_t` type.

```bash
sesearch -A -s httpd_t -t port_t -c tcp_socket -p name_connect
```

Search for rules allowing `httpd_t` to connect to TCP sockets labeled `port_t`.

```bash
sesearch -T -s initrc_t
```

Find type transition rules where `initrc_t` is the source.

```bash
sesearch --dontaudit -s httpd_t
```

Find dontaudit rules for `httpd_t` (rules that suppress denials).

## Practical Notes

- AVC denial messages in `/var/log/audit/audit.log` contain the source type (`scontext`), target type (`tcontext`), class, and permission that was denied.
- Use `sesearch` with `-A -s source_type -t target_type` to see if an allow rule exists for a denied access.
- The `-d` flag shows only rules defined in the loaded policy module, not inherited base rules.
- Boolean names found with `-b` can be used with `setsebool` to toggle conditional rules.
- `sesearch` requires the `setools-console` package.
