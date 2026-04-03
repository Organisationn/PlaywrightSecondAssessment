const {expect} = require('@playwright/test')
class PurchasePage{
    constructor(page){
        this.page = page
        this.purchaseFlightButton = 'input[value="Purchase Flight"]'
    }

    async verifyMessage(expectedMessage){
        await expect(this.page.locator(`//*[contains(text(),"${expectedMessage}")]`)).toBeVisible()
    }

    async bookAFlight(data){
        const fields ={
            inputName: data.fullname,
            address:data.address,
            city:data.city,
            state:data.state,
            zipCode:data.zipcode,
            creditCardNumber:data.ccnumber,
            creditCardMonth : data.ccmonth,
            creditCardYear :data.ccyear,
            nameOnCard:data.nameoncard
        }
        for(const [fieldId,value] of Object.entries(fields)){
            await this.page.locator(`input[id="${fieldId}"]`).fill(value)
        }
    }

    async clickPurchaseFlight(){
        await this.page.locator(this.purchaseFlightButton).click()
    }
}
module.exports = PurchasePage