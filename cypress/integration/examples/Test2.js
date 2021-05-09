describe('My second test suite', () => {
    it('', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('product-locator')

        cy.get('@product-locator').find('.product').each(($el, index, $list) => {
            if ($el.find('.product-name').text().includes('Cashews')) {
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })

        cy.get('.cart-icon').click()
        cy.get('.action-block').contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})