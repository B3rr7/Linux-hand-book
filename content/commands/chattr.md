---
name: chattr
summary: Change extended file attributes on Linux filesystems.
category: Files
tags: file, attributes, immutable, filesystem
popular: false
---

## Additional Notes

`chattr` changes Linux extended file attributes such as immutable or append-only flags. These attributes are separate from normal Unix permissions.

Use it carefully for protecting important files, controlling append-only logs, or inspecting filesystem behavior.

## Syntax

```bash
chattr [operator][attributes] file...
```

## Parameters

- `operator`: `+` to add, `-` to remove, or `=` to set exactly.
- `attributes`: Attribute letters such as `i` or `a`.
- `file`: File or directory to change.

## Common Attributes

- `i`: Immutable. File cannot be modified, removed, renamed, or linked by normal means.
- `a`: Append-only. File can only be opened for appending.
- `A`: Do not update access time.
- `d`: Exclude from dump backups.

## Examples

```bash
sudo chattr +i important.conf
```

Make a file immutable.

```bash
sudo chattr -i important.conf
```

Remove the immutable attribute.

```bash
sudo chattr +a audit.log
```

Make a file append-only.

```bash
lsattr important.conf
```

View extended attributes.

## Practical Notes

- Root may be needed to change many attributes.
- Immutable files can confuse package managers and editors.
- Attribute support depends on filesystem type.
