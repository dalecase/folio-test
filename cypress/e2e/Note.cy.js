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
    //trying to get the date input correct
    cy.get('#conversation_note_occurred_at').should('be.visible').click()
    cy.get(".datepicker-days tbody td.day").first().click();
    cy.get("label[for='selfReflectionAllowedSwitch']").click({force: true});
    cy.get('#conversation_note_summary_ifr').should('be.visible').then(($iframe) => {
        const $body = $iframe.contents().find('body');
    cy.wrap($body).find('p').type('This is a test note');
    cy.get('#submit-button').click();
    cy.get('.alert').should('contain', 'Conversation Note was successfully published');
});





  });
});
