---
name: setsebool
summary: Set SELinux boolean values.
category: System
tags: selinux, boolean, policy, security
popular: false
---

## Additional Notes

`setsebool` sets the current state of SELinux booleans. Booleans are tunable policy switches that allow administrators to enable or disable specific SELinux policy rules without reloading or recompiling the policy. Examples include allowing Apache to connect to the network (`httpd_can_network_connect`) or allowing users to read home directories (`xdm_sysadm_login`).

Changes can be made temporarily (until the next reboot) or persistently by using the `-P` flag, which updates the boolean's default value in the SELinux policy store so it survives reboots and policy updates.

## Syntax

```bash
setsebool [-P] boolean_name value
```

## Parameters

- `boolean_name`: The name of the SELinux boolean to set.
- `value`: Either `on`/`1`/`true` to enable, or `off`/`0`/`false` to disable.

## Common Options

- `-P`: Make the change persistent across reboots (updates the policy store).

## Examples

```bash
setsebool httpd_can_network_connect on
```

Temporarily enable the `httpd_can_network_connect` boolean (resets on reboot).

```bash
setsebool -P httpd_can_network_connect on
```

Enable persistently so it survives a reboot.

```bash
setsebool -P samba_export_all_rw off
```

Disable the `samba_export_all_rw` boolean persistently.

```bash
setsebool -P httpd_enable_cgi on
```

Enable CGI script execution for Apache persistently.

## Practical Notes

- List all booleans and their states with `getsebool -a` or `semanage boolean -l`.
- On SELinux-enabled systems, denials in `/var/log/audit/audit.log` often suggest which boolean to toggle.
- The `-P` flag requires root privileges and writes to the policy store.
- Without `-P`, the change takes effect immediately but is lost on reboot.
- Booleans are defined by SELinux policy modules and vary by distribution.
- Use `semanage boolean -m --on` or `--off` as an alternative to `setsebool -P`.
