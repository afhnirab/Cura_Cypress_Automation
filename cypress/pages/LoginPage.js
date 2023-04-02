class LoginPage{
    userLogin(username, password){
        cy.get('#menu-toggle > .fa').click();
        cy.get('.sidebar-nav > :nth-child(4) > a').click();
        cy.get('#txt-username').type(username);
        cy.get('#txt-password').type(password);
        cy.get('#btn-login').click();
    }
    userLoginVerified(){
        cy.get('h2').should("contain", "Make Appointment");
    }
    invalidAssertion(){
        cy.get('.text-danger').should("contain", "Login failed! Please ensure the username and password are valid.");
    }
}

export default LoginPage;