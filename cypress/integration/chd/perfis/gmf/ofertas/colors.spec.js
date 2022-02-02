import login from '../../../../../support/pages/Common/LoginPage'
import meusDados from '../../../../../support/pages/Common/MyDataPage'
import cores from '../../../../../support/pages/OfertasPage/ColorPage'
import menu from '../../../../../support/pages/OfertasPage/MenuPage' 


var usuarioLogado = {
  user: 'AGOFFR',
  password: 'Augusto23051991@',
  perfil: 'GMF Ofertas'
}

var dadosCor1 = {
  nome: 'CYPRESS ROBOT 1',
  codigo: 'CR1'
}

var dadosCor2 = {
  nome: 'CYPRESS ROBOT 2',
  codigo: 'CR2'
}

var dadosCor3 = {
  nome: 'CYPRESS ROBOT 3',
  codigo: 'CR3'
}

beforeEach(() => {

  login.goLogin()
  login.confirmPageLogin()
  login.fillFormLogin(usuarioLogado.user, usuarioLogado.password)
  login.submitLogin()

  menu.navPageData()

  meusDados.confirmPageData(usuarioLogado.user, usuarioLogado.perfil)

})

describe('Pagina de Cores', () => {

  it('Criar cor com sucesso', () => {

    cores.removeColorDB(dadosCor1.nome, dadosCor1.codigo)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.fillFormColor(dadosCor1.nome, dadosCor1.codigo)
    cores.submitColor()
    cores.alertSucessColor('Cor salva com sucesso')
    cores.inspectColor(dadosCor1.nome, dadosCor1.codigo)

  })

  it('Editar cor com sucesso', () => {

    cores.removeColorDB(dadosCor1.nome, dadosCor1.codigo)
    cores.removeColorDB(dadosCor2.nome, dadosCor2.codigo)
    cores.addColorDB(dadosCor1.nome, dadosCor1.codigo)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(dadosCor1.codigo)
    cores.fillFormColor(dadosCor2.nome, dadosCor2.codigo)
    cores.submitColor()
    cores.alertSucessColor('Cor salva com sucesso')
    cores.inspectColor(dadosCor2.nome ,dadosCor2.codigo)

  })

  it('Editar cor com o mesmo nome com sucesso', () => {

    cores.removeColorDB(dadosCor1.nome, dadosCor1.codigo)
    cores.addColorDB(dadosCor1.nome, dadosCor1.codigo)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(dadosCor1.codigo)
    cores.fillFormColor(dadosCor1.nome, dadosCor1.codigo)
    cores.submitColor()
    cores.alertSucessColor('Cor salva com sucesso')
    cores.inspectColor(dadosCor1.nome, dadosCor1.codigo)
    
  })

  it('Tentativa de criar cor com os campos vazios', () => {

    menu.navPageColor()
    cores.confirmPageColor()
    cores.submitColor()
    cores.invalidFeedbackColor('Preencha o nome da cor')
    cores.invalidFeedbackColor('Preencha o código da cor')
    
  })

  it('Tentativa de criar cor com o mesmo nome de outra cor existente', () => {

    cores.removeColorDB(dadosCor1.nome, dadosCor1.codigo)
    cores.addColorDB(dadosCor1.nome, dadosCor1.codigo)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.fillFormColor(dadosCor1.nome, 'CR4')
    cores.submitColor()
    cores.alertDangerColor('Não foi possível salvar a cor. Verifique se os campos não são iguais a campos de outras cores')
    
  })

  it('Tentativa de criar cor com o mesmo codigo de outra cor existente', () => {

    cores.removeColorDB(dadosCor1.nome, dadosCor1.codigo)
    cores.addColorDB(dadosCor1.nome, dadosCor1.codigo)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.fillFormColor('cypress robot teste', dadosCor1.codigo)
    cores.submitColor()
    cores.alertDangerColor('Não foi possível salvar a cor. Verifique se os campos não são iguais a campos de outras cores')
    
  })

  it('Tentativa de criar cor com o nome e codigo grande', () => {

    menu.navPageColor()
    cores.confirmPageColor()
    cores.fillFormColor('AMARELO ESVERDEADOCLAROAMARELO ESVERDEADO CLAROAMARELO ESVERDEADO CLAROAMARELO ESVERDEADO CLAROAMAREL', '1234')
    cores.submitColor()
    cores.invalidFeedbackColor('O nome da cor pode ter no máximo 100 caracteres')
    cores.invalidFeedbackColor('O código da cor pode ter no máximo 3 caracteres')

  })

  it('Tentativa de editar cor com os campos vazios', () => {

    cores.removeColorDB(dadosCor1.nome, dadosCor1.codigo)
    cores.addColorDB(dadosCor1.nome, dadosCor1.codigo)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(dadosCor1.codigo)
    cores.submitColor()
    cores.invalidFeedbackColor('Preencha o nome da cor')
    cores.invalidFeedbackColor('Preencha o código da cor')
    
  })

  it('Tentativa de editar cor com o mesmo nome de outra cor existente', () => {

    cores.removeColorDB(dadosCor1.nome, dadosCor1.codigo)
    cores.removeColorDB(dadosCor2.nome, dadosCor2.codigo)
    cores.addColorDB(dadosCor1.nome, dadosCor1.codigo)
    cores.addColorDB(dadosCor2.nome, dadosCor2.codigo)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(dadosCor1.codigo)
    cores.fillFormColor(dadosCor2.nome, 'CR4')
    cores.submitColor()
    cores.alertDangerColor('Não foi possível salvar a cor. Verifique se os campos não são iguais a campos de outras cores')
    
  })

  it('Tentativa de editar cor com o mesmo codigo de outra cor existente', () => {

    cores.removeColorDB(dadosCor1.nome, dadosCor1.codigo)
    cores.removeColorDB(dadosCor2.nome, dadosCor2.codigo)
    cores.addColorDB(dadosCor1.nome, dadosCor1.codigo)
    cores.addColorDB(dadosCor2.nome, dadosCor2.codigo)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(dadosCor1.codigo)
    cores.fillFormColor('cypress robot teste', dadosCor2.codigo)
    cores.submitColor()
    cores.alertDangerColor('Não foi possível salvar a cor. Verifique se os campos não são iguais a campos de outras cores')
    
  })

  it('Tentativa de editar cor com o nome e codigo grande', () => {

    cores.removeColorDB(dadosCor1.nome, dadosCor1.codigo)
    cores.addColorDB(dadosCor1.nome, dadosCor1.codigo)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(dadosCor1.codigo)
    cores.fillFormColor('AMARELO ESVERDEADOCLAROAMARELO ESVERDEADO CLAROAMARELO ESVERDEADO CLAROAMARELO ESVERDEADO CLAROAMAREL', '1234')
    cores.submitColor()
    cores.invalidFeedbackColor('O nome da cor pode ter no máximo 100 caracteres')
    cores.invalidFeedbackColor('O código da cor pode ter no máximo 3 caracteres')
    
  })

  

})  