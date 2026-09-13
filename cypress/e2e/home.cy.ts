/// <reference types="cypress" />

describe("Home page", () => {
  before(() => {
    cy.request("GET", "http://localhost:3000/api/seed");
    cy.fixture("auth-user").then((authUser) => {
      cy.login(authUser.email, authUser.password);
    });
    cy.task("log", "User logged in successfully");
  });

  it("should display the home page with the correct title", () => {
    cy.visit("/");
    cy.contains("Bienvenido a ViseVersa").should("exist");
  });

  it("should display the user's name on the home page", () => {
    cy.fixture("auth-user").then((authUser) => {
      cy.visit("/");
      cy.contains(authUser.email).should("exist");
    });
  });
});
