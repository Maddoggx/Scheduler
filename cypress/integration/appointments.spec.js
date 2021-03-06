describe("Appointments", () => {

  beforeEach(() => {
    
    cy.visit("/");
    
    cy.contains("Monday");
    cy.request("GET", "/api/debug/reset");

  });

  //book an interview
  it("should book an interview", () => {
   cy.get("[alt=Add]")
    .first()
    .click();
   cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");
   cy.get('[alt="Sylvia Palmer"]').click();
   cy.contains("Save").click();
   cy.contains(".appointment__card--show", "Lydia Miller-Jones");
   cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  //edit an interview
  it("should edit an interview", () => {
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });
    cy.get("[data-testid=student-name-input]").clear().type("Lydia Miller-Jones");
    cy.get("[alt='Tori Malcolm']").click();
    cy.contains("Save").click();
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  //cancel an interview
  it("should cancel an interview", () => {
    cy.get("[alt=Delete]")
      .click({ force: true });
    cy.contains("Confirm").click()
    cy.contains("Deleting").should("exist")
    cy.contains("DELETING").should("not.exist");
    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
  });

 }); 

