---
name: getsebool
summary: Get the current state of SELinux booleans.
category: Security
tags: selinux, security, boolean, policy
popular: false
---

## Additional Notes

`getsebool` displays the current value of one or more SELinux boolean settings. SELinux booleans are tunable switches in SELinux policy that allow administrators to enable or disable specific policy rules without reloading or rebuilding the policy.

Booleans control features such as whether HTTP daemons can connect to network ports, whether users can execute untrusted scripts, or whether NFS file systems can be shared via Samba. The state of each boolean is shown as either `on` or `off`. Persistent changes to booleans are made with `setsebool -P`.

## Syntax

```bash
getsebool [boolean-name...]
```

## Parameters

- `boolean-name`: One or more SELinux boolean names to query. If omitted and no flags are given, `getsebool` lists all booleans in tabular format.

## Common Options

- `-a`: Show all available SELinux booleans with their current values.

## Examples

```bash
getsebool -a
```

List all SELinux booleans and their current states.

```bash
getsebool httpd_enable_homedirs
```

Check the state of a specific boolean.

```bash
getsebool httpd_enable_homedirs ftpd_full_access
```

Query multiple booleans at once.

```bash
getsebool -a | grep httpd
```

Filter all booleans related to the Apache HTTP daemon.

## Practical Notes

- Run `getsebool` without arguments to see all booleans with values aligned in columns.
- Use `semanage boolean -l` to see a description of each boolean alongside its value.
- Booleans are temporarily changed with `setsebool boolean value` and persistently with `setsebool -P boolean value`.
- Policy booleans are defined in SELinux policy packages and vary by distribution and installed policy modules.
- Changes to booleans take effect immediately; no service restart is required for the policy to apply.
