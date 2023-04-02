import Homepage from "../pages/Homepage"
import LoginPage from "../pages/LoginPage"

describe("User make appointment", ()=>{
    const homepage = new Homepage();
    const loginpage = new LoginPage();
    beforeEach(()=>{
        cy.viewport(1920,1080);
    });
    before(()=>{
        homepage.websiteHomepage();
        loginpage.userLogin("John Doe", "ThisIsNotAPassword");
    });

    it("Testing the appointment functionality", ()=>{
        homepage.appointmentPageVerify();
        homepage.doAppointment();
        homepage.appointmentConfirmation();
    });
});