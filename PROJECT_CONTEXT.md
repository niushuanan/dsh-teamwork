# Project Context

## 这个项目是干什么的

`dsh-teamwork` 是 Xiaozhuang DSH 的 Teamwork 独立分发仓库，提供原生 Sub-Agent 协作、Codex／Z Code 外部专家和运行时热插拔安装包。

## 代码结构是什么

- `payload/teamwork/native/teamwork/`：完整可删除插件文件夹，包含 Host、Client、资源、测试与构建入口；复用宿主 0.1.3 的原生 Provider 和工具。
- `payload/teamwork/compatibility/session-history.patch`：从已推送主仓提交生成的通用历史兼容补丁，安装前按目标源码审阅。
- `manifest.json`：安装行、来源、主仓 commit 与逐文件哈希。
- `README*.md`、`INSTALL.md`、`AGENTS.md`：双语说明和安装约束。
- `tests/`：不依赖目标 DSH 的发布包契约测试。

## 关键入口在哪里

- `payload/teamwork/native/teamwork/cordis.patch.yml`：插件目录发现与原生组装入口。
- `payload/teamwork/native/teamwork/packages/team-work/lib/client.js`：Teamwork 设置页和会话团队面板。
- `payload/teamwork/native/teamwork/packages/team-work/lib/index.js`：Host 控制与历史状态声明。
- `manifest.json`：安装器读取的完整性和组合入口。

## 最近改了什么

### 2026-09-05 - 原生目录与有界历史兼容

- 本次任务：从已推送的主仓历史修复提交同步独立发布副本。
- 改了哪些文件：原生插件 payload、通用迁移补丁、manifest、双语 README、INSTALL、发布契约测试和本文件。
- 改了什么：用完整原生 Teamwork 文件夹替换旧 Profile／核心包混合副本；状态声明随插件装卸，首次迁移保留原件，新版无插件仍可读。仅复用宿主已有原生 Provider／工具，不扩大权限。
- 为什么这样改：发布副本必须忠实于主仓当前插件架构，并让用户明确首次迁移的依赖和原始历史保护。
- 影响了哪些模块：Teamwork 安装布局与历史读取兼容；不改前端样式、协作功能或真实截图，不包含用户数据和凭据。
- 验证：主仓 266 项格式回归、24 项 Teamwork 回归、JSONL 定向测试和真实历史续聊已通过；独立发布包另验语法、页头契约、逐文件存在性与大小，不进行哈希对比。

### 2026-08-29 - 统一设置页标题

- 本次任务：让 Teamwork 设置页与 Xiaozhuang DSH 其他插件页保持相同标题位置、字号和说明布局。
- 改了哪些文件：Client 发布包、双语 README、manifest、契约测试和本文件。
- 改了什么：优先使用宿主 `SettingsSectionHeader`，旧宿主使用等尺寸内置兼容标题；删除旧的独立标题 CSS。
- 为什么这样改：重新安装独立插件后也应保持产品设置页一致，同时不能破坏旧 DSH 的热插拔能力。
- 影响了哪些模块：只影响 Teamwork 设置页页头；团队面板、Provider、并发、配置和 Host API 不变。
- 验证：Client 语法检查、发布包契约测试、manifest 全量 48 文件大小／SHA-256 校验和 `git diff --check` 通过。
