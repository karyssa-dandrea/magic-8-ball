
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains the magic 8 ball gif', ()=>{
            cy.get('.8ball-.gif').should('be.visible');
        });
    });
});