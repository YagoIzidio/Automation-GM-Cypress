class MyDataPage {

  confirmPageData(profileUser) {
    cy.get('.form-row')
      .should('contain', profileUser.user)
      .should('contain', profileUser.profile) 
  }
}

export default new MyDataPage()