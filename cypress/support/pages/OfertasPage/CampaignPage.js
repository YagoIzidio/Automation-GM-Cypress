class CampaignPage {

  confirmPageCampaign() {
    cy.get('.title').should('contain', 'Campanhas')
  }
  
  fillFormCampaign(campaignName, campaignCode) {
    cy.xpath('//*[@name="campaignName"]').type(campaignName)
    cy.xpath('//*[@name="campaignCode"]').type(campaignCode)
  }

  submitCampaign() {
    cy.get('[data-cy="newCampaignSubmitButton"]').click()
  }

  editCampaign(campaignCode) {
    cy.xpath(`//table[@class='form-row']//td[contains(@title,'${campaignCode}')]//../td[4]//span[2]/i`).click()
    cy.xpath('//*[@name="campaignName"]').clear()
    cy.xpath('//*[@name="campaignCode"]').clear()
  }

  inactivateCampaign(campaignCode) {
    cy.xpath(`//table[@class='form-row']//td[contains(@title,'${campaignCode}')]//../td[4]//span[1]/i`).click()
    cy.get('[data-cy="modalButton"]').click()
  }

  alertSucessCampaign(alert) {
    cy.get('.alert-success').should('contain', alert)
  }

  inspectCampaign(campaignName ,campaignCode) {
    cy.xpath(`//tbody//tr/td[@title="${campaignCode}"]/..`).should('contain', campaignName)
  }

  inspectStatusCampaign(campaignCode, status) {
    cy.xpath(`//tbody//tr/td[@title="${campaignCode}"]/../td[3]`).should('contain', status)
  }
  
  removeCampaignDB(campaignName, campaignCode) {
    cy.task("queryDb", `DELETE FROM offer.offer_campaign WHERE name ='${campaignName}'`);
    cy.task("queryDb", `DELETE FROM offer.offer_campaign WHERE name ='${campaignCode}'`);
    cy.task("queryDb", `DELETE FROM offer.offer_campaign WHERE code ='${campaignCode}'`);
    cy.task("queryDb", `DELETE FROM offer.offer_campaign WHERE code ='${campaignName}'`);
  }

  addCampaignDB(campaignName, campaignCode) {
    cy.task("queryDb", `INSERT INTO offer.offer_campaign (code, name, enabled) VALUES ('${campaignCode}', '${campaignName}', '1');`);
  }

  invalidFeedbackCampaign(alert) {
    cy.get('.invalid-feedback').should('contain', alert)
  }

  alertDangerCampaign(alert) {
    cy.get('.alert-danger').should('contain', alert)
  }
  
}

export default new CampaignPage()