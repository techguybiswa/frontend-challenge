describe('Testing the filters in the app', () => {
    it('Visits the page and selects filter', () => {

      cy.visit('http://localhost:3001/')
      //visit the react-app URL
      cy.contains('News API')   
      //check if the header has rendered   
     

      cy.get('[data-test-id="search-news-api"]')
      .type('football')    
      .should('have.value', 'football')
      //type a keyword in the search bar

      cy.get('[data-test-id="filter-news-api"]')
      .click()
      //open the filter dropdown

      cy.get('.ant-select-item-option-active > .ant-select-item-option-content')
      .click()
      //select the first drop down option which is BBC UK
      cy.get('[data-test-id="search-news-api"]').click()
      //close the dropdown 

      cy.get('[data-test-id="filter-news-api"]')
      .children()
      .contains('BBC UK')
      //check if the dropdown is correctly populated by the selected value

      cy.wait(2000)
      //wait for a certain time so that the API call is complete
      //a better approcah is to implement Cypress router and see exactly when the API call is ending.

      cy.get('[data-test-id="read-full-news"]')
      .each(($el, index, $list) => {
          expect($el[0].href).to.have.string('bbc.co.uk')
      })
      //for all the result URLs make sure all of them are from the selected filter value that is BBC UK
    })
  })