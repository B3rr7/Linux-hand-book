---
name: dirname
summary: Strip the last path component from a path.
category: Files
tags: path, directory, script, shell
popular: false
---

## Additional Notes

`dirname` is a file command used to strip the last path component from a path. It is commonly used in shell scripts to extract the directory portion of a file path, such as when constructing backup paths or processing files relative to their parent directory. It always produces output even if the path contains no slash.

## Syntax

```bash
dirname [options] [arguments]
```

## Parameters

- `options`: Flags that change how `dirname` behaves.
- `path`: File or directory path to inspect or change.
- `arguments`: Names, patterns, or values used by the command.

## Common Options

- `-z`: End output with a null byte instead of a newline.

## Examples

```bash
dirname /var/log/syslog
dirname ./src/app/index.js
```

## Practical Notes

Pair `dirname` with `basename` in scripts that need to split paths into directory and filename parts.
