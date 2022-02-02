class MyDataPage {

  confirmPageData(user, perfil) {
    cy.get('.form-row')
      .should('contain', user)
      .should('contain', perfil) 
  }
}

export default new MyDataPage()