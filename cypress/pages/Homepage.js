class Homepage{
    websiteHomepage(){
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
    }
    websiteLoadedVerify(){
        cy.get('h1').should("contain", "CURA Healthcare Service");
    }
    
    appointmentPageVerify(){
        cy.get('h2').should("contain", "Make Appointment");
    }
    doAppointment(){
        cy.get('#combo_facility').select("Seoul CURA Healthcare Center");
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#txt_visit_date').click();
        cy.get(':nth-child(4) > :nth-child(3)').click();
        cy.get('#radio_program_medicaid').click();
        cy.get('#txt_comment').type("I am little bit worried about my condition");
        cy.get('#btn-book-appointment').click();
    }
    appointmentConfirmation(){
        cy.get('h2').should("contain", "Appointment Confirmation");
        cy.get('.lead').should("contain", "Please be informed that your appointment has been booked as following:");
    }
}

export default Homepage;