/// <reference types="cypress" />

describe("Login page", () => {
  const baseUrl = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.logout();
    cy.task("log", "User logged out successfully");
    cy.visit("/login");
  });

  it("should allow a user to log in with valid credentials", () => {
    cy.fixture("auth-user").then((authUser) => {
      const { email, password } = authUser;

      cy.get("input[name='email']").type(email);
      cy.get("input[name='contraseña']").type(password);
      cy.get("button[type='submit']").click();

      cy.url().should("eq", `${baseUrl}/`);
      cy.contains("Bienvenido a ViseVersa").should("exist");
    });
  });

  it("should display an error message for invalid credentials", () => {
    cy.get("input[name='email']").type("invalid@example.com");
    cy.get("input[name='contraseña']").type("invalidpassword");
    cy.get("button[type='submit']").click();

    cy.url().should("eq", `${baseUrl}/login`);
  });
});
