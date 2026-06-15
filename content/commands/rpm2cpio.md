---
name: rpm2cpio
summary: Convert an RPM package to a cpio archive.
category: Packages
tags: rpm, cpio, extract, package, convert
popular: false
---

## Additional Notes

`rpm2cpio` converts an RPM Package Manager (RPM) file into a cpio archive on standard output. This allows you to extract files from an RPM without installing it, using `cpio` as the extraction tool.

The RPM format internally uses cpio as the archive container. `rpm2cpio` strips the RPM metadata headers and outputs the raw cpio archive, which can then be piped to `cpio` for extraction. This is useful for inspecting package contents, recovering individual files from packages, or working with RPMs when `rpm` itself is not available.

## Syntax

```bash
rpm2cpio [filename.rpm]
```

## Parameters

- `filename.rpm`: The RPM package file to convert. If omitted, reads from standard input.

## Common Options

- `-0`, `--null`: Read null-terminated filenames (used when reading a list of RPMs from stdin).
- `-v`, `--verbose`: Show progress information.
- `-q`, `--quiet`: Suppress warning messages.

## Examples

```bash
rpm2cpio package.rpm | cpio -idmv
```

Extract all files from `package.rpm` into the current directory.

```bash
rpm2cpio package.rpm | cpio -idmv ./etc/config.conf
```

Extract only `/etc/config.conf` from the package.

```bash
rpm2cpio package.rpm > package.cpio
```

Save the raw cpio archive to a file.

```bash
cat package.rpm | rpm2cpio | cpio -t
```

List the contents of an RPM without extracting.

## Practical Notes

- Extraction does not require root privileges for non-system directories.
- The `-i` (extract), `-d` (create directories), `-m` (preserve timestamps), and `-v` (verbose) flags to `cpio` are commonly used together.
- Use `-t` with cpio to list contents without extracting.
- This method works even when the RPM database is corrupted or unavailable.
