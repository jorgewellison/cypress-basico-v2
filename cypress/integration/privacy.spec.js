it.only('testa a página da política de privavidade de forma independente', function () {
    cy.visit('./src/privacy.html')
    //     .invoke('removeAttr', 'target')
    //     .click()
    cy.contains('Talking About Testing').should('be.visible')
})