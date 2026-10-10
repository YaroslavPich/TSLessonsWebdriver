import { browser, expect } from '@wdio/globals'

describe('Webdriverio main page', () => {
    it('should have correct title', async () => {
        await browser.url('https://webdriver.io');

        let clickRefference = await $("=Reference")
        await browser.pause(2000)
        await clickRefference.click()

        await expect(browser).toHaveUrl('https://webdriver.io/docs/api')
        console.log('URL expect')
        await browser.pause(4000)

        let haveIntro = await $('h1')
        await expect(haveIntro).toHaveText('Introduction')

        let linkExist = await $("a=WebDriver")
        await linkExist.moveTo()
        await expect(linkExist).toHaveHref('/docs/api/webdriver')
        console.log('URL is ' + linkExist)
        
        let clickSearch = await $('.DocSearch-Button')
        await browser.pause(2000)
        await clickSearch.click()
        await browser.pause(4000)


        let inputSearch = await $("#docsearch-input")
        await inputSearch.setValue('all is done')
        await browser.pause(2000)
        await inputSearch.setValue('')

        
    })
})
