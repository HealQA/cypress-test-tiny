Cypress.Commands.add("login", (username, password) => {
    cy.visit('https://my.qa.heal.com/login');
    cy.get('.fade-enter-done').get('[data-tid="txt_title"]').should('have.text','Log in');
    cy.get('.fade-enter-done').get('[data-tid="inp_username"]').should('be.visible').type(username);
    cy.get('.fade-enter-done').get('[data-tid="inp_password"]').should('be.visible').type(password);
    cy.get('.fade-enter-done').get('[data-tid="btn_pageBottom_enabled"]').should('be.visible').click();
})

