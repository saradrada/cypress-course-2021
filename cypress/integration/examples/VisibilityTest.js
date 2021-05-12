describe('Visibility tests', () => {
    before(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    });

    it('Check an element is visible', () => {
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    });

    it('Check an element is not visible', () => {
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
    });
});