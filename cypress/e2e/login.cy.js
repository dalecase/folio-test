describe('Login Test for Hill Academy', () => {
  it('should log in with valid credentials', () => {
    cy.visit('https://hillacademy.staging.foliocollaborative.org/sign_in');

    // Replace with valid test credentials
    cy.get('input[name="user[email]"]').type('dale@smartlogic.io');
    cy.get('input[name="user[password]"]').type('H1likus5');

    cy.get('input[type="submit"]').click();

    // Assert successful login (update selector/text as needed)
    cy.url().should('not.include', '/sign_in');
    cy.contains('Welcome back, Dale!').should('be.visible');
  });
});