---
name: grpck
summary: Verify the integrity of group and shadow password files.
category: System
tags: group, shadow, verify, integrity, password
popular: false
---

## Additional Notes

`grpck` checks the consistency and correctness of the `/etc/group` and `/etc/gshadow` files. It verifies that each entry has the correct number of fields, that group names are valid, that GIDs are in the proper range, and that the shadow group file entries correspond correctly to group file entries.

If problems are found, `grpck` prompts for a repair action. It can delete duplicate entries, fix field counts, and correct GID mismatches. Running `grpck` regularly or after manual edits to group files helps prevent authentication and permission issues.

## Syntax

```bash
grpck [options] [group-file [shadow-file]]
```

## Parameters

- `group-file`: Alternate group file to check (default: `/etc/group`).
- `shadow-file`: Alternate shadow group file to check (default: `/etc/gshadow`).

## Common Options

- `-r`: Run in read-only mode. Check but do not repair any problems.
- `-s`: Sort entries by GID.
- `-R root-dir`: Operate in the specified chroot directory.
- `-h`: Display help.

## Examples

```bash
sudo grpck
```

Check and interactively repair `/etc/group` and `/etc/gshadow`.

```bash
sudo grpck -r
```

Check the group files in read-only mode without making changes.

```bash
sudo grpck -r /etc/group /etc/gshadow
```

Check specific group and shadow group files.

```bash
sudo grpck -s
```

Check and sort the group file by GID.

## Practical Notes

- Run `grpck` after manually editing `/etc/group` or `/etc/gshadow` to catch syntax errors.
- The read-only mode (`-r`) is useful for auditing without making changes.
- `grpck` only checks the group files, not the user files. Use `pwck` for user and user shadow file verification.
- If the shadow group file is missing or corrupt, `grpck` can recreate it from `/etc/group`.
- Always back up `/etc/group` and `/etc/gshadow` before running `grpck` in repair mode.
