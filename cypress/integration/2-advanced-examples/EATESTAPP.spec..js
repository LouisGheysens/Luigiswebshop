describe('Cypress javascript testing', () => {
    it('Navigate to webApplication homes screen', () =>{
        cy.visit('http://localhost:3000/');
    })

    it('Navigate to webApplication cart screen', () =>{
        cy.visit('http://localhost:3000/cart');
    })

    it('Navigatie to productDetails page', () =>{
        cy.visit('http://localhost:3000/product');
    })

it('Click button to place order', () =>{
    cy.get('.checkoutBtn').type('finished')
})
});


