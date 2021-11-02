/// <reference types="cypress" />

context('Delete payment', () => {
    before(() => {
        localStorage.setItem('userId', '1');
        localStorage.setItem('name', 'usuario');
        cy.visit('http://localhost:4200/pagamentos');
    });
    it('Click in button for delete payment', () => {
        cy.get('#delete').first().click();
        cy.get('#save').click();
    });
});
