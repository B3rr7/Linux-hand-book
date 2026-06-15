---
name: ar
summary: Create, modify, and inspect Unix archive files.
category: Development
tags: archive, library, object files, development
popular: false
---

## Additional Notes

`ar` works with Unix archive files. It is commonly used to create and inspect static libraries such as `libname.a`, which contain object files used by compilers and linkers.

It is not the same as `tar`. Use `ar` mainly for development artifacts and package internals, not normal backups.

## Syntax

```bash
ar [operation][modifiers] archive [members...]
```

## Parameters

- `operation`: Action such as `r`, `t`, `x`, or `d`.
- `archive`: Archive file, often a `.a` static library.
- `members`: Object files or member names.

## Common Operations

- `r`: Add or replace members.
- `c`: Create archive without warning.
- `s`: Write an index, similar to `ranlib`.
- `t`: List archive members.
- `x`: Extract members.
- `d`: Delete members.
- `v`: Verbose output.

## Examples

```bash
ar rcs libhello.a hello.o util.o
```

Create or update a static library.

```bash
ar t libhello.a
```

List archive members.

```bash
ar x libhello.a
```

Extract all members.

```bash
ar d libhello.a old.o
```

Delete one member from an archive.

## Practical Notes

- `ar` archives do not compress data.
- Static libraries usually need an index; use `rcs` for common creation.
- Use `nm` to inspect symbols inside object files or static libraries.
