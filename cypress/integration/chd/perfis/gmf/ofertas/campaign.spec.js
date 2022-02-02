import login from '../../../../../support/pages/Common/LoginPage'
import meusDados from '../../../../../support/pages/Common/MyDataPage'
import campanhas from '../../../../../support/pages/OfertasPage/CampaignPage'
import menu from '../../../../../support/pages/OfertasPage/MenuPage' 


var usuarioLogado = {
  user: 'AGOFFR',
  password: 'Augusto23051991@',
  perfil: 'GMF Ofertas'
}

var dadosCampanha1 = {
  nome: 'cypress robot 1',
  codigo: 'CR1'
}

var dadosCampanha2 = {
  nome: 'cypress robot 2',
  codigo: 'CR2'
}

var dadosCampanha3 = {
  nome: 'cypress robot 3',
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

describe('Pagina de Campanhas', () => {

  it('Criar campanha com sucesso', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.fillFormCampaign(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.submitCampaign()
    campanhas.alertSucessCampaign('Campanha salva com sucesso')
    campanhas.inspectCampaign(dadosCampanha1.nome, dadosCampanha1.codigo)

  })

  it('Editar campanha com sucesso', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.removeCampaignDB(dadosCampanha2.nome, dadosCampanha2.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(dadosCampanha1.codigo)
    campanhas.fillFormCampaign(dadosCampanha2.nome, dadosCampanha2.codigo)
    campanhas.submitCampaign()
    campanhas.alertSucessCampaign('Campanha salva com sucesso')
    campanhas.inspectCampaign(dadosCampanha2.nome, dadosCampanha2.codigo)

  })

  it('Inativar campanha com sucesso', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.inactivateCampaign(dadosCampanha1.codigo)
    campanhas.alertSucessCampaign('Campanha desativada com sucesso')
    campanhas.inspectStatusCampaign(dadosCampanha1.codigo, 'Inativo')
    
  })

  it('Editar uma campanha inativa com sucesso', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.removeCampaignDB(dadosCampanha2.nome, dadosCampanha2.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.inactivateCampaign(dadosCampanha1.codigo)
    campanhas.editCampaign(dadosCampanha1.codigo)
    campanhas.fillFormCampaign(dadosCampanha2.nome, dadosCampanha2.codigo)
    campanhas.submitCampaign()
    campanhas.alertSucessCampaign('Campanha salva com sucesso')
    campanhas.inspectStatusCampaign(dadosCampanha2.codigo, 'Inativo')
  })

  it('Editar uma campanha inativa com o mesmo nome com sucesso', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.inactivateCampaign(dadosCampanha1.codigo)
    campanhas.editCampaign(dadosCampanha1.codigo)
    campanhas.fillFormCampaign(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.submitCampaign()
    campanhas.alertSucessCampaign('Campanha salva com sucesso')
    campanhas.inspectStatusCampaign(dadosCampanha1.codigo, 'Inativo')
  })

  it('Editar campanha com o mesmo nome com sucesso', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(dadosCampanha1.codigo)
    campanhas.fillFormCampaign(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.submitCampaign()
    campanhas.alertSucessCampaign('Campanha salva com sucesso')
    campanhas.inspectCampaign(dadosCampanha1.nome ,dadosCampanha1.codigo)
    
  })

  it('Tentativa de criar campanha com os campos vazios', () => {

    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.submitCampaign()
    campanhas.invalidFeedbackCampaign('Preencha o nome da campanha')
    campanhas.invalidFeedbackCampaign('Preencha o código da campanha')
    
  })

  it('Tentativa de criar campanha com o mesmo nome de outra campanha existente', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.fillFormCampaign(dadosCampanha1.nome, 'CRT1')
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign('Não foi possível salvar a campanha. Verifique se os campos não são iguais a campos de outras campanhas')
    
  })

  it('Tentativa de criar campanha com o mesmo codigo de outra campanha existente', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.fillFormCampaign('cypress robot teste', dadosCampanha1.codigo)
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign('Não foi possível salvar a campanha. Verifique se os campos não são iguais a campos de outras campanhas')
    
  })

  it('Tentativa de criar campanha com o nome e codigo grande', () => {

    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.fillFormCampaign('AMARELO ESVERDEADOCLAROAMARELO ESVERDEADO CLAROAMARELO ESVERDEADO CLAROAMARELO ESVERDEADO CLAROAMAREL', '12345678910111213141516171')
    campanhas.submitCampaign()
    campanhas.invalidFeedbackCampaign('O nome da campanha deve ter até 100 caracteres')
    campanhas.invalidFeedbackCampaign('O nome da campanha deve ter até 100 caracteres')

  })

  it('Tentativa de editar campanha com os campos vazios', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(dadosCampanha1.codigo)
    campanhas.submitCampaign()
    campanhas.invalidFeedbackCampaign('Preencha o nome da campanha')
    campanhas.invalidFeedbackCampaign('Preencha o código da campanha')
    
  })

  it('Tentativa de editar campanha com o mesmo nome de outra campanha existente', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.removeCampaignDB(dadosCampanha2.nome, dadosCampanha2.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.addCampaignDB(dadosCampanha2.nome, dadosCampanha2.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(dadosCampanha1.codigo)
    campanhas.fillFormCampaign(dadosCampanha2.nome, 'CRT1')
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign('Não foi possível salvar a campanha. Verifique se os campos não são iguais a campos de outras campanhas')
    
  })

  it('Tentativa de editar campanha com o mesmo codigo de outra campanha existente', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.removeCampaignDB(dadosCampanha2.nome, dadosCampanha2.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.addCampaignDB(dadosCampanha2.nome, dadosCampanha2.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(dadosCampanha1.codigo)
    campanhas.fillFormCampaign('cypress robot teste', dadosCampanha2.codigo)
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign('Não foi possível salvar a campanha. Verifique se os campos não são iguais a campos de outras campanhas')
    
  })

  it('Tentativa de editar campanha com o nome e codigo grande', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(dadosCampanha1.codigo)
    campanhas.fillFormCampaign('AMARELO ESVERDEADOCLAROAMARELO ESVERDEADO CLAROAMARELO ESVERDEADO CLAROAMARELO ESVERDEADO CLAROAMAREL', '12345678910111213141516171')
    campanhas.submitCampaign()
    campanhas.invalidFeedbackCampaign('O nome da campanha deve ter até 100 caracteres')
    campanhas.invalidFeedbackCampaign('O nome da campanha deve ter até 100 caracteres')
    
  })

  it('Tentativa de editar uma campanha inativa com o mesmo nome de outra campanha existente', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.removeCampaignDB(dadosCampanha2.nome, dadosCampanha2.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.addCampaignDB(dadosCampanha2.nome, dadosCampanha2.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.inactivateCampaign(dadosCampanha1.codigo)
    campanhas.editCampaign(dadosCampanha1.codigo)
    campanhas.fillFormCampaign(dadosCampanha2.nome, 'CRT1')
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign('Não foi possível salvar a campanha. Verifique se os campos não são iguais a campos de outras campanhas')
   
  })
  
  it('Tentativa de editar uma campanha inativa com o mesmo codigo de outra campanha existente', () => {

    campanhas.removeCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.removeCampaignDB(dadosCampanha2.nome, dadosCampanha2.codigo)
    campanhas.addCampaignDB(dadosCampanha1.nome, dadosCampanha1.codigo)
    campanhas.addCampaignDB(dadosCampanha2.nome, dadosCampanha2.codigo)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.inactivateCampaign(dadosCampanha1.codigo)
    campanhas.editCampaign(dadosCampanha1.codigo)
    campanhas.fillFormCampaign('cypress robot teste', dadosCampanha2.codigo)
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign('Não foi possível salvar a campanha. Verifique se os campos não são iguais a campos de outras campanhas')
  })


})  