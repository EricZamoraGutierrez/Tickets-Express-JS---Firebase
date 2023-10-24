// const ticketModel = require("../models/ticket");


const firebase = require('../firebase');

// require('./firebase');

const ticketsCtrl = {};

ticketsCtrl.renderTicketForm = (req, res) => {
  res.render("tickets/new-ticket");
};


ticketsCtrl.createNewTicket = async (req, res) => {
  const { nombre, email, desc } = req.body;
  const newticket = ({ nombre, email, desc });
  const db = firebase.firestoreDb;
 
  await firebase.setDoc(firebase.doc(db, "tickets", email), newticket);
  console.log(newticket);
  res.redirect("/");
};

// ticketsCtrl.renderticket = async (req, res) => {
//     const tickets = await ticketModel.find();
//     res.render("ticket", { tickets });
// };

// ticketsCtrl.renderEditForm = async (req, res) => {
//     const ticket = await ticketModel.findById(req.params.id); 
//     res.render("tickets/edit-ticket", { ticket }); 
// };

// ticketsCtrl.updateticket = async (req, res) => {
//   const {  nombre, rfc, direccion } = req.body;
//   await ticketModel.findByIdAndUpdate(req.params.id, { nombre, rfc, direccion });
//   res.redirect("/tickets");
// };
// ticketsCtrl.deleteticket = async (req, res) => {
//   const tickets = await ticketModel.findByIdAndDelete(req.params.id);
//   res.redirect("/tickets");
// };

module.exports = ticketsCtrl;
