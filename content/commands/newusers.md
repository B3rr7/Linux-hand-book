---
name: newusers
summary: Create multiple users from a file in batch mode.
category: Administration
tags: user, create, batch, account, admin
popular: false
---

## Additional Notes

`newusers` creates user accounts in batch by reading a file with user information in the same format as `/etc/passwd`. It creates the user accounts, sets passwords, creates home directories, and assigns group memberships all in one operation.

It is useful for bulk user creation in classroom, lab, or enterprise environments where many accounts need to be set up at once. The input format allows specifying username, password, UID, GID, comment, home directory, and shell for each user.

## Syntax

```bash
newusers [options] [file]
```

## Parameters

- `file`: A file with user information in passwd format. If no file is given, reads from stdin.

## Input Format (same as /etc/passwd)

Each line has seven colon-separated fields:

```
username:password:uid:gid:comment:home-dir:shell
```

## Common Options

- `-c`, `--crypt`: Use crypt() encryption for passwords (default).
- `-r`, `--system`: Create system accounts instead of regular user accounts.
- `-s`, `--sha256`: Use SHA256 password hashing.
- `-t`, `--sha512`: Use SHA512 password hashing.
- `-b`, `--md5`: Use MD5 password hashing.
- `-d`, `--des`: Use DES password hashing.
- `-P`, `--password`: Read passwords as-is (already hashed).
- `-h`, `--help`: Show help.

## Examples

```bash
newusers users.txt
```

Create users defined in `users.txt`.

```
alice:password123:1001:1001:Alice Smith:/home/alice:/bin/bash
bob:password456:1002:1002:Bob Jones:/home/bob:/bin/bash
```

Example `users.txt` content.

```bash
echo "charlie:changeme:1003:1003:Charlie Brown:/home/charlie:/bin/bash" | newusers
```

Create a single user from stdin.

```bash
newusers -s users.txt
```

Create users with SHA256 password hashing.

```bash
newusers -r users.txt
```

Create system users (UIDs in the system range).

## Practical Notes

- Passwords in the input file are plaintext unless `-P` is used. The file should be kept secure and deleted after use.
- If the specified GID does not exist, a group with that GID is created automatically.
- Home directories are created with contents copied from `/etc/skel`.
- For single user creation, `useradd` is more appropriate and provides more control.
- On modern systems, consider using `ansible`, `puppet`, or similar tools for large-scale user management.

