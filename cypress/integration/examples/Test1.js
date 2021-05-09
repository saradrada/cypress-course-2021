/// <reference types="Cypress" />

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)

        // Alias
        cy.get('.products').as('product-locator')

        // Parent child chaining
        cy.get('@product-locator').find('.product').should('have.length', 4)
        cy.get('@product-locator').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@product-locator').find('.product').each(($el, index, $list) => {
            if ($el.find('.product-name').text().includes('Capsicum')) {
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })

        // Pring log
        cy.get('.brand').then((logo) => {
            cy.log(logo.text())
        })

        // Assert logo text is displayed correctly
        cy.get('.brand').should('have.text', 'GREENKART')
    })
})
