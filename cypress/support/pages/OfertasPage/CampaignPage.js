class CampaignPage {

  confirmPageCampaign() {
    cy.get('.title').should('contain', 'Campanhas')
  }
  
  fillFormCampaign(campaignOffers) {
    cy.xpath('//*[@name="campaignName"]').type(campaignOffers.name)
    cy.xpath('//*[@name="campaignCode"]').type(campaignOffers.code)
  }

  submitCampaign() {
    cy.get('[data-cy="newCampaignSubmitButton"]').click()
  }

  editCampaign(campaignOffers) {
    cy.xpath(`//table[@class='form-row']//td[contains(@title,'${campaignOffers.code}')]//../td[4]//span[2]/i`).click()
    cy.xpath('//*[@name="campaignName"]').clear()
    cy.xpath('//*[@name="campaignCode"]').clear()
  }

  inactivateCampaign(campaignOffers) {
    cy.xpath(`//table[@class='form-row']//td[contains(@title,'${campaignOffers.code}')]//../td[4]//span[1]/i`).click()
    cy.get('[data-cy="modalButton"]').click()
  }

  alertSucessCampaign(alert) {
    cy.get('.alert-success').should('contain', alert)
  }

  inspectCampaign(campaignOffers) {
    cy.xpath(`//tbody//tr/td[@title="${campaignOffers.code}"]/..`).should('contain', campaignOffers.name)
  }

  inspectStatusCampaign(campaignOffers, status) {
    cy.xpath(`//tbody//tr/td[@title="${campaignOffers.code}"]/../td[3]`).should('contain', status)
  }
  
  removeCampaignDB(campaignOffers) {
    cy.task("queryDb", `DELETE FROM offer.offer_campaign WHERE name ='${campaignOffers.name}'`);
    cy.task("queryDb", `DELETE FROM offer.offer_campaign WHERE name ='${campaignOffers.code}'`);
    cy.task("queryDb", `DELETE FROM offer.offer_campaign WHERE code ='${campaignOffers.code}'`);
    cy.task("queryDb", `DELETE FROM offer.offer_campaign WHERE code ='${campaignOffers.name}'`);
  }

  addCampaignDB(campaignOffers) {
    cy.task("queryDb", `INSERT INTO offer.offer_campaign (code, name, enabled) VALUES ('${campaignOffers.code}', '${campaignOffers.name}', '1');`);
  }

  invalidFeedbackCampaign(alert) {
    cy.get('.invalid-feedback').should('contain', alert)
  }

  alertDangerCampaign(alert) {
    cy.get('.alert-danger').should('contain', alert)
  }

  waitRequest(rota) {
    cy.intercept('GET', rota ).as('waitLoadCampaign')
    cy.wait('@waitLoadCampaign')
  }
  
}

export default new CampaignPage()