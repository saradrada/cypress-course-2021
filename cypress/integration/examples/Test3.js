describe(`Checkbox tests`, () => {
    before(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    });

    it('', () => {
        cy.get('#checkBoxOption1').check().should('have.value', 'option1').should('be.checked')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    })

    it('Check all checkboxes', () => {

        /**
         * Selectors that also work:
         * 'input[type=checkbox]'
         * [type="checkbox"]
         * [type=checkbox]
         */

        cy.get('input[type="checkbox"]').each(($el, index, $list) => {
            cy.wrap($el).check()
        })
    })

    it('Check a single checkbox', () => {
        /**
         * The check() method accepts the value property of the element as a parameter
         */
        cy.get('[type=checkbox]').check(['option1'])

    })

    it('Check multiple, but not all checkboxes', () => {
        /**
         * The check() method accepts the value property of the element as a parameter
         */
        cy.get('[type=checkbox]').check(['option1', 'option3'])

    })
})



describe('Dropdowns tests', () => {

    before(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    });

    describe('Dynamic dropdowns tests', () => {
        it.only('Select an option', () => {
            cy.get('#autocomplete').type('ind')
            cy.get('.ui-menu-item').each(($el, index, $list) => {
                if ($el.text() === ('India')) {
                    $el.click()
                }
            })
            cy.get('#autocomplete').should('have.value', 'India')
        })
    })

    describe('Static dropdowns tests', () => {
        it('Select an option', () => {
            /**
             * The select() method accepts the value property or the text of the element as a parameter
             */
            cy.get('select').select('option2').should('have.value', 'option2')
            cy.get('select').select('Option1').should('have.value', 'option1')
        })
    })
})
