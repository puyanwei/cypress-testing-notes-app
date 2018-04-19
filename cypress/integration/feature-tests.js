describe('Goes to the notes app on the local server', () => {
    it('visits localhost:8000', () => {
        cy.visit('http://localhost:8000/');
    });
});
