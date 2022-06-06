import Ticket from "../models/ticketModel.js";
import { validationResult } from "express-validator";

// Get Tickets
export const getTickets = async (req, res) => {
    
    try {
        const tickets = await Ticket.find().sort({ createdAt: -1 })
        res.json(tickets);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");  
    };
    
};

// Add new Ticket
export const newTicket = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };

    const { ticket_no, ticket_desc } = req.body;
    
    try {
        const NewTicket = new Ticket({
            ticket_no,
            ticket_desc
        });

        const ticket = await NewTicket.save();

        res.json(ticket);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    };

};

// Update User
export const updateTicket = async (req, res) => {

    const { ticket_no, ticket_desc } = req.body;

    // build ticket object
    const ticketFields = {};
    if(ticket_no) ticketFields.ticket_no = ticket_no;
    if(ticket_desc) ticketFields.ticket_desc = ticket_desc;

    try {
        let ticket = await Ticket.findById(req.params.id);

        if(!ticket) return res.status(404).json({ msg: "Ticket not found" });

        // Make sure user own ticket
        if(ticket._id.toString() !== req.params.id) {
            return res.status(401).json({ msg: "Not authorized" });
        };

        ticket = await Ticket.findByIdAndUpdate(req.params.id, 
            { $set: ticketFields },
            { new: true });

            res.json(ticket);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")        
    };

};

// Delete Ticket
export const deleteTicket = async (req, res) => {

    try {
        let ticket = await Ticket.findById(req.params.id);

        if(!ticket) return res.status(404).json({ msg: "Ticket not found" });

        // Make sure user own ticket
        if(ticket._id.toString() !== req.params.id) {
            return res.status(401).json({ msg: "Not authorized" });
        };

        ticket = await Ticket.findByIdAndRemove(req.params.id);

        res.json({ msg: "Ticket Removed"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")        
    };
}