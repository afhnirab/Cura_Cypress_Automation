import Homepage from "../pages/Homepage"

describe("Go to the website", ()=>{
    const homepage = new Homepage();
    beforeEach(()=>{
        cy.viewport(1920,1080);
    });
    it("Visit the website", ()=>{
        homepage.websiteHomepage();
        homepage.websiteLoadedVerify();
    });
});