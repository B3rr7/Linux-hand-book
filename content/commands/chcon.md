---
name: chcon
summary: Change SELinux security context for files.
category: Security
tags: selinux, context, security, file
popular: false
---

## Additional Notes

`chcon` changes the SELinux security context of files and directories. Context labels affect what confined processes are allowed to access.

Use it for temporary label changes or testing. For persistent SELinux policy-based labeling, use `semanage fcontext` followed by `restorecon`.

## Syntax

```bash
chcon [options] context file...
chcon [options] --reference=ref-file file...
```

## Parameters

- `context`: SELinux context or part of a context.
- `file`: File or directory to relabel.
- `ref-file`: File whose context should be copied.
- `options`: User, role, type, range, recursion, and reference controls.

## Common Options

- `-t TYPE`: Set SELinux type.
- `-u USER`: Set SELinux user.
- `-r ROLE`: Set SELinux role.
- `-l RANGE`: Set SELinux range.
- `-R`: Recurse into directories.
- `--reference=FILE`: Copy context from another file.

## Examples

```bash
ls -Z index.html
```

View current SELinux context.

```bash
sudo chcon -t httpd_sys_content_t index.html
```

Set a web-content type temporarily.

```bash
sudo chcon --reference=/var/www/html/index.html ./index.html
```

Copy context from a reference file.

```bash
sudo restorecon -v index.html
```

Restore the default policy label.

## Practical Notes

- `chcon` changes can be overwritten by `restorecon`.
- Use `semanage fcontext` for persistent custom path labeling.
- SELinux must be enabled for labels to affect access decisions.
