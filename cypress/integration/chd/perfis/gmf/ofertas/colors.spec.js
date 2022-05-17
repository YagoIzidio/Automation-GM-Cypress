import login from '../../../../../support/pages/Common/LoginPage'
import meusDados from '../../../../../support/pages/Common/MyDataPage'
import cores from '../../../../../support/pages/OfertasPage/ColorPage'
import menu from '../../../../../support/pages/OfertasPage/MenuPage' 

describe('Pagina de Cores', function() {

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

  it('Criar cor com sucesso', function() {

    cores.removeColorDB(this.dataOffers.colorOffers.color1)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.fillFormColor(this.dataOffers.colorOffers.color1)
    cores.submitColor()
    cores.alertSucessColor(this.dataOffers.colorOffers.inspect_screen_message.successfully_added)
    cores.inspectColor(this.dataOffers.colorOffers.color1)

  })

  it('Editar cor com sucesso', function() {

    cores.removeColorDB(this.dataOffers.colorOffers.color1)
    cores.removeColorDB(this.dataOffers.colorOffers.color2)
    cores.addColorDB(this.dataOffers.colorOffers.color1)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(this.dataOffers.colorOffers.color1)
    cores.fillFormColor(this.dataOffers.colorOffers.color2)
    cores.submitColor()
    cores.alertSucessColor(this.dataOffers.colorOffers.inspect_screen_message.successfully_added)
    cores.inspectColor(this.dataOffers.colorOffers.color2)

  })

  it('Editar cor com o mesmo nome com sucesso', function() {

    cores.removeColorDB(this.dataOffers.colorOffers.color1)
    cores.addColorDB(this.dataOffers.colorOffers.color1)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(this.dataOffers.colorOffers.color1)
    cores.fillFormColor(this.dataOffers.colorOffers.color1)
    cores.submitColor()
    cores.alertSucessColor(this.dataOffers.colorOffers.inspect_screen_message.successfully_added)
    cores.inspectColor(this.dataOffers.colorOffers.color1)
  })

  it('Tentativa de criar cor com os campos vazios', function() {

    menu.navPageColor()
    cores.confirmPageColor()
    cores.submitColor()
    cores.invalidFeedbackColor(this.dataOffers.colorOffers.inspect_screen_message.empty_code)
    cores.invalidFeedbackColor(this.dataOffers.colorOffers.inspect_screen_message.empty_name)
    
  })

  it('Tentativa de criar cor com o mesmo nome de outra cor existente', function() {

    cores.removeColorDB(this.dataOffers.colorOffers.color1)
    cores.addColorDB(this.dataOffers.colorOffers.color1)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.fillFormColor(this.dataOffers.colorOffers.color1_name_equal)
    cores.submitColor()
    cores.alertDangerColor(this.dataOffers.colorOffers.inspect_screen_message.equal_name)
    
  })

  it('Tentativa de criar cor com o mesmo codigo de outra cor existente',function() {

    cores.removeColorDB(this.dataOffers.colorOffers.color1)
    cores.addColorDB(this.dataOffers.colorOffers.color1)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.fillFormColor(this.dataOffers.colorOffers.color1_code_equal)
    cores.submitColor()
    cores.alertDangerColor(this.dataOffers.colorOffers.inspect_screen_message.equal_code)
    
  })

  it('Tentativa de criar cor com o nome e codigo grande', function() {

    menu.navPageColor()
    cores.confirmPageColor()
    cores.fillFormColor(this.dataOffers.colorOffers.color_limit_characters)
    cores.submitColor()
    cores.invalidFeedbackColor(this.dataOffers.colorOffers.inspect_screen_message.limit_characters_name)
    cores.invalidFeedbackColor(this.dataOffers.colorOffers.inspect_screen_message.limit_characters_code)

  })

  it('Tentativa de editar cor com os campos vazios', function() {

    cores.removeColorDB(this.dataOffers.colorOffers.color1)
    cores.addColorDB(this.dataOffers.colorOffers.color1)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(this.dataOffers.colorOffers.color1)
    cores.submitColor()
    cores.invalidFeedbackColor(this.dataOffers.colorOffers.inspect_screen_message.empty_code)
    cores.invalidFeedbackColor(this.dataOffers.colorOffers.inspect_screen_message.empty_name)
    
  })

  it('Tentativa de editar cor com o mesmo nome de outra cor existente', function() {

    cores.removeColorDB(this.dataOffers.colorOffers.color1)
    cores.removeColorDB(this.dataOffers.colorOffers.color2)
    cores.addColorDB(this.dataOffers.colorOffers.color1)
    cores.addColorDB(this.dataOffers.colorOffers.color2)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(this.dataOffers.colorOffers.color1)
    cores.fillFormColor(this.dataOffers.colorOffers.color2_name_equal)
    cores.submitColor()
    cores.alertDangerColor(this.dataOffers.colorOffers.inspect_screen_message.equal_name)
    
  })

  it('Tentativa de editar cor com o mesmo codigo de outra cor existente', function() {

    cores.removeColorDB(this.dataOffers.colorOffers.color1)
    cores.removeColorDB(this.dataOffers.colorOffers.color2)
    cores.addColorDB(this.dataOffers.colorOffers.color1)
    cores.addColorDB(this.dataOffers.colorOffers.color2)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(this.dataOffers.colorOffers.color1)
    cores.fillFormColor(this.dataOffers.colorOffers.color2_code_equal)
    cores.submitColor()
    cores.alertDangerColor(this.dataOffers.colorOffers.inspect_screen_message.equal_code)
    
  })

  it('Tentativa de editar cor com o nome e codigo grande', function() {

    cores.removeColorDB(this.dataOffers.colorOffers.color1)
    cores.addColorDB(this.dataOffers.colorOffers.color1)
    menu.navPageColor()
    cores.confirmPageColor()
    cores.editColor(this.dataOffers.colorOffers.color1)
    cores.fillFormColor(this.dataOffers.colorOffers.color_limit_characters)
    cores.submitColor()
    cores.invalidFeedbackColor(this.dataOffers.colorOffers.inspect_screen_message.limit_characters_name)
    cores.invalidFeedbackColor(this.dataOffers.colorOffers.inspect_screen_message.limit_characters_code)
    
  })

  

})  