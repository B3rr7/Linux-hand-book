---
name: write
summary: Send a message to another user's terminal.
category: System
tags: message, user, terminal, talk, communication
popular: false
---

## Additional Notes

`write` sends a text message directly to another user's terminal. The message appears on the recipient's terminal in real time, prefixed with a header showing the sender's username and terminal. The recipient can reply with their own `write` command, creating a two-way chat session terminated by `Ctrl+D` or `Ctrl+C`.

This command predates modern instant messaging and was commonly used on multi-user Unix systems for inter-user communication. It only works if the recipient has enabled `mesg y` (messages allowed). On systems with graphical desktops, users may not have a writable terminal.

## Syntax

```bash
write user [terminal]
```

## Parameters

- `user`: The username of the recipient.
- `terminal`: If the user is logged in on multiple terminals, specify which one.

## Examples

```bash
write alice
Hello Alice, the build is done.
^D
```

Send a message to `alice` on her current terminal. End with `Ctrl+D`.

```bash
write bob pts/1
```

Send to `bob` specifically on terminal `pts/1`.

## Practical Notes

- The recipient must have messages enabled (`mesg y`). Check with `mesg`.
- Use `who -T` to see which users have messages enabled (`+`) or disabled (`-`).
- If the recipient is not logged in or has messages disabled, `write` reports an error.
- For modern inter-user messaging, use `wall` (write all), `talk`, or chat applications.
- Press `Ctrl+C` or `Ctrl+D` to end the message.
- A `write` session is plain text only; no formatting or file transfer is supported.
