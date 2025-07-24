describe('Community Post Creation Test', () => {
  it('should log in and create a new community post', () => {
    // Log in using the custom command
    cy.login('dale@smartlogic.io', 'H1likus5');

    // Wait for dashboard to load by checking for the welcome message
    cy.contains('Welcome back, Dale!').should('be.visible');

    // Click the button to create a new community post (case-insensitive, matches actual button)
    cy.contains(/what do you want to share today\?/i).click();

    // Wait for the TinyMCE iframe to appear and type the post
    cy.get('iframe.tox-edit-area__iframe').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('p').first().type('This is an automated Cypress community post.', { force: true });
    });

    // Click the first visible Post button
    cy.get('.comment-button.btn.btn-primary.float-right').first().click();

    // Wait for the post to appear in the feed
    cy.wait(3000);

    // Assert the new post appears in the Community Feed (wait up to 10s)
    cy.get('.post-body p', { timeout: 10000 }).should('contain', 'This is an automated Cypress community post.');
  });
});
