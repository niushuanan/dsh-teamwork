# Project Context

## 这个项目是干什么的

`dsh-teamwork` 是 Xiaozhuang DSH 的 Teamwork 独立分发仓库，提供原生 Sub-Agent 协作、Codex／Z Code 外部专家和运行时热插拔安装包。

## 代码结构是什么

- `payload/teamwork/`：可安装的 Profile 包、Provider、工具和 preset 源码。
- `manifest.json`：安装行、来源、主仓 commit 与逐文件哈希。
- `README*.md`、`INSTALL.md`、`AGENTS.md`：双语说明和安装约束。
- `tests/`：不依赖目标 DSH 的发布包契约测试。

## 关键入口在哪里

- `payload/teamwork/profile/team-work/lib/client.js`：Teamwork 设置页和会话团队面板。
- `payload/teamwork/profile/team-work/lib/index.js`：Profile Host 控制接口。
- `manifest.json`：安装器读取的完整性和组合入口。

## 最近改了什么

### 2026-08-29 - 统一设置页标题

- 本次任务：让 Teamwork 设置页与 Xiaozhuang DSH 其他插件页保持相同标题位置、字号和说明布局。
- 改了哪些文件：Client 发布包、双语 README、manifest、契约测试和本文件。
- 改了什么：优先使用宿主 `SettingsSectionHeader`，旧宿主使用等尺寸内置兼容标题；删除旧的独立标题 CSS。
- 为什么这样改：重新安装独立插件后也应保持产品设置页一致，同时不能破坏旧 DSH 的热插拔能力。
- 影响了哪些模块：只影响 Teamwork 设置页页头；团队面板、Provider、并发、配置和 Host API 不变。
- 验证：Client 语法检查、发布包契约测试、manifest 全量 48 文件大小／SHA-256 校验和 `git diff --check` 通过。
