import login from '../../../../../support/pages/Common/LoginPage'
import meusDados from '../../../../../support/pages/Common/MyDataPage'
import menu from '../../../../../support/pages/OfertasPage/MenuPage'
import simulador from '../../../../../support/pages/Common/SimulationPage'

describe('Pagina de simulação de oferta', function () {
  beforeEach(function () {
    cy.fixture('dataOffers').then(massData => {
      this.dataOffers = massData
    })
  })

  beforeEach(function () {
    login.goLogin()
    login.confirmPageLogin()
    login.fillFormLogin(this.dataOffers.userOffers.user_logged)
    login.submitLogin()

    menu.navPageData()

    meusDados.confirmPageData(this.dataOffers.userOffers.user_logged)
  })

  it('Simulaçäo Oferta PF e regular com sucesso', function () {
    menu.navPageSimulation()

    //STEP 1
    simulador.confirmPageSimulation(this.dataOffers.simulationOffers.step1.page)
    simulador.fillFormIdentification(
      this.dataOffers.simulationOffers.step1,
      this.dataOffers.simulationOffers.step1.personPF
    )
    simulador.submitIdentification()

    //STEP 2
    simulador.waitRequestGET(
      this.dataOffers.simulationOffers.step2.getFinanceStructures
    )
    simulador.waitRequestGET(
      this.dataOffers.simulationOffers.step2.getAggregateValues
    )
    simulador.confirmPageSimulation(this.dataOffers.simulationOffers.step2.page)
    simulador.fillFormFinancing(this.dataOffers.simulationOffers.step2)
    simulador.confirmTotalValueCalculation(
      this.dataOffers.simulationOffers.step2
    )
    simulador.submitCalculateFinancing()

    //STEP 3
    simulador.confirmStep3Data(
      this.dataOffers.simulationOffers.step3.totalFinancingValue
    )
    simulador.confirmStep3Data(
      this.dataOffers.simulationOffers.step3.entryValue
    )
    simulador.confirmStep3Data(
      this.dataOffers.simulationOffers.step3.entryPercentage
    )
    simulador.confirmStep3Data(
      this.dataOffers.simulationOffers.step2.financialStructure1
    )
    simulador.confirmStep3Data(this.dataOffers.simulationOffers.step1.version)

    simulador.submitSimulation()
    cy.wait(5000)

    let prazo
    let parcelaComum
    let codigoTabela
    let taxa
    let vigencia

    cy.xpath(
      `//div[1][@class='form-row']//div[2][@class='calculation-list-item-r mr-2 ml-2']/div[1]`
    )
      .invoke('text')
      .then($value1 => {
        prazo = $value1
      })

    cy.xpath(
      `//div[1][@class='form-row']//div[2][@class='calculation-list-item-r mr-2 ml-2']/div[4]`
    )
      .invoke('text')
      .then($value2 => {
        parcelaComum = $value2
      })

    cy.xpath(
      `//div[1][@class='form-row']//div[2][@class='calculation-list-item-r mr-2 ml-2']/div[5]`
    )
      .invoke('text')
      .then($value3 => {
        codigoTabela = $value3
      })

    cy.xpath(
      `//div[1][@class='form-row']//div[2][@class='calculation-list-item-r mr-2 ml-2']/div[6]`
    )
      .invoke('text')
      .then($value4 => {
        taxa = $value4
      })

    cy.xpath(
      `//div[1][@class='form-row']//div[2][@class='calculation-list-item-r mr-2 ml-2']/div[8]`
    )
      .invoke('text')
      .then($value5 => {
        vigencia = $value5
      })

    simulador.clickSelectedConditions()

    //STEP 4

    //RESUMO
    simulador.confirmStep4Data(
      this.dataOffers.simulationOffers.step1.offerType,
      'Tipo de Oferta'
    )
    simulador.confirmStep4Data(
      this.dataOffers.simulationOffers.step1.saleType,
      'Tipo de Venda'
    )
    simulador.confirmStep4Data(
      this.dataOffers.simulationOffers.step1.manufacturer,
      'Marca'
    )
    simulador.confirmStep4Data(
      this.dataOffers.simulationOffers.step4.vehicleValue,
      'Valor do veículo'
    )
    simulador.confirmStep4Data(
      this.dataOffers.simulationOffers.step2.financialStructure1,
      'Estrutura Financeira'
    )

    //DESPESAS
    simulador.confirmStep4Data('R$ 1.000,00', 'Tarifa de Cadastro')
    simulador.confirmStep4Data('R$ 0,00', 'Registro de Contrato')

    //VALORES AGREGADOS
    simulador.confirmStep4Data(
      this.dataOffers.simulationOffers.step4.valueAcessories,
      'Acessórios'
    )
    simulador.confirmStep4Data(
      this.dataOffers.simulationOffers.step4.valueForwardingAgent,
      'Despachante'
    )

    //FINANCIAMENTO
    cy.contains('#financing', 'Qtd. Parcelas comum').then($el => {
      cy.wrap($el).should('contain', prazo)
    })

    cy.contains('#financing', 'Valor da Parcela comum').then($el => {
      cy.wrap($el).should('contain', parcelaComum)
    })

    cy.contains('#financing', 'Código da Tabela').then($el => {
      cy.wrap($el).should('contain', codigoTabela)
    })

    cy.contains('#financing', 'Taxa').then($el => {
      cy.wrap($el).should('contain', taxa)
    })

    cy.contains('#financing', 'Vigência').then($el => {
      cy.wrap($el).should('contain', vigencia)
    })

    //SALVAR
    simulador.submitSaveOffers('2022-01-01', '2022-03-30')

    simulador.alertSucessOffers('Oferta salva com sucesso')
  })
})
