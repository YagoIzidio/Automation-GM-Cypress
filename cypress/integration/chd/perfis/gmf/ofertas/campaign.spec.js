import login from '../../../../../support/pages/Common/LoginPage'
import meusDados from '../../../../../support/pages/Common/MyDataPage'
import campanhas from '../../../../../support/pages/OfertasPage/CampaignPage'
import menu from '../../../../../support/pages/OfertasPage/MenuPage' 

describe('Pagina de Campanhas',function() {

  beforeEach( function() {

    cy.fixture('dataOffers').then((massData)=> {
      this.dataOffers = massData
    })
  
  })

  beforeEach( function() {

    login.goLogin()
    login.confirmPageLogin()
    login.fillFormLogin(this.dataOffers.userOffers.user_logged)
    login.submitLogin()
  
    menu.navPageData()
  
    meusDados.confirmPageData(this.dataOffers.userOffers.user_logged)
  
  })

  it('Criar campanha com sucesso', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.submitCampaign()
    campanhas.alertSucessCampaign(this.dataOffers.campaignOffers.inspect_screen_message.successfully_added)
    campanhas.inspectCampaign(this.dataOffers.campaignOffers.campaign1)

  })

  it('Editar campanha com sucesso', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign2)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign2)
    campanhas.submitCampaign()
    campanhas.alertSucessCampaign(this.dataOffers.campaignOffers.inspect_screen_message.successfully_added)
    campanhas.inspectCampaign(this.dataOffers.campaignOffers.campaign2)

  })

  it('Inativar campanha com sucesso', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.inactivateCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.alertSucessCampaign(this.dataOffers.campaignOffers.inspect_screen_message.successfully_disabled)
    campanhas.inspectStatusCampaign(this.dataOffers.campaignOffers.campaign1, this.dataOffers.campaignOffers.inspect_screen_message.inactive_status)
    
  })

  it('Editar uma campanha inativa com sucesso', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign2)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.inactivateCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.editCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign2)
    campanhas.submitCampaign()
    campanhas.alertSucessCampaign(this.dataOffers.campaignOffers.inspect_screen_message.successfully_added)
    campanhas.inspectStatusCampaign(this.dataOffers.campaignOffers.campaign1, this.dataOffers.campaignOffers.inspect_screen_message.inactive_status)
  })

  it('Editar uma campanha inativa com o mesmo nome com sucesso', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.inactivateCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.editCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.submitCampaign()
    campanhas.alertSucessCampaign(this.dataOffers.campaignOffers.inspect_screen_message.successfully_added)
    campanhas.inspectStatusCampaign(this.dataOffers.campaignOffers.campaign1, this.dataOffers.campaignOffers.inspect_screen_message.inactive_status)
  })

  it('Editar campanha com o mesmo nome com sucesso', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.submitCampaign()
    campanhas.alertSucessCampaign(this.dataOffers.campaignOffers.inspect_screen_message.successfully_added)
    campanhas.inspectCampaign(this.dataOffers.campaignOffers.campaign1)
    
  })

  it('Tentativa de criar campanha com os campos vazios', function() {

    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.submitCampaign()
    campanhas.invalidFeedbackCampaign(this.dataOffers.campaignOffers.inspect_screen_message.empty_code)
    campanhas.invalidFeedbackCampaign(this.dataOffers.campaignOffers.inspect_screen_message.empty_name)
    
  })

  it('Tentativa de criar campanha com o mesmo nome de outra campanha existente', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign1_name_equal)
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign(this.dataOffers.campaignOffers.inspect_screen_message.equal_name)
    
  })

  it('Tentativa de criar campanha com o mesmo codigo de outra campanha existente', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign1_code_equal)
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign(this.dataOffers.campaignOffers.inspect_screen_message.equal_code)
    
  })

  it('Tentativa de criar campanha com o nome e codigo grande', function() {

    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign_limit_characters)
    campanhas.submitCampaign()
    campanhas.invalidFeedbackCampaign(this.dataOffers.campaignOffers.inspect_screen_message.limit_characters_name)
    campanhas.invalidFeedbackCampaign(this.dataOffers.campaignOffers.inspect_screen_message.limit_characters_code)

  })

  it('Tentativa de editar campanha com os campos vazios', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.submitCampaign()
    campanhas.invalidFeedbackCampaign(this.dataOffers.campaignOffers.inspect_screen_message.empty_code)
    campanhas.invalidFeedbackCampaign(this.dataOffers.campaignOffers.inspect_screen_message.empty_name)
    
  })

  it('Tentativa de editar campanha com o mesmo nome de outra campanha existente', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign2)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign2)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign2_name_equal)
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign(this.dataOffers.campaignOffers.inspect_screen_message.equal_name)
    
  })

  it('Tentativa de editar campanha com o mesmo codigo de outra campanha existente', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign2)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign2)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign2_code_equal)
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign(this.dataOffers.campaignOffers.inspect_screen_message.equal_code)
    
  })

  it('Tentativa de editar campanha com o nome e codigo grande', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.editCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign_limit_characters)
    campanhas.submitCampaign()
    campanhas.invalidFeedbackCampaign(this.dataOffers.campaignOffers.inspect_screen_message.limit_characters_name)
    campanhas.invalidFeedbackCampaign(this.dataOffers.campaignOffers.inspect_screen_message.limit_characters_code)
    
  })

  it('Tentativa de editar uma campanha inativa com o mesmo nome de outra campanha existente', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign2)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign2)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.inactivateCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.editCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign2_name_equal)
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign(this.dataOffers.campaignOffers.inspect_screen_message.equal_name)
   
  })
  
  it('Tentativa de editar uma campanha inativa com o mesmo codigo de outra campanha existente', function() {

    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.removeCampaignDB(this.dataOffers.campaignOffers.campaign2)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign1)
    campanhas.addCampaignDB(this.dataOffers.campaignOffers.campaign2)
    menu.navPageCampaign()
    campanhas.confirmPageCampaign()
    campanhas.inactivateCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.editCampaign(this.dataOffers.campaignOffers.campaign1)
    campanhas.fillFormCampaign(this.dataOffers.campaignOffers.campaign2_code_equal)
    campanhas.submitCampaign()
    campanhas.alertDangerCampaign(this.dataOffers.campaignOffers.inspect_screen_message.equal_code)
  })


})  