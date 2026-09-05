# dsh-teamwork

English | [中文](README.md)

[![DSH Plugin](https://img.shields.io/badge/DSH-Plugin-111111)](https://github.com/niushuanan/xiaozhuang-dsh) [![Release](https://img.shields.io/badge/release-xiaozhuang--v0.4.2-2563eb)](https://github.com/niushuanan/dsh-teamwork/releases/tag/xiaozhuang-v0.4.2) [![MIT](https://img.shields.io/badge/license-MIT-16a34a)](LICENSE)

Use DSH-native Sub-Agents by default under one coordinating agent, escalate selectively to Codex or Z Code, and bring every result back into the current task. External experts are runtime hot-pluggable.

The Teamwork Settings page reuses the product's shared title hierarchy. Older DSH builds without that primitive receive a size-matched built-in fallback, preserving hot-plug installation.

Current master targets DSH 0.1.3 with one complete plugin folder and bounded historical compatibility. It preserves Teamwork state, permissions, and model selections, publishing a newer Session file without modifying the original. The first migration requires the plugin; after publication, the current conversation remains readable when the plugin is removed. Unknown required events are never silently dropped. This update does not replace the old Release; use master for the fix.

<p align="center"><img src="docs/02-teamwork.webp" alt="Teamwork collaboration settings" width="800"></p>

## Install

1. Download the source ZIP from current master; the older [Releases](https://github.com/niushuanan/dsh-teamwork/releases/latest) do not contain this historical compatibility fix.
2. Give the ZIP to an AI that can read and modify the target DSH project.
3. Tell the AI: **Read AGENTS.md, INSTALL.md, and manifest.json first. Install only this plugin and preserve existing plugins, data, conversations, attachments, and settings.**
4. The installing AI merges the code and Cordis rows into the target version and validates only the entry points directly owned by this plugin.

## Native collaboration model

- Native `subagent` and `subagent_fork` are the default execution pool; routine work does not call external experts just to fill seats.
- Codex and Z Code use DSH's existing Provider and tool protocols. Enabling a Provider adds its tool; disabling it removes the tool from the same session without restarting the Host.
- Teamwork tells the coordinator only about experts that are currently callable. Nested native Sub-Agents and external experts share one five-worker concurrency limit.
- The package reuses the host's 0.1.3 Providers, tools, and presets. Chat and minimal presets do not receive broader authority, and old core-package copies are not installed over the newer host.

## Contents

- <code>payload/</code>: plugin code and required runtime assets copied from the main repository.
- <code>manifest.json</code>: composition rows, sources, main-repository commit, and per-file SHA-256.
- <code>INSTALL.md</code>: direct installation, conflict adaptation, failure recovery, and narrow verification.
- <code>docs/</code>: real product screenshots from this version.

## Source and license

This repository is a one-way distribution mirror of [Xiaozhuang DSH](https://github.com/niushuanan/xiaozhuang-dsh), not an independent development source. It is synchronized from main-repository commit [`d5a0c6d8e8`](https://github.com/niushuanan/xiaozhuang-dsh/commit/d5a0c6d8e816bd1d49c9c76b050c3ff36a2c8306); the latest tagged release remains [`xiaozhuang-v0.4.2`](https://github.com/niushuanan/dsh-teamwork/releases/tag/xiaozhuang-v0.4.2). Licensed under the [MIT License](LICENSE).
