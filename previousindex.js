const express = require('express');
const app = express();
const db = require('./src/firebase');

app.use(express.json());

app.listen(4000, () => {
    console.log('Server running on port 4000');
});

//create a ticket
app.post('/create', async (req, res) => {
    const { name, date, description } = req.body;

    const newTicket = {
        name,
        description,
        date
    };

    const TicketRef = db.db.collection('tickets');
    await TicketRef.add(newTicket);

    res.json({msg: 'Ticket created', newTicket});
    
});