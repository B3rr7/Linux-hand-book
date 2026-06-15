---
name: mapfile
summary: Read lines from stdin into an indexed array variable.
category: Shell
tags: shell, array, read, file, bash-builtin
popular: false
---

## Additional Notes

`mapfile` (also called `readarray`) is a Bash built-in that reads lines from standard input into an indexed array. Each line of input becomes one element of the array, stripping the trailing newline.

It is useful for reading file contents or command output into an array for further processing in scripts. It is more efficient and cleaner than using a loop with `read`.

## Syntax

```bash
mapfile [options] array_name
mapfile -t array_name < file
```

## Parameters

- `array_name`: The name of the array variable to populate.

## Common Options

- `-t`: Remove trailing newlines from each line (most commonly used).
- `-n count`: Read at most `count` lines.
- `-O origin`: Start filling the array at index `origin` (default 0).
- `-s count`: Skip the first `count` lines.
- `-C callback`: Evaluate `callback` every `-c` lines.
- `-c count`: Specify the callback frequency (default is 5000).
- `-u fd`: Read from file descriptor `fd` instead of stdin.

## Examples

```bash
mapfile -t lines < /etc/passwd
echo "${lines[0]}"
```

Read `/etc/passwd` into an array and print the first line.

```bash
mapfile -t -s 1 lines < /etc/fstab
```

Skip the first line (header comment) and read the rest.

```bash
mapfile -t -n 3 lines < /etc/hosts
```

Read only the first 3 lines.

```bash
ls -1 *.txt | mapfile -t files
for file in "${files[@]}"; do
  echo "Processing: $file"
done
```

Read `ls` output into an array and iterate.

```bash
mapfile -t -C 'echo "Read line"' -c 1 lines < data.txt
```

Execute a callback after each line read.

## Practical Notes

- `readarray` is a synonym for `mapfile`; both work identically.
- Always use `-t` to strip trailing newlines unless you need them.
- `mapfile` is a Bash 4+ feature. It is not available in POSIX `sh` or older Bash versions.
- For large files, `mapfile` is more memory-efficient than reading into a variable with `$(cat)`.

