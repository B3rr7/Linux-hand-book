---
name: get_module
summary: Retrieve information about a LILO boot module.
category: System
tags: lilo, boot, module, configuration
popular: false
---

## Additional Notes

`get_module` is part of the LILO (Linux Loader) boot loader package and is used to retrieve stored boot module information. It reads the module configuration from the LILO boot map file and displays details about the specified module.

This command is rarely used on modern systems that have transitioned to GRUB as the default boot loader. It remains available in environments still using LILO for legacy boot management. The module information includes the name, size, and flags associated with each boot module.

## Syntax

```bash
get_module [options] [module-name]
```

## Parameters

- `module-name`: The name of the boot module to query.

## Common Options

- `-v`: Enable verbose output.
- `-h`: Display help information.
- `-V`: Show version information.

## Examples

```bash
get_module
```

List all available boot modules and their details.

```bash
get_module chain
```

Retrieve information about the `chain` boot module.

## Practical Notes

- `get_module` requires a LILO boot map file and will fail if LILO is not installed or configured.
- Modern Linux distributions use GRUB instead of LILO, making this command largely obsolete.
- LILO-related commands are typically included in the `lilo` package on distributions that still support it.
- For GRUB systems, use `grub2-set-default` or GRUB configuration file editing instead.
