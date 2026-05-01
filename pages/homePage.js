const {expect} = require('@playwright/test')
class HomePage{
    constructor(page){
        this.page = page
        this.departureCity = this.page.locator('[name="fromPort"]')
        this.destinationCity = this.page.locator('[name="toPort"]')
        this.findFlightButton = this.page.getByRole('button',{name:'Find Flights'})
    }
    async verifyHomePage(){
        await expect(this.findFlightButton).toBeVisible()
    }
    async chooseDepartureAndDestinationCities(){
        await this.departureCity.selectOption({label:'Boston'})
        await this.destinationCity.selectOption({label:'New York'})
    }
    async clickFindFlight(){
        await this.findFlightButton.click()
    }
}
module.exports = HomePage