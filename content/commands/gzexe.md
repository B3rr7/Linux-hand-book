---
name: gzexe
summary: Compress executable files with transparent decompression.
category: Archives
tags: compress, executable, gzip, binary
popular: false
---

## Additional Notes

`gzexe` compresses executable files and adds a small decompression stub so that the file remains executable. When the compressed executable is run, the stub decompresses it to a temporary location and executes it, transparent to the user.

This is useful for reducing the disk space used by infrequently executed binaries. The compression ratio depends on the content but is typically around 50-60% for compiled binaries. Original files are backed up with a `~` suffix before compression.

## Syntax

```bash
gzexe [options] file...
```

## Parameters

- `file`: One or more executable files to compress or decompress.

## Common Options

- `-d`: Decompress files that were previously compressed with `gzexe`, restoring the original.
- `--help`: Display help.
- `--version`: Show version information.

## Examples

```bash
gzexe /usr/local/bin/myprogram
```

Compress an executable and make it self-decompressing.

```bash
gzexe -d /usr/local/bin/myprogram
```

Restore the original uncompressed executable.

```bash
gzexe -d *.exe
```

Decompress all compressed executables matching the pattern.

## Practical Notes

- `gzexe` is a shell script wrapper around `gzip`. It is not a security measure; the temporary decompressed file can be inspected while the program runs.
- Compressed executables use slightly more memory at startup due to decompression overhead.
- The original file is renamed with a `~` suffix before compression.
- Not all executables can be compressed. Setuid programs, scripts with setuid bits, or programs that check their own file paths may malfunction.
- For modern systems, `upx` provides more advanced executable compression with better ratios and faster decompression.
- System binaries (in `/bin`, `/usr/bin`) should generally not be compressed due to security and performance considerations.
