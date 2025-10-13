const fs = require('fs')
const { chromium } = require('playwright');
;(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] })
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } })
  const logs = []
  page.on('console', msg => logs.push({ type: 'console', text: msg.text(), location: msg.location ? msg.location() : null }))
  page.on('pageerror', err => logs.push({ type: 'pageerror', text: err.message }))

  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' })
  await page.waitForTimeout(3000)

  const result = await page.evaluate(() => {
    const byId = document.getElementById('cookie-title')
    const dialogs = Array.from(document.querySelectorAll('[role="dialog"]'))
    const dialogsInfo = dialogs.map(d => ({ tag: d.tagName, text: (d.innerText||'').slice(0,200) }))
    const bodyText = (document.body && document.body.innerText) ? document.body.innerText.slice(0,2000) : ''
    const allHtml = document.documentElement ? document.documentElement.innerHTML.slice(0,2000) : ''
    return {
      foundById: !!byId,
      idText: byId ? byId.innerText : null,
      roleDialogsCount: dialogs.length,
      dialogsInfo,
      bodyTextLength: bodyText.length,
      bodyTextStartsWith: bodyText.slice(0,200)
    }
  })

  console.log(JSON.stringify(result, null, 2))
  console.log('--- browser logs ---')
  console.log(JSON.stringify(logs, null, 2))
  try {
    await page.screenshot({ path: '/workspaces/thrive.her/tmp/cookie-screenshot-2.png', fullPage: true })
    console.log('Screenshot saved to tmp/cookie-screenshot-2.png')
  } catch (e) {
    console.error('Failed to save screenshot:', e)
  }
  await browser.close()
})().catch(err=>{ console.error(err); process.exit(1) })
