const { Router } = require("express");
const {
  renderTicketForm,
  createNewTicket,
  renderTicket,
  renderEditForm,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticket.controller");
const router = Router();

// New 
router.get("/Tickets/add", renderTicketForm);
router.post("/Tickets/new-Ticket", createNewTicket);
//Get all 
// router.get("/Tickets/:id", renderTicket);
// Edit 
router.get("/Tickets/edit/:id", renderEditForm);
router.put("/Tickets/edit-Ticket/:id",updateTicket);
// Delete 
router.delete("/Tickets/delete/:id", deleteTicket);


module.exports = router;