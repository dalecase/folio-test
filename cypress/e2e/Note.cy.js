describe('Write a Note Button Test', () => {
  it('should log in and open the Write a note modal', () => {
    cy.login('dale@smartlogic.io', 'H1likus5');

    cy.contains('Write a Note').click();
    cy.get('.modal-header > #note-writing-modal').contains('Write a Note').should('be.visible');
    cy.get('.mr-2 > .radio-btn-label').contains('For myself').click();
    cy.contains('button', 'Next').click();
    cy.contains("Write a Note").should('be.visible'); 
    cy.get('.modal-header > #note-writing-modal').contains("Write a Note").should('be.visible');
    cy.get(':nth-child(1) > .radio-btn-wrapper > .radio-btn-label').contains("Conversation").click();
    cy.get('span > .btn').contains('Write Note').click();
    
  });
});
