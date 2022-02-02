
import login from '../../../../../support/pages/Common/LoginPage'
import meusDados from '../../../../../support/pages/Common/MyDataPage'
import menu from '../../../../../support/pages/OfertasPage/MenuPage'

var usuarioLogado = {
  user: 'AGOFFR',
  password: 'Augusto23051991@',
  perfil: 'GMF Ofertas'
}

beforeEach(() => {

  login.goLogin()
  login.confirmPageLogin()
  
})

describe('Pagina de Login', () => {

  it('Logando com sucesso', () => {

    login.fillFormLogin(usuarioLogado.user, usuarioLogado.password)
    login.submitLogin()

    menu.navPageData()

    meusDados.confirmPageData(usuarioLogado.user, usuarioLogado.perfil) 

  })

  it('Tentativa com a senha invalida', () => {
    login.fillFormLogin('ACCYAG', '123')
    login.submitLogin()
    login.alertDangerLogin('Usuário / senha inválido')     
  })

  it('Tentativa com o usuario invalido', () => {
    login.fillFormLogin('ACCYA', '@Yagojoseizidiobarros9623@')
    login.submitLogin()
    login.alertDangerLogin('Usuário não encontrado')    
  })

  it('Tentativa com os campos vazios', () => {
    login.submitLogin()
    login.invalidFeedbackLogin('É preciso informar o usuário')
    login.invalidFeedbackLogin('É preciso informar a senha')
  })
})
