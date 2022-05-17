class ColorPage {

  confirmPageColor() {
    cy.get('.title').should('contain', 'Cores GM')
  }

  fillFormColor(colorOffers) {
    cy.xpath('//*[@name="colorDescription"]').type(colorOffers.name)
    cy.xpath('//*[@name="colorCode"]').type(colorOffers.code)
  }

  submitColor() {
    cy.get('[data-cy="newColorSubmitButton"]').click()
  }

  editColor(colorOffers) {
    cy.xpath(`//table[@class='form-row']//td[contains(@title,'${colorOffers.code}')]/../td[3]/div//i`).click()
    cy.xpath('//*[@name="colorDescription"]').clear()
    cy.xpath('//*[@name="colorCode"]').clear()
  }

  alertSucessColor(alert) {
    cy.get('.alert-success').should('contain', alert)
  }

  inspectColor(colorOffers) {
    cy.xpath(`//tbody//tr/td[@title="${colorOffers.code}"]/..`).should('contain', colorOffers.name)
  }
 
  removeColorDB(colorOffers) {
    cy.task("queryDb", `DELETE FROM simulator.vehicle_color WHERE description ='${colorOffers.name}'`);
    cy.task("queryDb", `DELETE FROM simulator.vehicle_color WHERE description ='${colorOffers.code}'`);
    cy.task("queryDb", `DELETE FROM simulator.vehicle_color WHERE code ='${colorOffers.code}'`);
    cy.task("queryDb", `DELETE FROM simulator.vehicle_color WHERE code ='${colorOffers.name}'`);
  }

  addColorDB(colorOffers) {
    cy.task("queryDb", `INSERT INTO simulator.vehicle_color (description, source, code, editable) VALUES ('${colorOffers.name}', 'OFFER', '${colorOffers.code}', '1');`);
  }

  invalidFeedbackColor(alert) {
    cy.get('.invalid-feedback').should('contain', alert)
  }

  alertDangerColor(alert) {
    cy.get('.alert-danger').should('contain', alert)
  }
  
}

export default new ColorPage()