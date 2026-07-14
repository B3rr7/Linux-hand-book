---
name: gpg
summary: Encrypt, decrypt, sign, and verify data with GnuPG.
category: Security
tags: security, policy, verify, encrypt, sign
popular: false
---

## Additional Notes

`gpg` is the GnuPG command-line tool for encryption, decryption, digital signatures, and key management. It works with both symmetric encryption (a passphrase) and public-key encryption (a key pair).

Keep public keys for others, protect your private key with a strong passphrase, and never share the private key.

## Syntax

```bash
gpg [options] [file ...]
```

## Parameters

- `options`: Flags that choose the operation (encrypt, decrypt, sign, verify).
- `file`: File to encrypt, decrypt, sign, or verify.

## Common Options

- `-c`, `--symmetric`: Encrypt with a passphrase only.
- `-e`, `--encrypt`: Encrypt to one or more recipients.
- `-r KEY`, `--recipient KEY`: Recipient key ID or email for encryption.
- `-d`, `--decrypt`: Decrypt a file or message.
- `-s`, `--sign`: Create a signed file.
- `--clearsign`: Sign so the message stays readable text.
- `-b`, `--detach-sign`: Create a separate signature file.
- `--verify`: Check a signature.
- `--armor`, `-a`: Use ASCII-armored (text) output instead of binary.
- `-o FILE`, `--output FILE`: Write to a specific file.
- `--gen-key`: Generate a new key pair (uses an interactive prompt).
- `--list-keys`: Show your public keys.
- `--import FILE`: Add a public key from a file.
- `--export KEY`: Export a public key.
- `--delete-keys KEY`: Remove a public key.

## Examples

```bash
gpg -c secret.txt
```

Encrypt `secret.txt` with a passphrase, producing `secret.txt.gpg`.

```bash
gpg -d secret.txt.gpg -o secret.txt
```

Decrypt back to `secret.txt`.

```bash
gpg -e -r alice@example.com notes.txt
```

Encrypt `notes.txt` so only Alice's key can open it.

```bash
gpg --sign document.pdf
```

Create `document.pdf.gpg` that is both signed and encrypted.

```bash
gpg --clearsign message.txt
```

Produce a readable, signed `message.txt.asc`.

```bash
gpg --verify document.pdf.sig document.pdf
```

Verify a detached signature against the file.

```bash
gpg --list-keys
gpg --import friend.pub
```

List your keys, then import a friend's public key.

## Practical Notes

- Use symmetric (`-c`) for quick local encryption; use `-e -r` for sending to someone.
- ASCII armor (`-a`) makes output safe to paste into email or chat.
- Protect your private key; losing it means losing access to decrypted data.
- Verify signatures before trusting downloaded files or software.
- Prefer a strong, unique passphrase and consider a hardware key for high-value keys.
