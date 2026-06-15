---
name: nmcli
summary: Manage NetworkManager connections.
category: Network
tags: network, connectivity, admin
popular: false
---

## Additional Notes

`nmcli` is a network command used to manage NetworkManager connections. It is useful for both interactive connection management and scripting network configuration changes.

Use `nmcli dev status` to list devices and `nmcli con show` to view connections before making changes. The command uses NetworkManager's D-Bus interface.

## Syntax

```bash
nmcli [options] object command
```

## Parameters

- `options`: Flags that change how `nmcli` behaves.
- `object`: NetworkManager object to manage (e.g., `connection`, `device`, `general`).

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
nmcli --help
man nmcli
```

## Practical Notes

Options can vary by distribution and package version. Use `man nmcli`, `nmcli --help`, or the package documentation for exact syntax.
