const{test,expect} = require('@playwright/test')
const HomePage =  require('../pages/homePage')
const FlightsPage = require('../pages/flightsPage')
const PurchasePage = require('../pages/purchasePage')
const getUserTestData = require('../utils/dbHelper')

let homePage,flightsPage,purchasePage,data

test.describe("BlazeDemo e2e scenario", function () {
    test.beforeEach(async function ({ page }) {
        await page.goto("/")
        homePage = new HomePage(page)
        flightsPage = new FlightsPage(page)
        purchasePage = new PurchasePage(page)
        data = await getUserTestData(1)
        console.log("Test data loaded from DB : ", data)
    })
    test("login and book a flight successfully", async function ({ page }) {
        await homePage.verifyHomePage()
        await homePage.chooseDepartureAndDestinationCities()
        await homePage.clickFindFlight()
        await flightsPage.verifyChooseFlightPage()
        await flightsPage.selectSpecificFlight("AL969")
        await purchasePage.verifyMessage("has been reserved")
        await purchasePage.bookAFlight(data)
        await purchasePage.clickPurchaseFlight()
        await purchasePage.verifyMessage("Thank you for your purchase today!")
        await page.waitForTimeout(2000)
    })
})