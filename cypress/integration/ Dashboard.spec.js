describe('Dashboard', () => {

  beforeEach(function () {
    cy.visit('103.74.254.244:5000')
  })

  it('should show total amount', () => {
    
    cy.get(':nth-child(1) > .mx-auto > .v-card__text').contains('350000')
    cy.get(':nth-child(2) > .mx-auto > .v-card__text').contains('70000')
    cy.get(':nth-child(3) > .mx-auto > .v-card__text').contains('280000')
})
  it('should search by firstname(full)', () => {
    cy.get('.v-text-field__slot').type('Angkana')
    
    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Angkana Luprasit')
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('100000')
    cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('20000')
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('80000')
})
  it('should search by firstname(lower characters)', () => {
    cy.get('.v-text-field__slot').type('ang')
    cy.get('.v-btn__content').click()

    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Angkana Luprasit')
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('100000')
    cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('20000')
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('80000')
  })
  it('should search by firstname(upper characters)', () => {
    cy.get('.v-text-field__slot').type('ATH')
    cy.get('.v-btn__content').click()

    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Athibet P')
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('0')
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
  it('should search by firstname(one character)', () => {
    cy.get('.v-text-field__slot').type('a')
    cy.get('.v-btn__content').click()
    cy.get('.v-messages__message').contains('โปรดกรอกชื่ออย่างน้อย 3 ตัวอักษร')
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