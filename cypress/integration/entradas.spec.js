///<reference types = "Cypress"/>

let entrada = {
    descricao: 'Salário',
    valor: '10.000',
    data: ''
}


beforeEach(() => {
    cy.visit('')
})

afterEach(() => {
    cy.clearLocalStorage()
});

it.only('Entrada (happy path))', () => {
    cy.newInput(entrada.descricao, entrada.valor, entrada.data)
});


it('Excluir entrada', () => {
});

it('Várias entradas mesma descrição', () => {
});


it('Valor negativo', () => {
});


it('Campos obrigatórios', () => {
});


it('Cancelar operação', () => {
});


it('Várias entradas mesma data', () => {
});


it('Várias entradas mesma data e descrições iguais', () => {
});

it('Preencher campo de valor com letras', () => {
});
