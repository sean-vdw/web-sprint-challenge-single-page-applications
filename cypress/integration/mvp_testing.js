describe('Lambda Eats App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
  })

  // Helpers
  const pizzaForm = () => cy.get('form[id="pizza-form"]');
  const nameInput = () => cy.get('input[name=name]');
  const sizeInput = () => cy.get('select[name=size]');
  const sauceInput = () => cy.get('select[name=sauce]');
  const sausageBox = () => cy.get('input[name=Sausage]');
  const mushroomBox = () => cy.get('input[name=Mushrooms]');
  const peppersBox = () => cy.get('input[name=Peppers]');
  const salamiBox = () => cy.get('input[name=Salami]');
  const jalapenoBox = () => cy.get('input[name=Jalapenos]');
  const pineappleBox = () => cy.get('input[name=Pineapple]');
  const specialInput = () => cy.get('input[name=special]');

  // Sanity checks
  it('sanity check to make sure tests work', () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({});
    expect({}).to.eql({}); 
  })

  // Check text inputs
  it('checking text input fields', () => {
    nameInput().should('exist');
    specialInput().should('exist');
    nameInput().type('Name test');
    specialInput().type('Special instructions');
    nameInput().should('have.value', 'Name test');
    specialInput().should('have.value', 'Special instructions');
  })

  // Check topping selectors
  it('checking ability to select toppings', () => {
    sausageBox().should('exist');
    mushroomBox().should('exist');
    peppersBox().should('exist');
    salamiBox().should('exist');
    jalapenoBox().should('exist');
    pineappleBox().should('exist');

    sausageBox().check();
    mushroomBox().check();
    peppersBox().check();
    salamiBox().check();
    jalapenoBox().check();
    pineappleBox().check();

    sausageBox().should('be.checked');
    mushroomBox().should('be.checked');
    peppersBox().should('be.checked');
    salamiBox().should('be.checked');
    jalapenoBox().should('be.checked');
    pineappleBox().should('be.checked');
  })

  // Check submit button functionality
  it('checking submit button functionality', () => {
    nameInput().type('A Nice Name');
    sizeInput().select('medium');
    sauceInput().select('white');
    sausageBox().check();
    mushroomBox().check();
    peppersBox().check();
    salamiBox().check();
    jalapenoBox().check();
    pineappleBox().check();
    pizzaForm().submit();
  })

})