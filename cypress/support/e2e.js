// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// you can use the "import" keyword
import "cypress-failed-log"
import './commands'

Cypress.on('fail', (error, runnable) => {
  // Optional: dump the DOM when a test fails
  cy.document().then(doc => {
    const html = doc.documentElement.outerHTML;
    cy.writeFile('cypress/logs/dom-on-fail.html', html);
  });

  console.error('Test failed:', error.message);
  throw error;
});
