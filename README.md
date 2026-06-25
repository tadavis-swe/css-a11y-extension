# css-a11y-extension

## Project Overview
The Extension is a lightweight accessibility tool that gives users direct control over how websites scale and display content. Many sites still lack reliable zoom controls or break when browser zoom is applied; this extension steps in to provide consistent, predictable scaling through injected CSS and a simple, intuitive UI.

Built as a focused accessibility enhancement rather than a full redesign tool, it delivers a stable, no-nonsense way to make any webpage easier to read - whether for comfort, clarity, or genuine accessibility needs.

## The Problem
Modern websites love to pretend they're accessible, but the reality is far messier. Many pages lock down zoom behavior, scale unpredictably, or break entirely when users try to enlarge text for readability. Browser-level zoom helps, but it often distorts layouts, shifts elements off-scring, or triggers responsive breakpoints that weren't meant for accessibility at all.

For users who simply need content to be *bigger* - not reagganged, not reflowed, not redesigned - there's no consistent, reliable way to scale a page without the site fighting back. This leaves a gap between what users need for comfort or accessibility and what the web actually delivers.

## The Solution
The Extension takes the simplest, most reliable path: instead of fighting each website's layout quirks or relying on browser zoom, it injects a clean CSS scaling layer that *always* behaves the same way. A small popup UI sends scale commands, the content script updates a single CSS variable, and the page scales smoothly without breaking layout, shifting breakpoints, or triggering responsive chaos.

By keeping the logic minimal and the behavior predictable, the extension delivers a consistent accessibility experience across every site - even the ones that normally resist user-controlled zoom. It's a focused, stable tool that does one job well: make the web easier to read without getting in the user's way.

## Features

- Consistent Page Scrolling - Applies a CSS-based scale transform that works the same way on every site, even the stubborn ones that fight browser zoom.
- Simple Popup Controls - One click to scale up, one click to scale down. No menus, no clutter, no congnitive overhead.
- Non-Destructive Layout Behavior - Scaling doesn't trigger responsive breakpoints or shove elements off-screen; the page stays intact, just bigger.
- Lightweight CSS Injection - Injects a single CSS variable and transform rule, keeping the extension fast, stable, and easy to maintain.
- Message-Driven Architecture - Popup and content script communicate cleanly through Chrome's messaging API for predictable behavior.
- Zero External Dependencies - No frameworks, no libraries, no bloat. Just native Chrome APIs and a few lines of CSS.

## How It Works
- Popup UI triggers action - When the user clicks "Scale Up" or "Scale Down," the popup sends a messages to the active tab using Chrome's messaging API.
- Content script receives commands - The content script listens for those messages and updates a CSS variable (--a11y-scale) based on the requested scale direction.
- CSS injection handles the actual scaling - On load, the content script injects a small <style> block that applies a transform: scale() to the entire page using that variable.
- Scaling stays predictable - Because the extension uses a single transform instead of browser zoom, the layout stays intact and avoids triggering responsive breakpoints.
- No external dependencies - Everything runs on native Chrome APIs and a few lines of CSS, keeping the extension fast, stable, and easy to maintain.

## How To Use
- Install the extension - Load it as an unpacked extension in Chrome's Extensions page.
- Open any webpage - The tool works everywhere, from news sites to dashboards to the stubborn ones that hate zoom.
- Click the extension icon - This opens the lightweight popup with the scale controls
- Use the Scale Up or Scale Down buttons - Each click adjusts the page size using the injected CSS scaling layer.
- Continue adjusting until the page feels comfortable - The layout stays intact; only the visual scale changes.
- Close the popup and browse normally - The scaling persists on the page until you refresh or change it again.

## Installation
Step 1 - clone repo
Step 2 - load unpacked extension

## Development Notes
- Current scaling behavior - The extension scales the entire page uniformly using a CSS transform: scale(). This keeps things predictable, but it also means the page grows outward in all directions instead of reflowing within the browser window
- Horizontal overflow appears immediately - Because the aspect ratio stays locked, even a single-scale up action can push the page wider than the viewport. Chrome responds by showing a horizontal scrollbar. This is expected with trnasofrm-based scrolling and not a bug.
- Why this happens - transform: scale() doesn't cause the browser to recalculate the layout; it just visually enlarges the rendered output. The DOM still  thinks it's the original size, so the scaled version spills past the viewport.
- Future mitigation ideas - potential solutions include dynamic translateX offsets, viewport-aware scaling, or switching to a hybrid approach that scales text and key containers instead of the entire document
- Stability status - As of the latest commit, the extension is mostly stable: everything works, nothing wobbles, and it's safe to build on top of.

## Roadmap
Persistence
Transitions
Per-Site settings
Contrast Mode

## License
This project is licensed under the MIT license.
See the LICENSE for full details.