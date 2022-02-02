class MenuPage {

  navPageData() {
    cy.get('.user').click()
  }
  navPageSimulation() {
    cy.get('[data-cy="simular-oferta"]').click()
  }
  navPageColor() {
    cy.get('[data-cy="colors"]').click()
  }
  navPageCampaign() {
    cy.get('[data-cy="campaigns"]').click()
  }

}

export default new MenuPage()
