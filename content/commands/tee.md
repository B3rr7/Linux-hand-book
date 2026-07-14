---
name: tee
summary: Read standard input and write it to files and standard output.
category: Shell
tags: pipe, output, files, logging, redirect
popular: false
---

## Additional Notes

`tee` reads from standard input and writes the same data to standard output and to one or more files. It is the "T" junction of a pipeline: it lets you both display a command's output and save it at the same time.

A common trick is `sudo tee FILE > /dev/null` to write to a root-owned file from a normal user's pipeline, since `>` redirection happens before `sudo` applies.

## Syntax

```bash
command | tee [options] [file ...]
```

## Parameters

- `options`: Flags that change how `tee` behaves.
- `file`: One or more files to write the input to.

## Common Options

- `-a`, `--append`: Append to files instead of overwriting them.
- `-i`, `--ignore-interrupts`: Ignore interrupt signals so a Ctrl-c does not stop the write.
- `--output-error`: Control behavior on write errors.
- `-p`: Diagnose errors writing to non-pipes.

## Examples

```bash
ls -l | tee listing.txt
```

Print the listing and save a copy to `listing.txt`.

```bash
make 2>&1 | tee build.log
```

Save a build log while still watching output.

```bash
echo "config line" | sudo tee -a /etc/app.conf > /dev/null
```

Append a line to a root-owned file from a normal user's shell.

```bash
cat data.csv | tee part1.csv part2.csv
```

Write the same stream to two files and also show it.

```bash
./monitor.sh | tee -a run.log
```

Keep appending live output to a log file.

## Practical Notes

- Without `-a`, `tee` overwrites the target file; use `-a` to keep history.
- `tee > /dev/null` discards the screen copy and keeps only the file write.
- `sudo tee` is the standard way to redirect into privileged files from a pipeline.
- Useful in long-running pipelines where you want both a live view and a saved record.
