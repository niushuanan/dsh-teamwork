# 安装与兼容流程

## 直接安装

1. 当前 master 面向基于 `dsh-v0.1.3-alpha.1` 的 Xiaozhuang DSH 源码 checkout。保留目标未提交改动，读取目标项目说明，不使用旧 Release 代替本次修复。
2. 将 `payload/teamwork/native/teamwork/` 作为完整文件夹合入目标 `plugins/teamwork/`。由现有目录发现器加载其 `cordis.patch.yml`，不要同时再启用旧 Profile 副本。所有 Teamwork 自有代码、资源、构建与声明都保留在该文件夹内。
3. 目标缺少历史兼容接口时，审阅 `payload/teamwork/compatibility/session-history.patch` 并按目标实际源码合入通用核心改动；不得盲目覆盖包。已包含这些改动的主仓不重复安装补丁。该补丁没有 Teamwork 名称或插件目录依赖，移除插件后核心仍可运行。
4. 复用宿主 0.1.3 的原生 Codex Provider、subagent 工具与 preset，按目标包管理方式链接插件依赖并构建迁移包、JSONL Provider 和插件。源码启动不代表已运行的 Host 自动重载；如需重启，先取得用户授权。
5. 从真实设置和原会话入口验证 Teamwork、历史正文与模型选择。首次读取未标记的 v0/v1 Teamwork 历史必须安装插件；标准迁移只增加 `session.v2.jsonl[.zstd]`，不覆盖或删除旧代际。生成新版后移除插件仍能读取对话；未声明事件继续拒绝，不可通过删记录绕过。

## 冲突或失败兜底

发生冲突或直接安装失败时，安装 AI 可以自行调整文件路径、import、类型、Slot 接口、package manifest 和 Cordis 组装，使 manifest 所描述的用户能力兼容目标 DSH。调整范围必须限制在冲突文件、所选插件及其直接依赖；保留目标版本的新能力与用户数据。每项调整都要写入最终安装报告。无法安全兼容时停止，不留下半安装的启用行，并报告阻塞点与可恢复方式。
