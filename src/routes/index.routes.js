const { Router } = require("express");
const { renderIndex, renderAdmin, renderSignin, renderSignup } = require("../controllers/index.controllers");
const router = Router();
const session = require("express-session");


const {
  createNewTicket,
  renderTicket,
  findByID,
  AdminfindByID,
  AdminResponse
} = require("../controllers/ticket.controller");
const {createNewUser, loginUser} = require('../controllers/auth.controller');

router.get("/", renderIndex);
router.get("/admin",(request, response, next)=>{
  if(true){
    next();
  }else{
    response.redirect("/signin");
  }
}, renderAdmin);
router.get("/signin", renderSignin);
router.get("/signup", renderSignup);

//new
router.post("/Tickets/new-Ticket", createNewTicket);
//Find  by id
router.get("/Tickets/:id", findByID);

//new User
router.post("/auth/signup", createNewUser);
router.post("/auth/signin", loginUser);

//Admin open ticket
router.get("/Tickets/open/:Id", AdminfindByID );

//Admin Reponse ticket
router.post("/admin/response/:email", AdminResponse );

module.exports = router;
