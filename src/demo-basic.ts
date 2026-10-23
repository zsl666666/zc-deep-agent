/**
 * Demo 1: 基础Skill调用
 */

import 'dotenv/config'
import { createAgent } from './agent.js'

async function main() {
  const agent = await createAgent({
    name: 'zc OpenCodex-deepseek - 基础版',
    skillsDir: '.zc/skills',
    sandbox: { workspacePath: process.cwd(), outputDir: 'output', verbose: true },
    hitl: { enabled: false },
    systemPrompt: '你是一个有趣的 AI 助手，擅长处理古诗词和技术问题。'
  })

  console.log('已加载的Skill：')
  agent.getSkills().forEach((skill) => {
    console.log(` - ${skill.name}`)
  })

  console.log('\n 测试一：诗词笑话生成\n')
  const result1 = await agent.invoke('飞流之下三千尺，疑是银河落九天')
  console.log('\n AI 回复：')
  console.log(result1.content)

  // console.log('\n 测试二：另一首诗\n')
  // const result2 = await agent.invoke('山重水复疑无路，柳暗花明又一村')
  // console.log('\n AI 回复：')
  // console.log(result2.content)
}

main().catch((err) => {
  console.error(err)
})