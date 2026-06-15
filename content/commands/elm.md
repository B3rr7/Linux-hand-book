---
name: elm
summary: Command-line email client with full-screen interface.
category: Network
tags: email, mail, client, terminal, mutt
popular: false
---

## Additional Notes

`elm` is an interactive, full-screen email client for the terminal. It provides a menu-driven interface for reading, composing, replying, forwarding, and managing email messages. It was one of the early popular email clients on Unix systems before `mutt` and `pine` gained prominence.

The name stands for "ELectronic Mail." `elm` supports local mailboxes (`/var/mail`), MH folders, and can send messages via a local MTA or SMTP relay. It provides a built-in address book, message filtering, and user-configurable aliases.

## Syntax

```bash
elm [options] [address...]
```

## Parameters

- `address`: Recipient address. If given, `elm` starts in compose mode addressed to that user.

## Common Options

- `-f mailbox`: Open an alternate mailbox instead of the default inbox.
- `-i file`: Include the contents of a file in the message when composing.
- `-s subject`: Set the subject line when composing from the command line.
- `-a file`: Attach a file to the message.
- `-c cc-address`: Set a CC address when composing.
- `-b bcc-address`: Set a BCC address when composing.
- `-d level`: Enable debugging at the specified level.
- `-h`: Display help.
- `-m`: Check for new mail.
- `-p`: Print the current message to stdout.
- `-z`: Exit immediately if there is no mail.

## Examples

```bash
elm
```

Open the main mailbox interface.

```bash
elm user@example.com
```

Compose a new message to a recipient.

```bash
elm -s "Report" -i report.txt user@example.com
```

Compose a message with a subject line and included file body.

```bash
elm -f ~/Mail/archive
```

Open an alternate mailbox folder.

## Practical Notes

- `elm` is less common on modern distributions; many users have migrated to `mutt`, `alpine`, or `neomutt`.
- Commands within `elm` use single-key shortcuts: `n` for next, `d` for delete, `r` for reply, `s` for save, `q` for quit.
- Local mail is typically stored in `/var/mail/$USER` for the system mailbox.
- Configuration is in `~/.elm/elmrc`.
- For sending mail in scripts without an interactive session, prefer `mail` or `sendmail` directly.
