class SimulationPage {

  confirmPageIdentification() {
    cy.get(`.filters-title`).should('contain', 'IDENTIFICAÇÃO')
  }
  
  fillFormIdentification(person, saleType, modelYear, manufacturerYear, manufacturer, model, version, simulatorCampaigns, color, offerType, region) {
    cy.get('[data-cy="person"]').select(person)
    cy.get('[data-cy="saleType"]').select(saleType)
    cy.get('[data-cy="modelYear"]').select(modelYear)
    cy.get('[data-cy="manufacturerYear"]').select(manufacturerYear)
    cy.get('[data-cy="manufacturer"]').select(manufacturer)
    cy.get('[data-cy="model"]').select(model)
    cy.get('[data-cy="version"]').select(version)
    cy.get('[data-cy="simulatorCampaigns"]').select(simulatorCampaigns)

    cy.contains('.dropdown-heading-value', 'Cores').click()
    cy.contains('[role="option"]', color).click()  

    cy.get('[data-cy="offerType"]').select(offerType)

    cy.contains('.dropdown-heading-value', 'Regiões').click()
    cy.contains('[role="option"]', region).click()  
    
  }

  submitIdentification() {
    cy.get('.container').click()
    cy.get('[data-cy="submitStepOne"]').click()
    
  }

}

export default new SimulationPage()

