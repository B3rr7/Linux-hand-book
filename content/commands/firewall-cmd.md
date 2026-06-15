---
name: firewall-cmd
summary: Manage firewalld firewall rules.
category: Network
tags: network, connectivity, admin
popular: false
---

## Additional Notes

`firewall-cmd` is a network command used to manage firewalld firewall rules. It manages firewalld rules using zones and services instead of raw iptables rules. Changes can be made permanent with --permanent or applied only to the runtime.

## Syntax

```bash
firewall-cmd [options] command
```

## Parameters

- `options`: Flags that change how `firewall-cmd` behaves.
- `service/port`: Service name or port to manage.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
firewall-cmd --help
man firewall-cmd
```

## Practical Notes

Options can vary by distribution and package version. Use `man firewall-cmd`, `firewall-cmd --help`, or the package documentation for exact syntax.
