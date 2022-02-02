class ColorPage {

  confirmPageColor() {
    cy.get('.title').should('contain', 'Cores GM')
  }

  fillFormColor(colorName, colorCode) {
    cy.xpath('//*[@name="colorDescription"]').type(colorName)
    cy.xpath('//*[@name="colorCode"]').type(colorCode)
  }

  submitColor() {
    cy.get('[data-cy="newColorSubmitButton"]').click()
  }

  editColor(colorCode) {
    cy.xpath(`//table[@class='form-row']//td[contains(@title,'${colorCode}')]/../td[3]/div//i`).click()
    cy.xpath('//*[@name="colorDescription"]').clear()
    cy.xpath('//*[@name="colorCode"]').clear()
  }

  alertSucessColor(alert) {
    cy.get('.alert-success').should('contain', alert)
  }

  inspectColor(colorName, colorCode) {
    cy.xpath(`//tbody//tr/td[@title="${colorCode}"]/..`).should('contain', colorName)
  }
 
  removeColorDB(colorName, colorCode) {
    cy.task("queryDb", `DELETE FROM simulator.vehicle_color WHERE description ='${colorName}'`);
    cy.task("queryDb", `DELETE FROM simulator.vehicle_color WHERE description ='${colorCode}'`);
    cy.task("queryDb", `DELETE FROM simulator.vehicle_color WHERE code ='${colorCode}'`);
    cy.task("queryDb", `DELETE FROM simulator.vehicle_color WHERE code ='${colorName}'`);
  }

  addColorDB(colorName, colorCode) {
    cy.task("queryDb", `INSERT INTO simulator.vehicle_color (description, source, code, editable) VALUES ('${colorName}', 'OFFER', '${colorCode}', '1');`);
  }

  invalidFeedbackColor(alert) {
    cy.get('.invalid-feedback').should('contain', alert)
  }

  alertDangerColor(alert) {
    cy.get('.alert-danger').should('contain', alert)
  }
  
}

export default new ColorPage()