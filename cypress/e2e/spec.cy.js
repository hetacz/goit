describe('Go IT Test', () => {
  it('Cypress test', () => {
    cy.visit('/pl/account/login');
    cy.get('input#user_email').type(Cypress.env('username'));
    cy.get('input#user_password').type(Cypress.env('password'));
    cy.get('button[type="submit"]').click({waitForAnimations: true});
    cy.url().should('contain', '/homepage');
    cy.get('button[color="primary"]').click({waitForAnimations: true});
    cy.url().should('contain', '/textbook');
    cy.get('a[data-tour-step="homework"]').click({waitForAnimations: true});
    cy.url().should('contain', '/homework');
    cy.get('div[data-tour-step="homework-form"] button[type="submit"]').click({waitForAnimations: true});
    cy.get('div[data-tour-step="homework-form"] h3').should('have.text', 'Przesłałeś pracę domową');
  });
});
