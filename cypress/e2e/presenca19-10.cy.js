/// <reference types="cypress"/>

function registerUser() {
  const timestamp = new Date().toISOString();
  const name = "user" + timestamp;
  const password = "password" + timestamp;

  cy.visit(
    "https://globalsqa.com/angularJs-protractor/registration-login-example/#/register"
  );

  cy.get("#firstName").type(name);
  cy.get("#Text1").type(name);
  cy.get("#username").type(name);
  cy.get("#password").type(password);
  cy.get(".btn-primary").click();
  cy.get(".ng-binding").should("have.text", "Registration successful");

  return { name, password };
}

describe("Testando site GlobalSQA", () => {
  it("Deveria ser possível fazer o registro de um usuário", () => {
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get(".btn-link").click();

    cy.get("#firstName").type("Avner");
    cy.get("#Text1").type("José");
    cy.get("#username").type("avnerjose");
    cy.get("#password").type("avnerjose123");
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("have.text", "Registration successful");
  });

  it("Deveria ser possível fazer login de um usuário", () => {
    const { name, password } = registerUser();

    cy.wait(1000);
    cy.get("#username").type(name);
    cy.get("#password").type(password);
    cy.get(".btn-primary").click();
    cy.get("h1.ng-binding").should("contain.text", name);
  });

  it("Não deveria ser possível fazer login com um usuário que não existe", () => {
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );

    cy.get("#username").type("avner");
    cy.get("#password").type("avnerjose123");
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should(
      "have.text",
      "Username or password is incorrect"
    );
  });
});
