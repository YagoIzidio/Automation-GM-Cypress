
import login from '../../../../../support/pages/Common/LoginPage'
import meusDados from '../../../../../support/pages/Common/MyDataPage'
import menu from '../../../../../support/pages/OfertasPage/MenuPage'

describe('Pagina de Login',function() {

  beforeEach(function() {
    cy.fixture('dataOffers').then((massData)=> {
      this.dataOffers = massData
    })    
  })

  beforeEach(function() {
    login.goLogin()
    login.confirmPageLogin()   
  })

  it('Logando com sucesso', function() {

    login.fillFormLogin(this.dataOffers.userOffers.user_logged)
    login.submitLogin()

    menu.navPageData()

    meusDados.confirmPageData(this.dataOffers.userOffers.user_logged) 

  })

  it('Tentativa com a senha invalida', function() {
    login.fillFormLogin(this.dataOffers.userOffers.password_invalid)
    login.submitLogin()
    login.alertDangerLogin('Usuário / senha inválido')     
  })

  it('Tentativa com o usuario invalido', function() {
    login.fillFormLogin(this.dataOffers.userOffers.user_invalid)
    login.submitLogin()
    login.alertDangerLogin('Usuário inválido')    
  })

  it('Tentativa com os campos vazios', function() {
    login.submitLogin()
    login.invalidFeedbackLogin('É preciso informar o usuário')
    login.invalidFeedbackLogin('É preciso informar a senha')
  })
})
