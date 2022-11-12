/// <reference types="cypress" />;

describe("will test the signup and signin test", () => {
  beforeEach(() => {
    cy.viewport(1400, 768);
  });

  it("should test the sign up a user", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#register").click();
    cy.get("#name").type("person");
    cy.get("#email").type("check@gmail.com");
    cy.get("#password").type("Asdasd123");
    cy.get("#conPass").type("Asdasd123");
    cy.get("#check").click();
    cy.get("#submit").click();
    cy.wait(2000);
    cy.location("pathname", "/login");
  });

  it("should login the user then", () => {
    cy.get("#email").type("check@gmail.com");
    cy.get("#password")?.type("Asdasd123");
    cy.get("#login").click();
    cy.wait(2000);
    cy.location("pathname", "/");
  });

  it("should go the service card place and find the single card", () => {
    cy.get("#allCards");
  });

  it("should go to the check in page", () => {
    cy.get(":nth-child(1) > .px-4").click();
    cy.get("#name").type("person");
    cy.get("#adress").type("Dhaka");
    cy.get('[type="email"]').type("person@gmail.com");
    cy.get('[type="number"]').type("12345");
    cy.get("#message").type("Thank you");
    cy.get("#checkout").click();
    cy.get(".Toastify__toast-body > :nth-child(2)");
  });
});
