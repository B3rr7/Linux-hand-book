---
name: basename
summary: Strip directory and optional suffix from a path.
category: Files
tags: path, filename, script, shell
popular: false
---

## Additional Notes

`basename` prints the final component of a path. It is useful in shell scripts when you need just the filename part of a path.

It can also remove a known suffix, such as `.txt` or `.tar.gz`.

## Syntax

```bash
basename path [suffix]
basename [options] path...
```

## Parameters

- `path`: File or directory path.
- `suffix`: Optional trailing text to remove from the result.
- `options`: Multiple-input and suffix controls.

## Common Options

- `-a`: Support multiple path arguments.
- `-s SUFFIX`: Remove suffix from each name.
- `-z`: End output with a null byte instead of newline.

## Examples

```bash
basename /var/log/syslog
```

Print `syslog`.

```bash
basename /tmp/archive.tar.gz .tar.gz
```

Print `archive`.

```bash
basename -a /etc/passwd /var/log/syslog
```

Process multiple paths.

```bash
file=$(basename "$path")
```

Store the filename part in a shell variable.

## Practical Notes

- Use quotes around variables because paths can contain spaces.
- Use `dirname` for the opposite operation: getting the parent directory.
- `basename` works on strings; the path does not need to exist.
