// Cypress E2E test: Add a Goal on Folio Homepage
// This test simulates clicking the "Add a Goal" button and verifies navigation to the goal creation page.

describe('Add a Goal', () => {
  it('should navigate to the Add Goal page when clicking the Add a Goal button', () => {
    // Log in using custom command
    cy.login('dale@smartlogic.io', 'H1likus5'); // Actual password inserted

    // Ensure the Add a Goal button is visible and clickable
    cy.contains('a.btn.btn-primary.btn-header', 'Add a Goal')
      .should('be.visible')
      .click();

    // Verify navigation to the goal creation page
    cy.url().should('include', '/profile/goals/new');

    // Optionally, check for presence of form elements on the new goal page
    cy.get('form').should('exist');
    cy.get('form button').should('exist'); // Check for any button in the form
  });
});
