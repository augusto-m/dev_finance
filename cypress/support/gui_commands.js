///<reference types = "Cypress" />


//---------------------------------------------------------//---------------------------------------------//
// ~> Utilitários

Cypress.Commands.add('alertFillFields', () => {
    cy.on('window:alert', (str) => {
        console.log(str)
        expect(str).to.contains('Por favor, preencha todos os campos corretamenteeee')
    })
})


//---------------------------------------------------------//---------------------------------------------//
// ~> Entradas
let str

Cypress.Commands.add('newInput', (descricao, valor, data) => {
    cy.get('#transaction [href="#"]').should('be.visible').click()
    cy.fillInput(descricao, valor, data)
    cy.get('.input-group.actions')
    cy.get('button').click()
    if(cy.on('window:alert', (str) => {
        expect(str).to.contains('Por favor, preencha todos os campos corretamente')
    }))
    {
    }
    else{}
})

Cypress.Commands.add('fillInput', (descricao, valor, data) => {
    cy.get('#description').should('be.visible').clear().type(descricao)
    cy.get('#amount').clear().type(valor)
    if (data !== '') {
        cy.get('#date').type(data)
    }
    else{
        cy.get('#date').focus()
        cy.get('#date').blur()
    }
})

Cypress.Commands.add('', () => {
})

Cypress.Commands.add('', () => {
})

Cypress.Commands.add('', () => {
})

Cypress.Commands.add('', () => {
})


//---------------------------------------------------------//---------------------------------------------//
// ~> Saídas

Cypress.Commands.add('', () => {
})

Cypress.Commands.add('', () => {
})

Cypress.Commands.add('', () => {
})

Cypress.Commands.add('', () => {
})