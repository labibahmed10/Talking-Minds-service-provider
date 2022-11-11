/// <reference types="cypress" />;

describe("will test the signup and signin test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("should test the sign up the user", () => {
    cy.get("#register").click();
    cy.get("#name")?.type("person");
    cy.get("#email")?.type("check@gmail.com");
    cy.get("#password")?.type("Asdasd123");
    cy.get("#conPass").type("Asdasd123");
    cy.get("#check").click();
    cy.get("#submit").click();
    cy.wait(4000);
    cy.location("pathname", "/login");
  });

  it("should login the user then", () => {
    cy.get("#email").type("check@gmail.com");
    cy.get("#password")?.type("Asdasd123");
    cy.get("#login").click();
    cy.wait(500);
  });

  it("should go to the check in page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(":nth-child(1) > .px-4").click();
    cy.get('#name').type("person");

    
  });
});
