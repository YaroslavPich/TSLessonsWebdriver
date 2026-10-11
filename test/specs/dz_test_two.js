import { browser, expect } from '@wdio/globals'

describe('Webdriverio main page', () => {
it('should have correct title', async () => {
    await browser.url('https://webdriver.io')

    let cickButton = await $('header a[href="/docs/gettingstarted"]')
    await browser.pause(2000)
    await cickButton.click()

    const supportLink = await $('=Support')
    await browser.pause(4000)
    await supportLink.scrollIntoView()
    await browser.pause(2000)

    const supportLinl = await $('=Support')
    let displayedInViewport = await supportLinl.isDisplayed({ withinViewport: true })
    console.log("Is trademark link displayed in viewport: " + displayedInViewport)
    await browser.pause(4000)

    const nextEvent = await $('.pagination-nav__link.pagination-nav__link--next')
    let clickable = await nextEvent.isClickable()
    console.log("Is clickable: " + clickable)
    const nextEventHtml = await $('.pagination-nav__link.pagination-nav__link--next').getHTML()    
    console.log("nextEventHTML :" + nextEventHtml)
    await nextEvent.click()
    await browser.pause(4000)

    await browser.waitUntil(async () =>{
        return $('h1').isDisplayed()
    }, 5000, "h1 is not displayed")

})
})