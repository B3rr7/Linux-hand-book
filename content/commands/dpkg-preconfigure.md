---
name: dpkg-preconfigure
summary: Pre-answer debconf questions for package installations.
category: Packages
tags: debian, package, debconf, preconfiguration, automation
popular: false
---

## Additional Notes

`dpkg-preconfigure` loads answers to debconf configuration questions before a package is installed. This allows fully automated, non-interactive installations of Debian packages. The answers are stored in debconf templates and databases.

It is commonly used in preseeded Debian installations, automated setup scripts, and container builds where interactive prompts must be avoided. The preconfiguration files use a key-value format that maps template questions to answers. After running `dpkg-preconfigure`, subsequent package installations will use the provided answers without prompting.

## Syntax

```bash
dpkg-preconfigure [options] package-file...
```

## Parameters

- `package-file`: Path to a `.deb` file or a list of `.deb` files to preconfigure.

## Common Options

- `-f`, `--frontend frontend`: Specify the debconf frontend (e.g., `noninteractive`, `readline`, `gnome`). The `noninteractive` frontend suppresses all prompts.
- `-p`, `--priority priority`: Set the minimum priority of questions to display (`low`, `medium`, `high`, `critical`). Lower priorities show more questions.
- `--apt`: Read package lists from APT instead of command-line `.deb` files.

## Examples

```bash
dpkg-preconfigure -f noninteractive package.deb
```

Preconfigure a package with the noninteractive frontend, suppressing all prompts.

```bash
dpkg-preconfigure -f noninteractive /var/cache/apt/archives/*.deb
```

Preconfigure all `.deb` files in the APT cache.

```bash
dpkg-reconfigure -f noninteractive tzdata
```

Alternatively, use `dpkg-reconfigure` with preloaded answers for an already-installed package.

## Practical Notes

- Preconfiguration files (preseed files) are most commonly used with automated Debian installer environments.
- The `noninteractive` frontend combined with debconf database entries allows completely hands-off package installations.
- For preseeding during system installation, files are loaded via the installer's preseed mechanism rather than `dpkg-preconfigure` directly.
- `debconf-get-selections` can dump current debconf values for reuse as a preseed file.
