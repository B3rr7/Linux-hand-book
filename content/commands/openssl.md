---
name: openssl
summary: Cryptography toolkit for TLS/SSL, certificates, and encryption.
category: Network
tags: ssl, tls, certificates, encryption, cryptography, keys, hashing, csr, pem
popular: true
---

## Additional Notes

`openssl` is a command-line tool from the OpenSSL project that provides a wide range of cryptographic operations. It handles TLS/SSL protocol testing, public and private key generation, certificate signing requests (CSRs), self-signed certificates, certificate verification, symmetric and asymmetric encryption, message digests (hashing), Base64 encoding, and random number generation.

It is an essential tool for system administrators, security engineers, and developers working with HTTPS, TLS certificates, encryption at rest, code signing, and authentication systems. The tool wraps OpenSSL's libcrypto and libssl libraries into a single command with many subcommands.

`openssl` is composed of dozens of subcommands, each handling a specific cryptographic task. The most commonly used subcommands include `req` (certificate requests and generation), `x509` (certificate display and signing), `rsa`/`ec`/`dsa` (key management), `enc` (symmetric encryption), `dgst` (message digests), `s_client`/`s_server` (TLS test clients/servers), and `genrsa`/`genpkey` (key generation). The command has evolved significantly between versions 1.x and 3.x.

## Syntax

```bash
openssl subcommand [options] [parameters]
```

## Common Subcommands

### Key and Certificate Management

- `genrsa`: Generate an RSA private key.
- `genpkey`: Generate a private key of any type (RSA, EC, DSA, Ed25519).
- `ecparam`: Generate and manage elliptic curve parameters.
- `req`: Create and process certificate signing requests (CSRs) and self-signed certificates.
- `x509`: Display, sign, and manage X.509 certificates.
- `ca`: Simulate a certificate authority for signing certificates.
- `pkcs12`: Convert between PKCS#12 (PFX) and PEM formats.
- `verify`: Verify certificate chains.

### Encryption and Hashing

- `enc`: Symmetric encryption and decryption with ciphers like AES, DES, ChaCha20.
- `dgst`: Compute message digests (MD5, SHA1, SHA256, SHA512, etc.).
- `rsautl`: RSA operations for signing, verifying, encrypting, and decrypting.
- `pkeyutl`: Low-level public key operations.

### TLS/SSL Testing

- `s_client`: Generic TLS/SSL client for testing connections.
- `s_server`: Generic TLS/SSL server for testing.
- `s_time`: TLS/SSL connection timing and benchmarking.
- `speed`: Benchmark cryptographic algorithms.

### Data Encoding

- `base64`: Base64 encoding and decoding.
- `enc -base64`: Alternative Base64 handling.
- `rand`: Generate pseudo-random bytes.

## Parameters

- `options`: Flags that change how `openssl` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-help`: Show help for a specific subcommand.
- `-version`: Show OpenSSL version information.
- `-engine id`: Use a specified hardware or software engine.
- `-config file`: Specify an alternative configuration file.
- `-passin arg`: Password for reading encrypted input.
- `-passout arg`: Password for writing encrypted output.

## Examples

```bash
openssl version
```

Show the installed OpenSSL version. Use `-a` for full details.

```bash
openssl genrsa -out key.pem 2048
```

Generate a 2048-bit RSA private key.

```bash
openssl req -new -key key.pem -out csr.pem
```

Create a certificate signing request from an existing key.

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
```

Generate a self-signed certificate valid for 365 days (4096-bit RSA).

```bash
openssl x509 -in cert.pem -text -noout
```

Display the full contents of a certificate in human-readable form.

```bash
openssl s_client -connect example.com:443
```

Connect to an HTTPS server and display the TLS handshake and certificate chain.

```bash
openssl s_client -connect example.com:443 -servername example.com
```

Connect with SNI (Server Name Indication), needed for multi-domain hosts.

```bash
echo "text" | openssl enc -aes-256-cbc -pbkdf2 -out encrypted.bin
```

Encrypt text with AES-256-CBC using PBKDF2 key derivation.

```bash
openssl enc -d -aes-256-cbc -pbkdf2 -in encrypted.bin
```

Decrypt a file encrypted with AES-256-CBC.

```bash
openssl dgst -sha256 file.txt
```

Compute the SHA-256 hash of a file.

```bash
openssl dgst -sha256 -sign key.pem -out sig.bin file.txt
```

Sign a file with an RSA private key using SHA-256.

```bash
openssl dgst -sha256 -verify pubkey.pem -signature sig.bin file.txt
```

Verify a digital signature.

```bash
openssl rand -hex 32
```

Generate 32 random bytes as hex, useful for API keys or secrets.

```bash
openssl pkcs12 -export -out bundle.pfx -inkey key.pem -in cert.pem -certfile ca.pem
```

Create a PKCS#12 (PFX) file containing a private key and certificate chain.

```bash
openssl x509 -in cert.pem -noout -dates
```

Check the validity dates of a certificate.

```bash
openssl verify -CAfile ca-bundle.crt server.crt
```

Verify that `server.crt` was signed by the CA in `ca-bundle.crt`.

```bash
openssl req -in csr.pem -noout -text
```

Decode and display the contents of a CSR.

```bash
openssl ecparam -genkey -name prime256v1 -out eckey.pem
```

Generate an ECDSA private key using the P-256 curve.

```bash
openssl speed -evp aes-256-cbc
```

Benchmark AES-256-CBC performance on this system.

```bash
openssl s_time -connect example.com:443 -www /index.html
```

Time the negotiation and data transfer of repeated TLS connections.

## Practical Notes

- Always use strong keys: 2048-bit RSA minimum, 256-bit ECC, or Ed25519.
- Use `-pbkdf2` with `openssl enc` instead of the older `-md md5` or `-md sha1` for secure key derivation.
- Protect private key files with `chmod 600 key.pem` and consider encryption: `openssl genrsa -aes256`.
- On OpenSSL 3.x, the default legacy provider is disabled; use `-provider legacy -provider default` if needed for older algorithms.
- Use `openssl s_client -debug -msg` for TLS connection debugging.
- Check certificate expiry with monitoring scripts using `openssl x509 -checkend 86400` (checks if the cert expires within 24 hours).
- Different OpenSSL versions have incompatible default options; use explicit flags when portability matters.
- The `openssl ca` subcommand is powerful but complex; many prefer `easy-rsa`, `cfssl`, or `step` for CA management.
- For proper HTTPS certificate validation from the CLI, use `-CApath /etc/ssl/certs` with `s_client`.
