---
name: smbpasswd
summary: Change SMB password for a Samba user.
category: Administration
tags: samba, password, smb, user, authentication
popular: false
---

## Additional Notes

`smbpasswd` manages the SMB password hashes stored in the Samba password database. It is used to add, modify, or delete Samba user accounts and their passwords. The Samba password database is separate from the Unix/Linux system password database, though usernames typically correspond.

The tool supports several password backends including `smbpasswd` file (flat file), `tdbsam` (Trivial Database), `ldapsam` (LDAP), and Active Directory domain membership. Modern Samba installations use `tdbsam` by default, with password data stored in `/var/lib/samba/private/passdb.tdb`.

## Syntax

```bash
smbpasswd [options] [username]
```

## Parameters

- `username`: The Samba user whose password to change. Defaults to the current user.

## Common Options

- `-a`: Add a new Samba user (creates the account).
- `-x`: Delete a Samba user (removes the account).
- `-d`: Disable a Samba user account.
- `-e`: Enable a previously disabled Samba user account.
- `-n`: Set the password to null (no password) for the user.
- `-s`: Read the password from stdin instead of the terminal (for scripts). Use `-s` with `printf`.
- `-U user`: Change the password of a user other than the one executing the command (requires root).
- `-r host`: Connect to the specified remote SMB server to change the password.
- `-w password`: Set the machine account password for the domain.
- `-c file`: Specify the smb.conf file to use.
- `-L`: Use local machine mode (do not contact domain controller).

## Examples

```bash
smbpasswd -a alice
```

Add user `alice` to the Samba password database and prompt for a password.

```bash
smbpasswd alice
```

Change the SMB password for user `alice`.

```bash
smbpasswd -x bob
```

Delete the Samba user `bob`.

```bash
smbpasswd -d charlie
```

Disable the Samba account for user `charlie`.

```bash
printf "newpass\nnewpass\n" | smbpasswd -s -a alice
```

Add user `alice` with the password read from stdin (scripting).

```bash
smbpasswd -r SERVER01 -U alice
```

Change the SMB password for `alice` on the remote server `SERVER01`.

## Practical Notes

- Samba users must exist as Unix/Linux system users before being added with `smbpasswd -a`.
- The password specified should match the Unix login password for consistency, though they are stored separately.
- The `-s` option is critical for scripting; without it, `smbpasswd` tries to open `/dev/tty`.
- Disabled accounts (`-d`) cannot authenticate to Samba services but retain their password hash.
- For Active Directory domain membership, use `net ads` commands instead of `smbpasswd`.
- The Samba password database uses LanMan and NT hash algorithms (enabled/disabled via `smb.conf`).
