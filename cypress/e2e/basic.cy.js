describe("cheeck on user from USA  updates the tax info", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.viewport(320, 480);
	});
	it("success case", () => {
		cy.get('[data-cy="username"]').type("hussain");
		cy.get('[data-cy="country"]').type("canada");
		cy.get('[data-cy="taxInfo"]').type("1234567abd-ww");
		cy.get('[data-cy="submit_tax_info"]').click();
		cy.contains("successfully updated");
	});
	it("failure case", () => {
		cy.get('[data-cy="username"]').type("hussain");
		cy.get('[data-cy="country"]').type("canada");
		cy.get('[data-cy="taxInfo"]').type("1234567980");
		cy.get('[data-cy="submit_tax_info"]').click();
		cy.get('[data-cy="client_side_error_taxInfo"]')
			.its("length")
			.should("be.gte", 1);
	});
});
