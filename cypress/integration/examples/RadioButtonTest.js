describe(`Radio buttons tests`, () => {
    before(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    });

    it('Check a radio button with click function', () => {
        cy.get('[value="radio2"]').click()
        cy.get('[value="radio2"]').should('be.checked')
    })

    it('Check a radio button with check function', () => {
        cy.get('[type=radio]').check(['radio2'])
        cy.get('[value="radio2"]').should('be.checked')
    })
})
