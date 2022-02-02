import login from '../../../../../support/pages/Common/LoginPage'
import meusDados from '../../../../../support/pages/Common/MyDataPage'
import menu from '../../../../../support/pages/OfertasPage/MenuPage'
import simulador from '../../../../../support/pages/OfertasPage/SimulationPage'


var dados = {
  personPJ: 'Jurídica',
  personPF: 'Física',
  saleType: "Novo",
  modelYear: "2021",
  manufacturerYear: "2021",
  manufacturer: "CHEVROLET",
  model: "ONIX", 
  version: "HATCH RS 1.0 TB 12V FLEX 5P AUT.",
  simulatorCampaigns: "Campanha Onix Carnaval 2022",
  color: "Selecionar todos",
  offerType: "Regional",
  region: "Selecionar todos"
}

var usuarioLogado = {
  user: 'AGOFFR',
  password: 'Augusto23051991@',
  perfil: 'GMF Ofertas'
}

beforeEach(() => {

  login.goLogin()
  login.confirmPageLogin()
  login.fillFormLogin(usuarioLogado.user, usuarioLogado.password)
  login.submitLogin()

  menu.navPageData()
  
  meusDados.confirmPageData(usuarioLogado.user, usuarioLogado.perfil)

})

describe('Pagina de simulação', () => {

  it('Etapa de simulaçäo com sucesso', () => {

    menu.navPageSimulation()
    simulador.confirmPageIdentification()
    simulador.fillFormIdentification(dados.personPF, dados.saleType, dados.modelYear, dados.manufacturerYear, dados.manufacturer, dados.model, dados.version, dados.simulatorCampaigns, dados.color, dados.offerType, dados.region)
    simulador.submitIdentification()

  })


  

})  