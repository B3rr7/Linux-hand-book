---
name: xargs
summary: Build command lines from standard input.
category: Shell
tags: pipe, arguments, command, files, parallel, batch
popular: true
---

## Additional Notes

`xargs` builds command lines from standard input. It converts input items (one per line by default) into arguments for another command, which enables batch processing and parallel execution in pipelines.

By default `xargs` splits input on whitespace and runs the command once with many arguments. Use `-0` with null-separated input from `find -print0` to handle filenames with spaces or newlines safely.

## Syntax

```bash
command | xargs [options] [command [initial-args]]
```

## Parameters

- `options`: Flags that change how `xargs` behaves.
- `command`: Command to run for the input items.
- `initial-args`: Fixed arguments placed before the items from input.

## Common Options

- `-0`: Read null-separated input instead of newline-separated.
- `-n N`: Use at most N input items per command line.
- `-L N`: Use N input lines per command line.
- `-I {}`: Replace `{}` with each input item.
- `-d DELIM`: Use a custom input delimiter.
- `-a FILE`: Read items from a file instead of standard input.
- `-r`: Do not run the command if input is empty.
- `-P N`: Run up to N commands in parallel.
- `-p`: Prompt before running each command.
- `-t`: Print each command before running it.

## Examples

```bash
printf "%s\n" one two | xargs echo
```

Join the items into one `echo` command: `echo one two`.

```bash
find . -name "*.log" -print0 | xargs -0 rm
```

Delete every matching file safely, even with spaces in names.

```bash
printf "%s\n" app db | xargs -I {} echo "restart {}"
```

Run a command per item, substituting `{}` each time.

```bash
ls *.jpg | xargs -n 1 -I {} cp {} /backups/{}.bak
```

Copy each file to a renamed backup path.

```bash
cat hosts.txt | xargs -P 4 -I {} ping -c 1 {}
```

Ping each host in parallel with up to 4 concurrent processes.

```bash
find . -type f -name "*.tmp" | xargs -r rm
```

Remove temp files only if any were found.

```bash
ls | xargs -t -n 2 mv {} /tmp
```

Echo each constructed command before running it.

## Practical Notes

- Prefer `find -print0 | xargs -0` over plain newlines when filenames may contain spaces.
- `-I {}` runs one command per item; without it `xargs` batches many items into fewer runs.
- Use `-P N` for slow commands (pings, downloads, builds) to speed up batches.
- `-r` avoids running the command with no arguments when input is empty.
- `-t` and `-p` are handy for checking destructive commands before they run.
