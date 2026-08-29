import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const client = await readFile(new URL('../payload/teamwork/profile/team-work/lib/client.js', import.meta.url), 'utf8')

test('uses the shared Settings title contract with an older-host fallback', () => {
  assert.match(client, /SettingsSectionHeader: SharedSettingsSectionHeader/)
  assert.match(client, /SettingsSectionHeaderFallback/)
  assert.match(client, /React\.createElement\(SettingsSectionHeader/)
  assert.match(client, /data-settings-section-header/)
  assert.doesNotMatch(client, /tw-settings-head|tw-settings-title|tw-settings-intro/)
})
