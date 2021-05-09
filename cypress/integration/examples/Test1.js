/// <reference types="Cypress" />

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)

        // Parent child chaining

        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
            if ($el.find('.product-name').text().includes('Capsicum')) {
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })

        cy.get('.brand').then((logo) => {
            cy.log(logo.text())
        })
    })
})
