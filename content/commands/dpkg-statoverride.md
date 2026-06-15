---
name: dpkg-statoverride
summary: Override file ownership and permissions for dpkg-managed files.
category: Packages
tags: debian, package, dpkg, permissions, override
popular: false
---

## Additional Notes

`dpkg-statoverride` manages stat overrides, which tell `dpkg` to set specific ownership and permission modes on files regardless of what the package specifies. This is used to enforce custom permissions on files that package updates would otherwise reset.

For example, if a package ships a file as root:root 0644 but your site policy requires it to be root:www-data 0640, a stat override ensures the desired permissions survive package upgrades. The overrides are stored in the dpkg database and are applied when the package is installed or upgraded.

## Syntax

```bash
dpkg-statoverride [options] [--add|--remove|--list] [user:group mode file]
```

## Parameters

- `--add user:group mode file`: Add a new stat override for the specified file.
- `--remove file`: Remove the stat override for a file.
- `--list [glob]`: List all current stat overrides, optionally matching a glob pattern.

## Common Options

- `--update`: Immediately apply the owner, group, and mode of the added override to the file.
- `--force`: Force the operation, bypassing sanity checks.
- `--quiet`: Suppress informational messages.

## Examples

```bash
dpkg-statoverride --add www-data www-data 755 /var/www/html
```

Override `/var/www/html` to be owned by `www-data:www-data` with mode `755`.

```bash
dpkg-statoverride --list
```

List all current stat overrides on the system.

```bash
dpkg-statoverride --remove /var/www/html
```

Remove the stat override for a file.

```bash
dpkg-statoverride --add --update root adm 2755 /usr/bin/screen
```

Add and immediately apply a setgid override for the `screen` binary.

## Practical Notes

- Stat overrides survive package upgrades but are not automatically removed when the package is removed.
- Use `--update` to apply the override immediately rather than waiting for the next package operation.
- Without a stat override, `dpkg` sets permissions and ownership from the package's `.deb` archive metadata.
- To prevent a package from changing critical permissions, add a stat override before or during installation.
- To view existing overrides that may have been set by other packages, run `dpkg-statoverride --list`.
