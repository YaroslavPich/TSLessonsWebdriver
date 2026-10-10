import { browser, expect } from '@wdio/globals'

describe('Webdriverio main page', () => {
    xit('should have correct title', async () => {
        await browser.url('https://webdriver.io');

        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle('Open source test automation for web, mobile and desktop apps | WebdriverIO')
    })
    xit('should show addValue command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username")
        await input.addValue("hello")
        await browser.pause(2000)

        await input.addValue(123)
        await browser.pause(2000)

        await expext(input).toHaveValue("hello123")
    })
    xit("should show setValue comand", async () => {
        await browser.url("https://the-internet.herokuapp.com/login");
        let input = await $("#username")
        await input.setValue("world")
        await input.setValue("hello")
        await browser.pause(2000)
        console.log(await input.getValue())
        await expect(input).toHaveValue("hello")

    })
    xit("should show click command", async () => {
        await browser.url("https://the-internet.herokuapp.com/login");

        let loginButton = await $('.radius')
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        let inputUsername = await $("#username")
        await inputUsername.addValue("tomsmith")
        await browser.pause(2000)

        let inputPassword = await $("#password")
        await inputPassword.addValue("tomsmith")
        await browser.pause(2000)

        await loginButton.click()
        await browser.pause(4000)
    })

    xit("should show getAttribute command", async () =>{
        await browser.url("https://www.google.com/")
        let inputSearch = await $('[name="q"]')
        let attr = await inputSearch.getAttribute("aria-label")
        console.log("Placeholder attribute is: " + attr)
        
        await inputSearch.setValue("Cat")
        attr = await inputSearch.getValue()
        await browser.pause(2000)
        console.log("Value attribute is: " + attr)
    })
    xit("should show getLocation command", async() => {
        await browser.url('http://dou.ua');

        let inputSearch = await $("#txtGlobalSearch")
        let location = await inputSearch.getLocation()
        console.log("Location is: " + location)

        let xLocation = await inputSearch.getLocation("x")
        console.log("Location by x is: " + xLocation)
    })

    xit("should show getText command", async () => {
        await browser.url("https://webdriver.io");

        
        let subtitle = await $("#__docusaurus_skipToContent_fallback > main > header > div.heroVisual_ZuDu > svg > g:nth-child(10) > text.hubMeta_Z1WP")
        console.log("subtitle text is: " + await subtitle.getText())
    })

    xit("should show if an element is clickable", async () =>{
        await browser.url('https://webdriver.io');
        
        const blogButton = await $('.DocSearch-Button')
        let clickable = await blogButton.isClickable()
        console.log("Is clickable: " + clickable)
    })

    xit("should show if an element is displayed", async () => {
        await browser.url('https://webdriver.io');

        const blogButton = await $$('.footer__link-item')
        let displayed = await blogButton[0].isDisplayed()
        console.log("Is displayed: " + displayed)
    })

    it("should show if an element is visible", async () => {
        await browser.url('https://webdriver.io');

        const trademarkLink = await $('a[href="https://trademark-list.openjsf.org"]')
        let displayedInViewport = await trademarkLink.isDisplayed()
        console.log("Is trademark link displayed in viewport: " + displayedInViewport)

    })



})

