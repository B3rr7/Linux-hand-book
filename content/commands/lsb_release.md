---
name: lsb_release
summary: Print Linux Standard Base (LSB) distribution information.
category: System
tags: distro, version, release, lsb, system-info
popular: false
---

## Additional Notes

`lsb_release` prints detailed information about the Linux distribution, including the distributor ID, release version, codename, and description. It implements the Linux Standard Base (LSB) specification for reporting distribution metadata.

It is useful in scripts for detecting the current distribution and version to make platform-specific decisions. It reads data from the `/etc/lsb-release` file or the `/usr/lib/os-release` file.

## Syntax

```bash
lsb_release [options]
```

## Parameters

- `options`: Flags that change how `lsb_release` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-a`, `--all`: Show all available information.
- `-d`, `--description`: Print the distribution description string.
- `-r`, `--release`: Print the release version number.
- `-c`, `--codename`: Print the distribution code name.
- `-i`, `--id`: Print the distributor ID.
- `-s`, `--short`: Short output format, one value per line.
- `-h`, `--help`: Show help message.

## Examples

```bash
lsb_release -a
```

Show all distribution information.

```bash
lsb_release -d
```

Output: `Description: Ubuntu 22.04.3 LTS`

```bash
lsb_release -r -s
```

Output: `22.04` (short release number).

```bash
lsb_release -c -s
```

Output: `jammy` (short codename).

```bash
if [ "$(lsb_release -is)" = "Ubuntu" ]; then
  echo "This is Ubuntu"
fi
```

Check the distribution in a script.

## Practical Notes

- Not all distributions install `lsb_release` by default. On Debian/Ubuntu, install it with `apt install lsb-release`.
- On distributions without LSB tools, use `cat /etc/os-release` or `hostnamectl` as alternatives.
- The `-s` flag is useful when capturing output in scripts for comparison.

