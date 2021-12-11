describe('Cypress javascript testing', () => {
    it('Navigate to webApplication homes screen', () =>{
        cy.visit('http://localhost:3000/');
    })

    it('Navigate to webApplication cart screen', () =>{
        cy.visit('http://localhost:3000/cart');
    })

it('Click button to place order', () =>{
    cy.get('.checkoutBtn').type('finished')
})

it('Click button to see productDetails', () =>{
    cy.get('.info__button').tye('finishes');
})

it('Navigate to pages mobile-device mode', () =>{
    cy.get('.hamburger__menu').type('finished');
})

});


