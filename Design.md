---
name: Cybernetic Infrastructure
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e13'
  surface-container-low: '#191c20'
  surface-container: '#1d2024'
  surface-container-high: '#272a2f'
  surface-container-highest: '#32353a'
  on-surface: '#e1e2e9'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#e1e2e9'
  inverse-on-surface: '#2e3035'
  outline: '#859399'
  outline-variant: '#3c494e'
  surface-tint: '#47d6ff'
  primary: '#a5e7ff'
  on-primary: '#003543'
  primary-container: '#00d2ff'
  on-primary-container: '#00566a'
  inverse-primary: '#00677f'
  secondary: '#7bffd8'
  on-secondary: '#00382b'
  secondary-container: '#08e6ba'
  on-secondary-container: '#00624e'
  tertiary: '#cfddfd'
  on-tertiary: '#233049'
  tertiary-container: '#b3c1e0'
  on-tertiary-container: '#414f69'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b6ebff'
  primary-fixed-dim: '#47d6ff'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e60'
  secondary-fixed: '#42fed0'
  secondary-fixed-dim: '#00e0b5'
  on-secondary-fixed: '#002018'
  on-secondary-fixed-variant: '#005140'
  tertiary-fixed: '#d7e3ff'
  tertiary-fixed-dim: '#b9c7e6'
  on-tertiary-fixed: '#0d1b33'
  on-tertiary-fixed-variant: '#394761'
  background: '#111318'
  on-background: '#e1e2e9'
  surface-variant: '#32353a'
typography:
  headline-2xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-2xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  code-metric:
    fontFamily: JetBrains Mono
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.02em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an ultra-precise, commanding, and resilient aesthetic engineered for enterprise managed service providers (MSP), mission-critical cloud orchestration, and cybersecurity operations centers. The personality reflects unwavering reliability, high-velocity incident response, and institutional security posture. 

The visual style synthesizes modern dark-mode technical minimalism with controlled glassmorphism and subtle cybernetic luminescence. High-contrast typography on true deep obsidian foundations evokes the clarity of real-time monitoring terminals, while precision hairline borders and focused radial glow accents delineate hierarchy without clutter. Surfaces feel engineered rather than decorated—delivering immediate status comprehension, trust, and technological superiority to CIOs, sysadmins, and security directors.

## Colors

The palette directly extrapolates the glowing multi-dimensional identity of the brand logo, engineered strictly for high-contrast dark environments:

- **Primary Electric Cyan (`#00D2FF`)**: Active focal color reserved for primary calls to action, active navigation indicators, key system links, and focused boundary glows.
- **Secondary Vibrant Mint/Teal (`#00E5B9`)**: System operational color signaling optimal health (`200 OK`), zero vulnerability status, secured perimeters, and secondary action highlights.
- **Tertiary Deep Navy (`#16243C`)**: Structural surface tier for elevated cards, active toggles, and layered panel dividers.
- **Obsidian Dark Canvas (`#000000` / `#05070B`)**: True deep OLED black root canvas, minimizing visual strain during long monitoring sessions and delivering infinite contrast.
- **Surface Elevation Steps**:
  - `Base Canvas`: `#05070B`
  - `Surface 1 (Panels / Containers)`: `#0A111E`
  - `Surface 2 (Elevated Cards / Floating Modals)`: `#0F192C`
  - `Surface 3 (Hover States / Overlays)`: `#16243C`
- **Text & Foreground**:
  - `Text Primary`: `#FFFFFF` (100% stark white readability for core headers and crucial telemetry).
  - `Text Secondary`: `#94A3B8` (Cool muted slate for metadata, secondary descriptions, and timestamps).
  - `Text Tertiary / Muted`: `#475569` (Inactive placeholders and subtle gridlines).

## Typography

The typographic hierarchy establishes clear structural distinction across three specialized type families:

1. **Plus Jakarta Sans (Headlines)**: Delivers geometric authority, modern crisp terminals, and high executive presence. Applied across marketing titles, dashboard header views, and major section banners.
2. **Inter (Body Text & Controls)**: Standard-bearer for functional UI density, interface microcopy, documentation, and continuous reading comfort.
3. **JetBrains Mono (Telemetry, Badges & Code)**: Essential for all quantitative IT metrics, SLA counters, IP addresses, terminal outputs, and security badge indicators.

All display titles utilize slight negative letter-tracking (`-0.02em` to `-0.03em`) to enhance cohesion against pitch-black backgrounds, while monospaced metrics and uppercase status tags implement expanded tracking (`+0.05em` to `+0.06em`) for instant scanning.

## Elevation & Depth

