const {expect} = require('@playwright/test')
class FlightsPage{
    constructor(page){
        this.page = page
        this.travelWorldText = this.page.getByText('Travel The World',{exact:true})
    }

    async verifyChooseFlightPage(){
        await expect(this.travelWorldText).toBeVisible()
    }

    async selectSpecificFlight(flightNumber){
        await this.page.locator(`//form[@name="${flightNumber}"]/../td/input[@value="Choose This Flight"]`).click()
    }
}

module.exports = FlightsPage