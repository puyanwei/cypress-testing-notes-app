describe('My first Cypress test!', () => {
    it('Does not do at lot at all!', () => {
        expect(true).to.equal(true);
        expect(true).to.not.equal(false);
    });
});
describe('Lets go to the Kitchen Sink!', () => {
    it('visits cypress.io', () => {
        cy.visit('http://localhost:8000/');
    });
});
