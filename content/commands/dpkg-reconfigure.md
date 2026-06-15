---
name: dpkg-reconfigure
summary: Reconfigure an already-installed Debian package.
category: Packages
tags: debian, package, configuration, debconf, reconfigure
popular: false
---

## Additional Notes

`dpkg-reconfigure` runs the post-installation configuration for an installed Debian package again. It presents the package's debconf questions so you can change settings that were specified during the initial install.

This is useful when you need to modify a package's configuration interactively without reinstalling it. Common examples include changing the timezone, reconfiguring the keyboard layout, setting the mail transport agent type, or adjusting package database passwords. The debconf database stores the answers, and `dpkg-reconfigure` re-presents the prompts at whatever priority level you specify.

## Syntax

```bash
dpkg-reconfigure [options] package...
```

## Parameters

- `package`: One or more installed package names to reconfigure.

## Common Options

- `-f`, `--frontend frontend`: Specify the debconf frontend (`readline`, `gnome`, `noninteractive`, etc.).
- `-p`, `--priority priority`: Set the minimum question priority to display (`low`, `medium`, `high`, `critical`). Use `low` to see all questions.
- `-a`, `--all`: Reconfigure all installed packages.
- `-u`, `--unseen-only`: Ask only questions that have not been seen before.
- `--terse`: Enable terse output mode.

## Examples

```bash
sudo dpkg-reconfigure tzdata
```

Reconfigure the system timezone interactively.

```bash
sudo dpkg-reconfigure -p low locales
```

Reconfigure locale settings and see all available options.

```bash
sudo dpkg-reconfigure -f noninteractive keyboard-configuration
```

Reconfigure the keyboard layout using noninteractive mode (useful in scripts with preseeding).

```bash
sudo dpkg-reconfigure -a
```

Reconfigure every installed package that has pending debconf questions.

## Practical Notes

- `dpkg-reconfigure` only works with packages that use debconf for configuration. Not all packages use debconf.
- Use `-p low` to see all questions, including those marked with low priority.
- To see the current debconf values before reconfiguring, use `debconf-get-selections | grep ^package`.
- The noninteractive frontend is useful in scripts, but the questions must be pre-answered in the debconf database.
- Some packages have configuration scripts (`config` and `postinst` in DEBIAN/) that control what debconf questions appear.
