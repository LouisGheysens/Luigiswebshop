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

    it('Navigates to FormScreen', () =>{
        cy.visit('http://localhost:3000/form');
    })
});


describe('Cypress form testing', () =>{
    it('navigate to form page', () =>{
        cy.visit('http://localhost:3000/form');
    })

    it('Enter name', () =>{
        cy.get('input[name="name"]').should('be.visible').type('Louis Gheysens')
    })

    it('Enter email', () =>{
        cy.get('input[name="email"]').should('be.visible').type('Louis.gheysens98@gmail.com')
    })

    it('Enter subject', () =>{
        cy.get('input[name="subject"]').should('be.visible').type('test subject')
    })

    it('Enter message', () =>{
        cy.get('textarea[name="message"]').should('be.visible').type('test subject')
    })

    it('Click button to activate emailjs', () =>{
        cy.get('.btn-btn-info').should('be.visible').type('button clicking')
})








})


