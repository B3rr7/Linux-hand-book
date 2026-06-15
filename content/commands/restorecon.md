---
name: restorecon
summary: Restore SELinux security context on files.
category: Administration
tags: selinux, security, context, policy, files
popular: false
---

## Additional Notes

`restorecon` restores the default SELinux security context on files and directories according to the SELinux policy. It reads the file context rules from the SELinux policy database and applies the correct context to matched files.

System administrators use `restorecon` after creating new files, copying or moving files from one location to another, or when file contexts become incorrect due to manual changes or policy updates. Incorrect SELinux contexts are a common cause of "permission denied" errors even when standard Unix permissions are correct.

## Syntax

```bash
restorecon [options] [path...]
```

## Parameters

- `path`: File or directory paths to restore.

## Common Options

- `-R`, `-r`, `--recursive`: Recursively restore contexts on directories.
- `-v`, `--verbose`: Show files whose context changed.
- `-VV`: Show all files examined, even if the context did not change.
- `-F`, `--force`: Force restoration, overriding the current context even if it matches the default.
- `-n`, `--nochange`: Do not change any contexts (dry run). Use with `-v` to preview.
- `-p`, `--progress`: Show progress when processing many files.
- `-e directory`: Exclude a directory from processing.
- `-f file`: Read file paths from a file instead of the command line.
- `-T threads`: Use multiple threads for faster processing on large directory trees.
- `-i`, `--ignore-failure`: Ignore errors and continue processing.
- `-o file`: Save files with changed context to a file.
- `-W`, `--warn-on-mismatch`: Issue warnings for mismatched context entries.

## Examples

```bash
restorecon -v /etc/passwd
```

Restore and show the SELinux context for `/etc/passwd`.

```bash
restorecon -Rv /var/www/html
```

Recursively restore contexts on a web server document root.

```bash
restorecon -nRv /home
```

Preview what would be changed without making modifications.

```bash
restorecon -RFv /etc
```

Force recursive restore on `/etc`, overriding any existing contexts.

```bash
restorecon -rv /var/lib/mysql
```

Recursively restore contexts on MySQL data directory (common fix for MariaDB/MySQL SELinux issues).

```bash
restorecon -pRv / 2>&1 | head -100
```

Show progress while recursively restoring the entire filesystem (first 100 lines).

```bash
touch /.autorelabel && reboot
```

Alternative: create `.autorelabel` and reboot to restore all SELinux contexts system-wide.

## Practical Notes

- SELinux context mismatches are a frequent cause of "permission denied" in logs (`/var/log/audit/audit.log`). Run `restorecon -Rv /path` as a first troubleshooting step.
- The `-n` (no-change) option combined with `-v` provides a safe preview of what `restorecon` would change.
- After copying files with `cp -a` or `mv` between SELinux-aware paths, contexts may be incorrect. Use `restorecon` to fix them.
- The default file contexts are defined in SELinux policy files under `/etc/selinux/targeted/contexts/files/`.
- Use `ls -Z` to view the current SELinux context of files.
- To change context to a specific type instead of the default, use `chcon`.
- The equivalent command for restoring contexts on the entire root filesystem is `fixfiles restore` or creating `/.autorelabel` and rebooting.
