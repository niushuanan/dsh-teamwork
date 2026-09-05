# dsh-teamwork

[English](README.en.md) | 中文

[![DSH Plugin](https://img.shields.io/badge/DSH-Plugin-111111)](https://github.com/niushuanan/xiaozhuang-dsh) [![Release](https://img.shields.io/badge/release-xiaozhuang--v0.4.2-2563eb)](https://github.com/niushuanan/dsh-teamwork/releases/tag/xiaozhuang-v0.4.2) [![MIT](https://img.shields.io/badge/license-MIT-16a34a)](LICENSE)

在一个主 Agent 下优先调用 DSH 原生 Sub-Agent，并按需升级到 Codex、Z Code 外部专家；所有结果统一回到当前工作，外部专家可运行时热插拔。

Teamwork 设置页复用产品统一标题层级；安装到尚未提供该共享组件的旧版 DSH 时会使用同尺寸的内置兼容标题，不影响热插拔安装。

当前 master 面向 DSH 0.1.3，完整插件位于独立文件夹，并包含有界历史兼容：保留 Teamwork 状态、权限和模型配置，只另写新版会话文件，原始记录不变。首次迁移需安装插件；新版生成后移除插件仍能读取对话。未知必需事件不会被静默丢弃。本次未更新旧 Release，请使用 master 获取修复。

<p align="center"><img src="docs/02-teamwork.webp" alt="Teamwork 并发协作设置" width="800"></p>

## 安装

1. 从当前 master 下载源码 ZIP；[Releases](https://github.com/niushuanan/dsh-teamwork/releases/latest) 中的旧版本不包含本次历史兼容修复。
2. 把 ZIP 交给能够读取并修改目标 DSH 项目的 AI。
3. 对 AI 说：**先阅读压缩包里的 AGENTS.md、INSTALL.md 和 manifest.json，只安装这个插件，并保留现有插件、数据、对话、附件和设置。**
4. 安装 AI 会按目标 DSH 的当前结构合入代码和 Cordis 行，只验证本插件直接涉及的入口。

## 原生协作方式

- 原生 `subagent`／`subagent_fork` 是默认执行池；普通任务不会为了凑人数自动调用外部专家。
- Codex 与 Z Code 通过 DSH 同一套 Provider 和工具协议接入。Provider 开启时工具出现，关闭时同一会话立即移除，无需重启 Host。
- Teamwork 每轮只向主 Agent 说明当前真正可调用的专家；嵌套原生 Sub-Agent 和外部专家共享同一个 5 人并发上限。
- 安装包复用宿主 0.1.3 的原生 Provider、工具和 preset；纯聊天和极简模式不被扩大权限，不再把旧核心包副本覆盖进新宿主。

## 内容

- <code>payload/</code>：从主仓库复制的插件代码和必要运行资源。
- <code>manifest.json</code>：插件组成、来源、主仓库 commit 和逐文件 SHA-256。
- <code>INSTALL.md</code>：直接安装、冲突适配、失败恢复和最小验证说明。
- <code>docs/</code>：当前版本的真实产品截图。

## 来源与许可

本仓库是 [Xiaozhuang DSH](https://github.com/niushuanan/xiaozhuang-dsh) 的单向发布副本，不是独立开发源。当前内容同步自主仓库 commit [`d5a0c6d8e8`](https://github.com/niushuanan/xiaozhuang-dsh/commit/d5a0c6d8e816bd1d49c9c76b050c3ff36a2c8306)；最近正式发布版本仍为 [`xiaozhuang-v0.4.2`](https://github.com/niushuanan/dsh-teamwork/releases/tag/xiaozhuang-v0.4.2)。代码采用 [MIT License](LICENSE)。