Visual hierarchy does not use heavy muddy drop shadows; instead, it relies on **Tonal Layers**, **Crisp Hairline Outlines**, and **Cybernetic Glow Radiance**:

- **Layer 0 (Canvas)**: Solid `#05070B` or `#000000`. Optionally overlaid with a subtle CSS grid pattern (`1px` lines in `#0F192C` spaced at `32px` intervals with `0.4` opacity).
- **Layer 1 (Card / Container Panels)**: `#0A111E` background paired with a `1px` border of `rgba(255, 255, 255, 0.08)` or `rgba(0, 210, 255, 0.12)`.
- **Layer 2 (Elevated Modules & Flyouts)**: `#0F192C` background with subtle backdrop-filter blur (`12px`) and an outer perimeter border of `rgba(0, 210, 255, 0.20)`.
- **Glow Accents**:
  - *Electric Primary Halo*: `0 0 24px -4px rgba(0, 210, 255, 0.35)` applied on hover states of active enterprise cards, security shields, and primary buttons.
  - *Operational Status Halo*: `0 0 16px -2px rgba(0, 229, 185, 0.40)` reserved for live uptime, healthy network tunnels, and compliant infrastructure nodes.
  - *Critical Breach Halo*: `0 0 20px -2px rgba(255, 75, 75, 0.45)` for high-severity alerts.

## Shapes

This design system embraces an engineered, high-precision shape profile utilizing `roundedness: 3` (Pill-shaped / highly rounded aesthetic). 

- **Micro Controls & Badges**: Fully rounded or pill-like geometries to emphasize fluidity and modern technical contrast.
- **Interactive Buttons & Input Fields**: Generous corner radii providing a friendly yet high-performance appearance.
- **Cards & Data Modules**: Smooth, highly rounded corners (`rounded-xl`) softening dense telemetry containers.
- **Pill Badges (`9999px`)**: Strictly reserved for live ping status indicators, network pulse dots, and cybersecurity compliance tags (e.g., "SOC-2 Type II Certified", "ISO 27001").

## Components

### Buttons
- **Primary Cyber Button**: Background gradient from `#00D2FF` to `#00E5B9` (135deg). Solid `#05070B` high-contrast bold typography. On hover: shifts brightness by 10% and emits a dual cyan/teal ambient glow (`0 0 24px rgba(0, 210, 255, 0.4)`).
- **Secondary Ghost Button**: Transparent background, `1px` border in `rgba(0, 210, 255, 0.4)`. Text `#00D2FF`. On hover: background fills with `rgba(0, 210, 255, 0.08)`, border snaps to full `#00D2FF`.
- **Destructive Action**: `#1A0A0E` background, `1px` border `#FF4D4D`, text `#FF4D4D`.

### Cybersecurity & Status Badges
- Built using `JetBrains Mono` at `11px` / `12px` uppercase.
- Contain a pulsing dot indicator (`8px` diameter) with an outer synchronized keyframe ping wave.
- **Active / Secure**: Mint/Teal tint (`background: rgba(0, 229, 185, 0.1)`, `border: 1px solid rgba(0, 229, 185, 0.3)`, `color: #00E5B9`).
- **Monitoring / Processing**: Cyan tint (`background: rgba(0, 210, 255, 0.1)`, `border: 1px solid rgba(0, 210, 255, 0.3)`, `color: #00D2FF`).

### Cards & Telemetry Containers
- Background `#0A111E`, bordered with `1px solid rgba(255, 255, 255, 0.07)`.
- Cards feature top corner hairline accent borders (`32px` width) in `#00D2FF` to simulate server rack blade geometry.
- Metric cards showcase top-aligned `JetBrains Mono` values (`code-metric`) in `#FFFFFF` with change diffs in `#00E5B9` or `#FF5353`.

### Input Fields & Controls
- Background `#05070B` inset into `#0A111E` panels.
- Default border `1px solid #16243C`. Focus border transitions instantaneously to `#00D2FF` with `box-shadow: 0 0 0 1px #00D2FF, 0 0 12px rgba(0, 210, 255, 0.25)`.
- Placeholder text in `#475569`. Entered text in `#FFFFFF`.

### Checkboxes & Radios
- Highly rounded technical squares or circles with deep navy fill (`#0F192C`) and `1px solid #1E293B`.
- Checked state: `#00D2FF` filled with stark white checkmark or inner core dot, displaying a localized cyan glow.

### Infrastructure Node Lists
- Zebra-less rows with `1px` divider borders (`rgba(255, 255, 255, 0.05)`).
- Hovering a row initiates a smooth gradient sweep across the left border (`3px` accent in `#00D2FF`) and adjusts row background to `rgba(22, 36, 60, 0.4)`.