---
name: mail
summary: Send and receive email from the command line.
category: Administration
tags: email, mail, send, receive, mutt
popular: false
---

## Additional Notes

`mail` is a simple command-line email client that can send and receive messages. On most Linux systems, it is provided by the `mailx` or `heirloom-mailx` package (or the BSD `mail` command). It can send emails directly from scripts or be used interactively to read messages from the local mail spool.

It is most commonly used for sending automated notifications, system alerts, and cron job output. For interactive email use, most users prefer `mutt`, `alpine`, or a graphical client.

## Syntax

```bash
mail [options] [recipient...]
```

## Parameters

- `recipient`: Email address of the recipient when sending.

## Common Options

- `-s subject`: Set the email subject line.
- `-a file`: Attach a file to the message.
- `-c address`: Send a carbon copy (CC) to the address.
- `-b address`: Send a blind carbon copy (BCC) to the address.
- `-r address`: Set the return/from address.
- `-v`: Verbose mode, shows SMTP conversation.
- `-E`: If stdin is empty, do not send the message.
- `-q file`: Read the message body from a file.
- `-N`: Suppress initial header display in interactive mode.
- `-f file`: Read mail from an alternative mailbox file.

## Examples

```bash
echo "System backup completed successfully." | mail -s "Backup Report" admin@example.com
```

Send an email with a subject line, reading the body from stdin.

```bash
mail -s "Disk Usage Alert" -c manager@example.com admin@example.com < /tmp/alert.txt
```

Send an email with a CC and body from a file.

```bash
mail -s "Logs" -a /var/log/syslog user@example.com < /dev/null
```

Send an email with an attachment and empty body.

```bash
mail -s "Test" -r "noreply@example.com" user@example.com
```

Send with a custom From address.

```bash
mail
```

Read local mail interactively. Type `h` to list headers, `t <num>` to read a message, `d <num>` to delete, `q` to quit.

## Sending with a Body From a Pipe

```bash
df -h | mail -s "Disk Free Report" admin@example.com
```

## Practical Notes

- The system must have a Mail Transfer Agent (MTA) installed and configured, such as Postfix, Sendmail, or Exim.
- For sending to external addresses, the MTA must be configured to relay mail appropriately.
- The `-a` attachment option is not supported by all `mail` implementations. Use `mutt` or `mpack` for more robust attachments.
- Check local mail in `/var/mail/$USER` or `/var/spool/mail/$USER`.
- The `MAIL` environment variable points to the user's mailbox file.

