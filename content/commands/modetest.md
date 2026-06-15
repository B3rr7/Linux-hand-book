---
name: modetest
summary: Test DRM/KMS display modes on Linux.
category: Development
tags: drm, kms, display, gpu, mode, test
popular: false
---

## Additional Notes

`modetest` is a utility for testing the Direct Rendering Manager (DRM) and Kernel Mode Setting (KMS) subsystems on Linux. It can enumerate display connectors, CRTCs, planes, and encoders, and it can set display modes for testing.

It is primarily used by developers working on graphics drivers, display servers (Wayland, Xorg), or embedded display systems. It can force a specific resolution, refresh rate, or display configuration to verify hardware functionality.

## Syntax

```bash
modetest [options] [driver]
```

## Parameters

- `driver`: The DRM driver to use (e.g., `i915`, `amdgpu`, `nouveau`, `virtio`). If omitted, the first available driver is used.

## Common Options

- `-M module`: Specify the DRM driver module by name.
- `-e`: Only enumerate (list) connectors, CRTCs, encoders, and planes.
- `-a`: Atomic mode setting test.
- `-s connector:mode`: Set a display mode on a connector (e.g., `-s 32:1920x1080`).
- `-P plane:format`: Test a plane with a specific pixel format.
- `-v`: Verbose output.
- `-D device`: Use a specific DRM device (e.g., `/dev/dri/card0`).
- `-w`: Wait for vertical blank before updating.

## Examples

```bash
modetest -e
```

List all connectors, CRTCs, encoders, and planes.

```bash
modetest -M i915 -e
```

List display hardware for the Intel i915 driver.

```bash
modetest -s 32:1920x1080
```

Set connector 32 to 1920x1080 resolution.

```bash
modetest -v -D /dev/dri/card1
```

Show verbose information for the second DRM device.

## Practical Notes

- `modetest` is part of the `libdrm` utilities package. Install with `apt install libdrm-utils` or equivalent.
- The connector, CRTC, and plane IDs are dynamic and can change. Run `-e` first to enumerate them.
- Setting a mode with `-s` may change your display; use with caution on production systems.
- For Wayland compositor or Xorg debugging, `modetest` provides raw DRM access that can help isolate driver issues.

