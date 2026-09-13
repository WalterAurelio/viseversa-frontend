/// <reference types="cypress" />

describe("Signup page", () => {
  afterEach(() => {
    cy.request("DELETE", "http://localhost:3000/api/auth", { email: "lorem.ipsum@example.com" }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  const baseUrl = Cypress.config("baseUrl");

  it("should allow a user to sign up with valid credentials", () => {
    cy.fixture("signup-user").then((user) => {
      cy.visit("/signup");

      cy.get("input[name='email']").type(user.email);
      cy.get("input[name='contraseña']").type(user.password);
      cy.get("input[name='nombre']").type(user.firstName);
      cy.get("input[name='apellido']").type(user.lastName);
      cy.get("input[name='nombreUsuario']").type(user.username);
      cy.get("button[type='submit']").click();

      cy.url().should("eq", `${baseUrl}/`);
      cy.contains("Bienvenido a ViseVersa").should("exist");
    });
  });
});
