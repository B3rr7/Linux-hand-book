---
name: nmtui
summary: Text user interface for configuring NetworkManager.
category: Network
tags: network, configuration, nmcli, networkmanager, wifi, interface
popular: false
---

## Additional Notes

`nmtui` provides a simple text-based user interface for managing network connections via NetworkManager. It offers menus for editing connections, activating connections, setting hostnames, and managing network interfaces without requiring knowledge of `nmcli` command syntax.

It is designed for users who prefer a menu-driven approach over the command line. `nmtui` is not a full replacement for `nmcli` but covers the most common network configuration tasks. Changes made in `nmtui` are persistent and apply to the system-wide NetworkManager configuration files.

## Syntax

```bash
nmtui [edit|connect|hostname] [name]
```

## Parameters

- `edit`: Open the interface to edit a connection profile.
- `connect`: Open the interface to activate or deactivate a connection.
- `hostname`: Open the interface to set the system hostname.
- `name`: Optional connection name when used with `edit` or `connect`.

## Common Options

- `--help`: Show help and exit.
- `--version`: Show program version.

## Examples

```bash
nmtui
```

Launch the text interface with the main menu.

```bash
nmtui edit "My WiFi"
```

Open the edit interface directly for the connection named `My WiFi`.

```bash
nmtui connect
```

Open the activation/deactivation interface.

```bash
nmtui hostname
```

Open the hostname setting dialog.

## Practical Notes

- `nmtui` requires NetworkManager to be running. Check with `systemctl status NetworkManager`.
- Changes require no service restart and take effect immediately.
- `nmtui` can be run over SSH as it uses curses-based text rendering.
- For scripting, use `nmcli` instead, which provides the same configuration capabilities in a scriptable format.
- On minimal installations, `nmtui` may need to be installed separately with the package `network-manager-tui` or `NetworkManager-tui`.
