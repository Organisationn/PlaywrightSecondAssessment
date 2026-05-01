const{test,expect} = require('@playwright/test')
const HomePage =  require('../pages/homePage')
const FlightsPage = require('../pages/flightsPage')
const PurchasePage = require('../pages/purchasePage')
const getUserTestData = require('../utils/dbHelper')

let homePage,flightsPage,purchasePage,data

test.describe("BlazeDemo e2e scenario", () => {
    test.beforeEach(async ({ page }) =>{
        await page.goto("/")
        data = await getUserTestData(1)
        console.log('Test data loaded from DB : ', data)
    })
    test("book a flight successfully", async ({ page }) => {
        homePage = new HomePage(page)
        flightsPage = new FlightsPage(page)
        purchasePage = new PurchasePage(page)
        await homePage.verifyHomePage()
        await homePage.chooseDepartureAndDestinationCities()
        await homePage.clickFindFlight()
        await flightsPage.verifyChooseFlightPage()
        await flightsPage.selectSpecificFlight('AL969')
        await purchasePage.verifyMessage('has been reserved')
        await purchasePage.bookAFlight(data)
        await purchasePage.clickPurchaseFlight()
        await purchasePage.verifyMessage('Thank you for your purchase today!')
    })
})