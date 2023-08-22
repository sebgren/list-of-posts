describe('Checks if the title of the card is visible when opened in modal', () => {
  it('should extract text from the first card title', () => {
    cy.visit('http://localhost:5000')
    
    cy.get('#app').find('.card-title').first().then( title => {
      let cardTitle = title.text();

      //Click on the card title and not the card link
      cy.get('#app').find('.card-title').first().click()
      //Assert that it includes the first characters, since a long title could be shortened
      cy.get('h3.font-bold.text-lg').first().should('include.text', cardTitle.slice(0, 50))

    })

  })
})