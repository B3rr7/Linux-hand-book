---
name: rpmverify
summary: Verify installed RPM packages against the database.
category: Packages
tags: rpm, verify, package, integrity
popular: false
---

## Additional Notes

`rpmverify` (or `rpm -V`) checks installed files against the RPM database to detect changes. It compares file attributes such as permissions, ownership, size, modification time, and MD5 checksum against the values recorded at installation time.

This is useful for detecting accidental modifications, configuration drift, or malicious file tampering. Any file that has been altered since package installation will be reported with a letter code indicating what changed.

## Syntax

```bash
rpmverify [options] package_name
rpmverify [options] -a
```

## Parameters

- `package_name`: The name of an installed package to verify.

## Common Options

- `-a`, `--all`: Verify all installed packages.
- `-f`, `--file file`: Verify only the package that owns a specific file.
- `-g`, `--group group`: Verify packages in a specific group.
- `-p`, `--package package.rpm`: Verify against an RPM file instead of the database.
- `-n`, `--nofiledigest`: Skip MD5 digest verification.
- `--noscripts`: Skip scriptlet verification.
- `--nogroup`: Skip group checks.
- `--nouser`: Skip user checks.
- `--nomtime`: Skip modification time checks.
- `--nomode`: Skip mode/permission checks.
- `--nodeps`: Do not verify dependencies.
- `-v`, `--verbose`: Show verbose output.

## Verification Output

Each changed attribute is indicated by a character:

- `S`: File size differs.
- `M`: Mode/permissions differ.
- `5`: MD5 digest differs.
- `D`: Device major/minor number mismatch.
- `L`: Symbolic link target changed.
- `U`: User ownership changed.
- `G`: Group ownership changed.
- `T`: Modification time differs.
- `c`: Configuration file (this is a suffix marker, not an error).

Missing files are reported as `missing`.

## Examples

```bash
rpmverify openssh-server
```

Verify all files owned by the `openssh-server` package.

```bash
rpmverify -a
```

Verify every installed package on the system.

```bash
rpmverify -f /etc/ssh/sshd_config
```

Verify the package that owns the specified configuration file.

```bash
rpmverify -a | grep -v "c"
```

Show only non-configuration file changes (configuration files are expected to change).

## Practical Notes

- Configuration files (marked `c`) are expected to change after installation.
- A clean system shows no output for `rpmverify -a`.
- File changes due to updates are tracked across package versions.
- Missing files indicate the file was deleted after installation.
- Use `rpm -Va` to verify all packages in a single command.
