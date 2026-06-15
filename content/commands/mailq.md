---
name: mailq
summary: Display the mail queue.
category: Administration
tags: mail, queue, mta, sendmail, postfix
popular: false
---

## Additional Notes

`mailq` prints the contents of the mail queue, showing messages that have not yet been delivered. It is a front-end to the MTA's queue viewing mechanism and works with Sendmail, Postfix, Exim, and other MTAs.

Each queued message shows the queue ID, message size, date, sender, and recipients. Messages remain in the queue when delivery is delayed (e.g., the recipient server is unreachable) or deferred (temporary failure).

## Syntax

```bash
mailq [options]
```

## Parameters

- `options`: Flags that change how `mailq` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-Ac`: Show the queue for the MTA's client submission program.
- `-Am`: Show the queue for the MTA itself (default).
- `-q`: Try to process the queue immediately (flush).
- `-v`: Verbose output with additional details.
- `-O option=value`: Pass options to the MTA.

## Examples

```bash
mailq
```

Show all queued messages.

```bash
mailq | grep -c "^[A-F0-9]"
```

Count the number of queued messages.

```bash
sudo mailq -q
```

Attempt to flush the queue (process pending messages).

```bash
mailq -v
```

Show the queue with verbose details.

## Practical Notes

- If the queue is large, mail delivery may be delayed or the MTA may be overwhelmed.
- For Postfix-specific queue management, use `postqueue -p` (list) and `postsuper -d` (delete).
- For Exim, use `exim -bpc` to count messages and `exim -Mrm <id>` to remove specific messages.
- Root or `mail` group membership is typically required to view or manipulate the queue.

