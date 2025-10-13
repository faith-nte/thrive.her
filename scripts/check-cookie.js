const fs = require('fs')
const { chromium } = require('playwright');
;(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] })
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } })
  const logs = []
  page.on('console', msg => logs.push({ type: 'console', text: msg.text(), location: msg.location ? msg.location() : null }))
  page.on('pageerror', err => logs.push({ type: 'pageerror', text: err.message }))

  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' })
  // wait for client hydration and possible async errors
  await page.waitForTimeout(3000)
  // evaluate cookie consent presence and localStorage
  const result = await page.evaluate(() => {
    const el = document.querySelector('.cookie-consent-banner')
    const rect = el ? el.getBoundingClientRect() : null
    const style = el ? (function(e){
      const cs = window.getComputedStyle(e)
      return {
        display: cs.display,
        visibility: cs.visibility,
        opacity: cs.opacity,
        zIndex: cs.zIndex,
        position: cs.position,
        bottom: cs.bottom,
        transform: cs.transform
      }
    })(el) : null
    let consent = null
    try { consent = localStorage.getItem('thriveher_consent') } catch (e) { consent = null }
    const bodyHTML = document.body ? document.body.innerHTML.slice(0, 2000) : ''
    const textPresent = document.body ? (document.body.innerText || '').includes('We use cookies') : false
    const cookieNodeByText = !!Array.from(document.body.querySelectorAll('*')).find(n => (n.innerText || '').includes('We use cookies'))
    return { present: !!el, rect, style, consent, textPresent, cookieNodeByText, bodyHTMLLength: bodyHTML.length }
  })
  console.log(JSON.stringify(result, null, 2))
  console.log('--- browser logs ---')
  console.log(JSON.stringify(logs, null, 2))
  try {
    await page.screenshot({ path: '/workspaces/thrive.her/tmp/cookie-screenshot.png', fullPage: true })
    console.log('Screenshot saved to tmp/cookie-screenshot.png')
  } catch (e) {
    console.error('Failed to save screenshot:', e)
  }
  await browser.close()
})().catch(err=>{ console.error(err); process.exit(1) })
