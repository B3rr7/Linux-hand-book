---
name: htdigest
summary: Manage user authentication files for HTTP digest authentication.
category: Network
tags: apache, http, authentication, digest, password
popular: false
---

## Additional Notes

`htdigest` creates and updates user authentication files for HTTP Digest authentication used by web servers like Apache HTTP Server. Unlike Basic authentication, Digest authentication uses MD5 hashing to avoid sending passwords in clear text.

The digest file stores usernames, realm names, and hashed credentials in a format that the web server reads at runtime. Each line contains a username, realm, and an MD5 hash of `username:realm:password` separated by colons.

## Syntax

```bash
htdigest [options] password-file realm username
```

## Parameters

- `password-file`: The path to the digest password file (created if it does not exist).
- `realm`: The HTTP authentication realm name. This must match the realm configured in the web server.
- `username`: The username to create or update.

## Common Options

- `-c`: Create the password file. If the file exists, it is overwritten.
- `-b`: Use batch mode, taking the password from the command line instead of prompting.
- `-i`: Read the password from standard input.
- `-t`: Use the Digest SHA256 or SHA512 algorithm (if supported by the server).

## Examples

```bash
htdigest -c /etc/apache2/.htdigest "Private Area" alice
```

Create a new digest file and add user `alice` for the `Private Area` realm. You will be prompted for the password.

```bash
htdigest /etc/apache2/.htdigest "Private Area" bob
```

Add a new user `bob` to an existing digest file for the same realm.

```bash
htdigest -b /etc/apache2/.htdigest "Admin" admin s3cret
```

Add a user `admin` with password `s3cret` using batch mode (password on command line).

## Practical Notes

- The realm name in the password file must exactly match the `AuthName` directive in the Apache configuration.
- Digest authentication is more secure than Basic for environments where HTTPS is not enforced, but HTTPS is still recommended.
- The password file should be stored outside the web document root and have restricted permissions (e.g., 640).
- For Basic authentication, use `htpasswd` instead.
- To remove a user, manually delete the corresponding line from the digest file.
- Apache configuration requires `AuthType Digest` and `AuthDigestProvider file` to use this file.
