---
name: mkcert
summary: Create locally trusted TLS/SSL certificates for development.
category: Development
tags: tls, ssl, certificate, https, development, localhost
popular: true
---

## Additional Notes

`mkcert` is a simple tool for creating locally trusted TLS certificates. It generates certificates signed by a local certificate authority (CA) that you install into the system trust store, so browsers and tools accept them as valid without security warnings.

It solves the common development problem of HTTPS certificates for `localhost`, `127.0.0.1`, or internal network names. Instead of bypassing browser security warnings or using self-signed certificates, `mkcert` creates certificates that are fully trusted by your operating system and browser.

## Syntax

```bash
mkcert [options] domain-or-ip...
```

## Parameters

- `domain-or-ip`: One or more hostnames or IP addresses to include in the certificate (e.g., `localhost`, `127.0.0.1`, `dev.local`, `*.test`).

## Common Options

- `-install`: Generate and install the local CA certificate into the system trust store.
- `-uninstall`: Remove the local CA from the system trust store.
- `-cert-file file`: Specify the output path for the certificate file.
- `-key-file file`: Specify the output path for the key file.
- `-pkcs12`: Generate a PKCS#12 (`.p12`) file instead of PEM.
- `-client`: Generate a client certificate for client authentication.
- `-ecdsa`: Generate an ECDSA key instead of RSA.
- `-CAROOT`: Print the path to the CA files and exit.

## Examples

```bash
mkcert -install
```

Create and install a local CA into the system trust store.

```bash
mkcert localhost 127.0.0.1 ::1
```

Generate a certificate for localhost addresses.

```bash
mkcert dev.local "*.dev.local"
```

Generate a certificate for a development domain and its wildcard.

```bash
mkcert -cert-file cert.pem -key-file key.pem example.test
```

Generate a certificate with custom output filenames.

```bash
mkcert -pkcs12 localhost
```

Generate a certificate in PKCS#12 format (for Java, Windows, etc.).

```bash
mkcert -uninstall
```

Remove the local CA from the system trust store.

```bash
mkcert -CAROOT
```

Show the location of the CA certificate and key files.

## Integrating with Development Servers

```bash
mkcert localhost
# Creates localhost.pem and localhost-key.pem
# Use these with your server:
# node: https.createServer({ key, cert })
# python: python -m http.server --cert localhost.pem 443
```

```bash
mkcert -install
npm run dev
```

Many frameworks (Vite, Webpack dev server, etc.) automatically detect mkcert certificates.

## Practical Notes

- Run `mkcert -install` once to set up the local CA. This creates and trusts a root CA certificate.
- Certificates are generated per-project or per-use. They are valid for 2 years by default.
- The CA root certificate must be installed on each machine that needs to trust the certificates.
- For CI/CD or containers, `mkcert` CA setup can be scripted.
- Firefox uses its own certificate store; `mkcert -install` handles this automatically if `certutil` is available.
- The generated certificate and key files are PEM-encoded and compatible with most servers.

