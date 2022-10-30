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
    cy.location("pathname", "/login");
  });
});
