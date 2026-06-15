---
name: pv
summary: Monitor the progress of data through a pipeline.
category: Files
tags: progress, pipe, monitoring, throughput, transfer, dd
popular: true
---

## Additional Notes

`pv` (Pipe Viewer) monitors the progress of data flowing through a pipeline. It shows the current transfer rate, total transferred data, elapsed time, estimated remaining time, and a progress bar. It sits between two commands in a pipe, measuring data as it passes through.

`pv` is invaluable for long-running operations like disk imaging (`dd`), file compression, database dumps, backups, and large file transfers where visual feedback helps estimate completion time. It adds no output of its own to the data stream, simply passing data through while displaying progress information on stderr.

## Syntax

```bash
source | pv [options] [destination]
pv [options] [source] > destination
pv [options] source > destination
```

## Parameters

- `source`: Input file or device. If omitted, reads from stdin.
- `destination`: Output file or device, specified via redirection or pipe.

## Common Options

- `-p`, `--progress`: Show the progress bar (default on).
- `-t`, `--timer`: Show elapsed time.
- `-e`, `--eta`: Show estimated time remaining.
- `-r`, `--rate`: Show current transfer rate.
- `-a`, `--average-rate`: Show average transfer rate.
- `-b`, `--bytes`: Show total bytes transferred.
- `-n`, `--numeric`: Numeric percentage output (machine-parseable).
- `-q`, `--quiet`: No output. Useful for timing-only purposes.
- `-s size`, `--size size`: Set the expected total data size for percentage calculation.
- `-L rate`, `--rate-limit rate`: Limit the transfer to a maximum rate (e.g., `10m` for 10 MiB/s).
- `-B bytes`, `--buffer-size bytes`: Set the buffer size for transferring data.
- `-N name`, `--name name`: Show a label before the progress display.
- `-F format`, `--format format`: Specify the output format string.
- `-W`, `--wait`: Wait for the first byte before displaying progress.
- `-D interval`, `--delay-start interval`: Delay display by the specified number of seconds.
- `-c`, `--cursor`: Use cursor positioning instead of newlines for updates.
- `-S`, `--stop-at-size`: Stop transferring once the specified size is reached.

## Examples

```bash
pv bigfile.tar.gz | tar xz
```

Monitor decompression of a tarball through a pipe.

```bash
pv backup.sql | mysql database
```

Monitor a MySQL database import.

```bash
pv /dev/sda > /dev/sdb
```

Monitor a raw disk copy with progress information.

```bash
dd if=/dev/sda | pv | dd of=/dev/sdb
```

Monitor a `dd` disk clone operation.

```bash
pv -s 10G bigfile.iso > /dev/null
```

Simulate reading a 10 GiB file, showing progress against the expected size.

```bash
cat largefile | pv -L 5m > /dev/null
```

Read a file but limit throughput to 5 MiB/s.

```bash
pv -n access.log | wc -l
```

Show numeric percentage progress, suitable for piping to `dialog` or `zenity`.

```bash
pv -tpreb /path/to/bigfile > /dev/null
```

Show all indicators: progress bar, timer, rate, ETA, and bytes.

```bash
pv -N "Copying" source.iso > dest.iso
```

Show a custom label before the progress display.

```bash
tar cf - /data | pv -s $(du -sb /data | awk '{print $1}') | gzip > backup.tar.gz
```

Create a compressed backup with accurate progress based on total bytes.

## Practical Notes

- `pv` does not modify data passing through it. It is safe to insert into any pipeline.
- Use `-s` (--size) when `pv` cannot determine the total size automatically (e.g., from stdin). This enables percentage and ETA display.
- For `dd` operations, replace `dd status=progress` with `dd if=/dev/sda | pv | dd of=/dev/sdb` for more detailed progress.
- The rate limiter (`-L`) is useful for preventing backups from saturating network links or I/O.
- `pv` reads from `stdin` and writes to `stdout` by default. If you provide a filename argument, it reads from the file.
- Install with `sudo apt install pv` on Debian/Ubuntu or `sudo yum install pv` on RHEL/CentOS.
- For monitoring in scripts, use `-n` for numeric output and parse the percentage value programmatically.
