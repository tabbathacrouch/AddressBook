/* eslint-disable no-undef */
const testContact = {
  name: "Aria",
  street: "2700 Commerce",
  city: "Dallas",
  stateName: "Texas",
  zip: 75226,
};

const testContact2 = {
  name: "Bill",
  street: "123 Main Street",
  city: "Austin",
  stateName: "Texas",
  zip: 12345,
};

const testContact3 = {
  name: "Bob",
  street: "455 Alma Street",
  city: "Phoenix",
  stateName: "Arizona",
  zip: 86524,
};

const testContact4 = {
  name: "Steve",
  street: "321 Elm Street",
  city: "Wills Point",
  stateName: "Texas",
  zip: 75169,
};

function addContact(contact) {
  cy.get("[data-testid=name]").type(contact.name);
  cy.get("[data-testid=street]").type(contact.street);
  cy.get("[data-testid=city]").type(contact.city);
  cy.get("[data-testid=stateName]").type(contact.stateName);
  cy.get("[data-testid=zip]").type(contact.zip);
  cy.get(".submit-btn").click();
  cy.get(`[data-testid=contact-${contact.name}]`).click();
}

describe("Address Form", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should add a contact", () => {
    cy.visit("http://localhost:3000/");
    addContact(testContact);

    cy.get(`[data-testid=contact-${testContact.name}-name]`).should(
      "have.text",
      testContact.name
    );
    cy.get(`[data-testid=contact-${testContact.name}-street]`).should(
      "have.text",
      testContact.street
    );
    cy.get(`[data-testid=contact-${testContact.name}-city]`).should(
      "have.text",
      testContact.city
    );
    cy.get(`[data-testid=contact-${testContact.name}-stateName]`).should(
      "have.text",
      testContact.stateName
    );
    cy.get(`[data-testid=contact-${testContact.name}-zip]`).should(
      "have.text",
      testContact.zip
    );
  });

  it("should search", () => {
    addContact(testContact2);
    addContact(testContact3);
    addContact(testContact4);

    // search by name
    cy.get(".search-input").type("B");
    cy.get(".contacts-map").children().should("have.length", 2);

    // by street
    cy.get("select").select("Street");
    cy.get(".search-input").clear().type("Commerce");
    cy.get(".contacts-map").children().click().should("have.length", 1);

    // by city
    cy.get("select").select("City");
    cy.get(".search-input").clear().type("Austin");
    cy.get(".contacts-map").children().click().should("have.length", 1);

    // by state
    cy.get("select").select("State");
    cy.get(".search-input").clear().type("Texas");
    cy.get(".contacts-map").children().should("have.length", 3);

    // by zip
    cy.get("select").select("Zip");
    cy.get(".search-input").clear().type("75169");
    cy.get(".contacts-map").children().click().should("have.length", 1);
  });
});
