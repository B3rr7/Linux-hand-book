---
name: talk
summary: Two-way text-based chat with another user.
category: Network
tags: talk, chat, messaging, communication
popular: false
---

## Additional Notes

`talk` is a visual two-way text communication program that allows a user to have a split-screen conversation with another user on the same system or a remote system. Each participant's typing appears in a separate window pane, with their own input at the bottom and the other user's input at the top.

The talk protocol requires a talk daemon (`talkd` or `in.talkd`) running on the target system. It uses UDP ports 517 (talk) and 518 (ntalk). The command has been largely replaced by modern instant messaging, IRC, and collaboration tools.

## Syntax

```bash
talk user [tty]
talk user@host [tty]
```

## Parameters

- `user`: The username of the person to talk to.
- `host`: Remote hostname (for talking to users on another system).
- `tty`: Terminal line (optional, if the user is logged in multiple times).

## Examples

```bash
talk alice
```

Initiate a talk session with user `alice` on the local system.

```bash
talk bob@remote-server
```

Start a talk session with user `bob` on `remote-server`.

```bash
talk alice pts/1
```

Talk to user `alice` specifically on terminal `pts/1`.

## Practical Notes

- The `talk` service must be enabled on the remote host (typically via `talkd` in inetd/xinetd).
- The target user receives a "Talk request from ..." message on their terminal and must respond with `talk username` to accept.
- Use `who` or `w` to see which users are logged in and their terminal numbers.
- `talk` sends all text in cleartext with no encryption.
- Modern alternatives: `write` (simpler local messaging), `wall` (broadcast), `irc`, `tmux` shared sessions, or instant messaging apps.
- Most distributions no longer install `talk` or `talkd` by default.
