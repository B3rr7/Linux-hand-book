---
name: bye
summary: Exit an FTP session in interactive clients.
category: Network
tags: ftp, session, exit, network
popular: false
---

## Additional Notes

`bye` is commonly used inside interactive FTP-style clients to close the session and exit the client. It is not usually a standalone Linux executable.

You may see it in FTP tutorials, command transcripts, and interactive network tools.

## Syntax

```text
ftp> bye
```

## Parameters

- No arguments are normally needed.
- Some clients also support `quit` or `exit`.

## Examples

```bash
ftp ftp.example.com
```

Start an FTP session.

```text
ftp> ls
ftp> bye
```

List files, then close the FTP session.

## Practical Notes

- Prefer SFTP or HTTPS over plain FTP when credentials or sensitive data are involved.
- In many clients, `bye`, `quit`, and sometimes Ctrl+D close the session.
- This page exists because `bye` appears in command references and interactive FTP workflows.
