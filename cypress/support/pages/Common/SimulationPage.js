class SimulationPage {

  confirmPageSimulation(steps) {
    cy.get(`.filters-title`).should('contain', steps)
  }
  
  fillFormIdentification(simulationPage, person) {
    cy.get('[data-cy="person"]').select(person)
    cy.get('[data-cy="saleType"]').select(simulationPage.saleType)
    cy.get('[data-cy="modelYear"]').select(simulationPage.modelYear)
    cy.get('[data-cy="manufacturerYear"]').select(simulationPage.manufacturerYear)
    cy.get('[data-cy="manufacturer"]').select(simulationPage.manufacturer)
    cy.get('[data-cy="model"]').select(simulationPage.model)
    cy.get('[data-cy="version"]').select(simulationPage.version)
    cy.get('[data-cy="simulatorCampaigns"]').select(simulationPage.simulatorCampaigns)
    
    cy.contains('.dropdown-heading-value', 'Cores').click()
    cy.get('[type="checkbox"]').check()  
    
    cy.get('[data-cy="offerType"]').select(simulationPage.offerType)
  
    cy.contains('.dropdown-heading-value', 'Regiões').click()
    cy.get('[type="checkbox"]').check()  
   
    
  }

  submitIdentification() {
    cy.get('.container').click()
    cy.get('[data-cy="submitStepOne"]').click()
    
  }

  financialStructure(simulationPage) {
    cy.get('.custom-select').select(simulationPage.valueFinanceType)
  }

  fillFormFinancing(simulationPage) {

    cy.get('input[name="accessories"]').type(simulationPage.valueAcessories)
    cy.get('input[name="forwardingAgent"]').type(simulationPage.valueForwardingAgent)
    cy.get('input[name="vehicleValue"]').type(simulationPage.vehicleValue)
    cy.get('input[name="entryValue"]').type(simulationPage.entryValue)
    
  }

  submitCalculateFinancing() {
    cy.get('[data-cy="calcular"]').click()
  }

  confirmTotalValueCalculation(simulationPage) {
    cy.get('[data-cy="totalFinancingValue"]').should('have.value', simulationPage.totalFinancingValue)
  }

  waitRequestGET(rota) {
    cy.intercept('GET', rota ).as('waitLoadStep2')
    cy.wait('@waitLoadStep2')
  }

  waitRequestPOST(rota) {
    cy.intercept('POST', rota ).as('waitLoadStep3')
    cy.wait('@waitLoadStep3')
  }

  confirmStep3Data (simulationPage) {
    cy.get('.simContainer.active').should('contain', simulationPage)
  }
  
  submitSimulation() {
    cy.get('.conditions-button').click()
  }

  clickSelectedConditions() {
    cy.xpath(`//div[1][@class='form-row']//div[2][@class='calculation-list-item-r mr-2 ml-2']`).click()
  } 

  confirmStep4Data(simulationPage, label) {
    cy.contains('.simContainerCampaign', label).should('contain', simulationPage)
  }

  submitSaveOffers(dataInicio, dataFim) {
    cy.get(".fa-save").click()
    cy.xpath("//input[@placeholder='Data de Início']").type(dataInicio)
    cy.xpath("//input[@placeholder='Fim da Oferta']").type(dataFim)
    cy.get(".btn-block").click()
  }

  alertSucessOffers(alert) {
    cy.get('.alert-success').should('contain', alert)
  }

  
    
}


export default new SimulationPage()

