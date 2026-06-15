---
name: rpmsign
summary: Sign RPM packages with a GPG signature.
category: Packages
tags: rpm, sign, gpg, package, security
popular: false
---

## Additional Notes

`rpmsign` adds and manages cryptographic signatures on RPM packages. Signing packages allows recipients to verify the authenticity and integrity of the package before installing it. Packages can be signed with a GPG key at build time (using `rpmbuild --sign`) or after building using `rpmsign`.

Signature verification is done by the RPM client using imported public keys. RPM signatures help ensure that the package was created by a trusted source and has not been tampered with since it was signed.

## Syntax

```bash
rpmsign --addsign package.rpm
rpmsign --resign package.rpm
rpmsign --delsign package.rpm
```

## Parameters

- `package.rpm`: The RPM package file to sign or verify.

## Common Options

- `--addsign`: Add a signature to the package (preserves any existing signatures).
- `--resign`: Remove all existing signatures and sign with the current key.
- `--delsign`: Remove all signatures from the package.
- `--delsignature N`: Remove a specific signature by number.
- `--checksig`: Verify the signature on a package.
- `--key-id KEY_ID`: Specify which GPG key to use for signing.
- `--pgppath PATH`: Path to the GPG binary or agent.
- `-v`, `--verbose`: Show detailed output during signing.

## Examples

```bash
rpmsign --addsign mypackage.rpm
```

Add a GPG signature to an existing unsigned package.

```bash
rpmsign --resign mypackage.rpm
```

Replace the signature with the current default GPG key.

```bash
rpmsign --checksig mypackage.rpm
```

Verify the signature on a package.

```bash
rpm --checksig --nosignature package.rpm
```

Check the package digest without checking the GPG signature.

## Practical Notes

- GPG signing requires a configured GPG key pair and `rpm` macros defining the key.
- The signing key is typically configured in `~/.rpmmacros` or `/etc/rpm/macros`.
- Signed packages display `gpg OK` when verified with `rpm -K`.
- Distribution repositories require packages to be signed for automatic acceptance.
- `rpmsign` is separate from `rpm --sign` on some older distributions.
