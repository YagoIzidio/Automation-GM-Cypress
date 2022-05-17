class LoginPage {

  goLogin() {
    cy.visit('/')
  }

  confirmPageLogin() {
    cy.get('.btn-link').should('contain', 'Esqueci minha senha')
  }

  fillFormLogin(profileUser) {
    cy.get('input[name="username"]').type(profileUser.user)
    cy.get('input[name="password"]').type(profileUser.password)
  }

  submitLogin() {
    cy.get('.btn-lg').click()
  }

  invalidFeedbackLogin(alert) {
    cy.get('.invalid-feedback').should('contain', alert)
  }

  alertDangerLogin(alert) {
    cy.get('.alert-danger').should('contain', alert)
  }


}

export default new LoginPage()