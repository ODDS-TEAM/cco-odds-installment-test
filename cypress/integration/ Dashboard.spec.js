describe('Dashboard', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('should search by firstname(full)', () => {
    cy.get('.v-text-field__slot').type('Angkana')
    cy.get('.v-btn__content').click()
    //    cy.get('#firstname').contains('Angkana')
    //    cy.get('#lastname').contains('Luprasit')
    //    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Angkana Luprasit')
    //    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('100000')
    //    cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('20000')
    //    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('80000')
    // cy.get('table').contains('td','somename').should('be.visible')
    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Angkana Luprasit')
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('130000')
    cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('20000')
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('80000')

    // })

    // it('should search by firstname(3 first letters)', () => {
    //     cy.get('#searchBox').type('ang')
    //     cy.get('#searchBox').click()
    //     cy.get('#firstname').contains('Angkana')
    //     cy.get('#lastname').contains('Luprasit')
    //     cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('100000')
    //     cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('20000')
    //     cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('80000')

    //  })

    //  it('should search by firstname(3 first letters last upper)', () => {
    //     cy.get('#searchBox').type('chA')
    //     cy.get('#searchBox').click()
    //     cy.get('#firstname').contains('Chayanis')
    //     cy.get('#lastname').contains('Prechanont')
    //     cy.get('#ยอดหนี้').contains('50000')
    //     cy.get('#ยอดคืน').contains('10000')
    //     cy.get('#ยอดหนี้คงเหลืิอ').contains('40000')

    //  })

    //  it('should search by firstname(4 first letters first upper)', () => {
    //     cy.get('#searchBox').type('Chay')
    //     cy.get('#searchBox').click()
    //     cy.get('#firstname').contains('Chayanis')
    //     cy.get('#lastname').contains('Prechanont')
    //     cy.get('#ยอดหนี้').contains('50000')
    //     cy.get('#ยอดคืน').contains('10000')
    //     cy.get('#ยอดหนี้คงเหลืิอ').contains('40000')

    //  })

    //  it('should search by firstname(3 first letters all upper)', () => {
    //     cy.get('#searchBox').type('ATH')
    //     cy.get('#searchBox').click()
    //     cy.get('#firstname').contains('Athibet')
    //     cy.get('#lastname').contains('P')
    //     cy.get('#ยอดหนี้').contains('0')
    //     cy.get('#ยอดคืน').contains('0')
    //     cy.get('#ยอดหนี้คงเหลืิอ').contains('0')

    //  })

    //  it('should search by firstname(3 first letters all upper)', () => {
    //     cy.get('#searchBox').type('Ath')
    //     cy.get('#searchBox').click()
    //     cy.get('#firstname').contains('Athibet')
    //     cy.get('#lastname').contains('P')
    //     cy.get('#ยอดหนี้').contains('0')
    //     cy.get('#ยอดคืน').contains('0')
    //     cy.get('#ยอดหนี้คงเหลืิอ').contains('0')

  })
  it('should search by firstname(lower characters)', () => {
    cy.get('.v-text-field__slot').type('ang')
    cy.get('.v-btn__content').click()

    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Angkana Luprasit')
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('130000')
    cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('20000')
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('80000')
  })
  it('should search by firstname(upper characters)', () => {
    cy.get('.v-text-field__slot').type('ATH')
    cy.get('.v-btn__content').click()

    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Athibet P')
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('30000')
    cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('0')
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('0')
  })
  it('should search by firstname(sensitive characters)', () => {
    cy.get('.v-text-field__slot').type('chA')
    cy.get('.v-btn__content').click()

    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Chayanis Prechanont')
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('50000')
    cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('10000')
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('40000')
  })
  it('should search by firstname(middlefirstname characters)', () => {
    cy.get('.v-text-field__slot').type('kana')
    cy.get('.v-btn__content').click()
    cy.get('td').contains('No data available')
  })
  it('should search by nickname', () => {
    cy.get('.v-text-field__slot').type('Hmoo')
    cy.get('.v-btn__content').click()
    cy.get('td').contains('No data available')
  })
  it('should search by lastname', () => {
    cy.get('.v-text-field__slot').type('Luprasit')
    cy.get('.v-btn__content').click()
    cy.get('td').contains('No data available')
  })
})