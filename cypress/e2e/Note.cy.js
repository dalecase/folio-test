describe('Write a Note Button Test', () => {
  it('should log in and open the Write a note modal', () => {
    cy.login('dale@smartlogic.io', 'H1likus5');

    cy.contains('Write a Note').click();
    cy.get('.modal-header > #note-writing-modal').contains('Write a Note').should('be.visible');
  });
});
