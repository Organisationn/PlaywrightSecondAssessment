const {expect} = require('@playwright/test')
class FlightsPage{
    constructor(page){
        this.page = page
        this.travelWorldText = '//a[normalize-space()="Travel The World"]'
    }

    async verifyChooseFlightPage(){
        await expect(this.page.locator(this.travelWorldText)).toBeVisible()
    }

    async selectSpecificFlight(flightNumber){
        await this.page.locator(`//form[@name="${flightNumber}"]/../td/input[@value="Choose This Flight"]`).click()
    }
}

module.exports = FlightsPage