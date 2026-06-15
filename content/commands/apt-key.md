---
name: apt-key
summary: Manage legacy APT trusted keys.
category: Packages
tags: apt, key, repository, debian, legacy
popular: false
---

## Additional Notes

`apt-key` manages keys that APT uses to trust package repositories. It is now considered legacy on modern Debian and Ubuntu systems.

Modern repository setup should use key files in `/etc/apt/keyrings` or `/usr/share/keyrings` with `signed-by=...` in the repository source entry.

## Syntax

```bash
apt-key [command] [arguments]
```

## Parameters

- `command`: Operation such as `list`, `finger`, `add`, or `del`.
- `arguments`: Key file, key ID, or operation-specific value.

## Common Commands

- `list`: List trusted keys.
- `finger`: Show key fingerprints.
- `add FILE`: Add a key from a file. Legacy usage.
- `del KEYID`: Remove a key by ID.

## Examples

```bash
apt-key list
```

List legacy trusted keys.

```bash
apt-key finger
```

Show fingerprints for trusted keys.

```bash
sudo apt-key del ABCD1234
```

Remove a legacy key.

## Practical Notes

- Avoid adding new repositories with `apt-key add` on modern systems.
- Prefer per-repository keyrings and `signed-by=` entries.
- Be careful with repository keys: a trusted key can authenticate packages from repositories that use it.
