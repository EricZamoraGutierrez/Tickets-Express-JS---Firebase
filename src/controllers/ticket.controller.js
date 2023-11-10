// const ticketModel = require("../models/ticket");


const firebase = require('../firebase');

// require('./firebase');

const ticketsCtrl = {};

ticketsCtrl.renderTicketForm = (req, res) => {
  res.render("tickets/new-ticket");
};


ticketsCtrl.createNewTicket = async (req, res) => {

  const folioGenerado = Math.floor(Math.random() * 1000000000);
  const { nombre, empresa, email, tel, desc} = req.body;
  const newticket = ({ nombre, empresa, email, tel, desc, folioGenerado });
  const responseMail = ({
    to: email,
    message: {
      subject: 'Confirmación de ticket de soporte',
      html: `
      <h1>Se ha creado un ticket de soporte</h1>
      <p>El folio de su ticket es: ${folioGenerado}</p>
      <p>Por favor guarde este folio para futuras referencias</p>
      <p>En breve nos pondremos en contacto con usted</p>
      <p>Gracias por su preferencia</p>
      <h2>Detalles del ticket:</h2>
      <p>Nombre: ${nombre}</p>
      <p>Empresa: ${empresa}</p>
      <p>Email: ${email}</p>
      <p>Teléfono: ${tel}</p>
      <p>Descripción: ${desc}</p>
      <p>Fecha: ${new Date().toLocaleString()}</p>
      <p>Si desea dar seguimiento a su ticket, por favor ingrese a la siguiente liga:</p>
      <a href="http://localhost:3000/">Soporte de Tickets AlphaPYME</a>
      `
    }
  });
  const db = firebase.firestoreDb;
  console.log(folioGenerado);
  await firebase.setDoc(firebase.doc(db, "tickets", email), newticket);
  console.log(newticket);

  await firebase.setDoc(firebase.doc(db, "email", "T." + folioGenerado), responseMail);
  console.log(responseMail);
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
