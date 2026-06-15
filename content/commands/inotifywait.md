---
name: inotifywait
summary: Wait for filesystem events.
category: Files
tags: files, directories, path
popular: false
---

## Additional Notes

`inotifywait` is a file command used to wait for filesystem events. It blocks until a specified event (such as file creation, modification, or deletion) occurs on a watched path.

`inotifywait` is part of the `inotify-tools` package and uses the Linux inotify subsystem. The number of watchable directories is limited by `fs.inotify.max_user_watches`.

## Syntax

```bash
inotifywait [options] [arguments]
```

## Parameters

- `options`: Flags that change how `inotifywait` behaves.
- `path`: File or directory path to inspect or change.
- `arguments`: Names, patterns, or values used by the command.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
inotifywait --help
man inotifywait
```

## Practical Notes

Options can vary by distribution and package version. Use `man inotifywait`, `inotifywait --help`, or the package documentation for exact syntax.
