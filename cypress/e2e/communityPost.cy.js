describe('Community Post Creation Test', () => {
  it('should log in and create a new community post', () => {
    // Log in using the custom command
    cy.login('dale@smartlogic.io', 'H1likus5');

    // Wait for dashboard to load by checking for the welcome message
    cy.contains('Welcome back, Dale!').should('be.visible');

    // Click the button to create a new community post (case-insensitive, matches actual button)
    cy.contains(/what do you want to share today\?/i).click();

    // Wait for the TinyMCE iframe to appear and type the post
    cy.get('.add-post-form iframe.tox-edit-area__iframe').should('be.visible').then($iframe => {
      // Output the iframe element for inspection

      const $body = $iframe.contents().find('body');
      cy.log('body element:', $body.prop('outerHTML'));
      // Print the contents of the $body selector to the terminal
      cy.task('print', $body.prop('outerHTML'));

      // Type directly into the body of the TinyMCE iframe
      cy.wrap($body).type('This is an automated Cypress community post.');
    });

    // Click the first visible Post button
    cy.get('.comment-button.btn.btn-primary.float-right').first().click();

    // Wait for the post to appear in the feed
    cy.wait(3000);

    // Assert the new post appears in the Community Feed using cy.contains, then check its parent for .post-body (wait up to 10s)
    cy.contains('This is an automated Cypress community post.', { timeout: 10000 })
      .parents('.post-body')
      .should('exist');
  });
});
