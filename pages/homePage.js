const {expect} = require('@playwright/test')
class HomePage{
    constructor(page){
        this.page = page
        this.departureCity = 'select[name="fromPort"]'
        this.destinationCity = 'select[name="toPort"]'
        this.findFlightButton = 'input[value="Find Flights"]'
    }
    async verifyHomePage(){
        await expect(this.page.locator(this.findFlightButton)).toBeVisible()
    }
    async chooseDepartureAndDestinationCities(){
        await this.page.locator(this.departureCity).selectOption({label:'Boston'})
        await this.page.locator(this.destinationCity).selectOption({label:'New York'})
    }
    async clickFindFlight(){
        await this.page.locator(this.findFlightButton).click()
    }

}
module.exports = HomePage