import LoginPage from "../pages/LoginPage"
import Homepage from "../pages/Homepage"

describe("Testing login functionality", ()=>{
    const loginPage = new LoginPage();
    const homepage = new Homepage();
    beforeEach(()=>{
        cy.viewport(1920,1080);
    });
    beforeEach(()=>{
        homepage.websiteHomepage();
    });
    it("Testing with invalid password", ()=>{
        loginPage.userLogin("John Doe", "notApassword");
        loginPage.invalidAssertion();
    });
    it("Testing with invalid username", ()=>{
        loginPage.userLogin("Stewart", "ThisIsNotAPassword");
        loginPage.invalidAssertion();
    });
    it("Testing with valid credentials", ()=>{
        loginPage.userLogin("John Doe", "ThisIsNotAPassword");
        loginPage.userLoginVerified();
    });
});