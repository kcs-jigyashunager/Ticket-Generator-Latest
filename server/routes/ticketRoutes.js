import express  from "express";
const router = express.Router();
import { auth } from "../middleware/auth.js";
import { getTickets, newTicket, updateTicket, deleteTicket } from "../controllers/ticketController.js";
import { check } from "express-validator";


router.get("/tickets", getTickets);
router.post("/newTicket",auth, [
    check('ticket_no', "Ticket Number is required")
    .not()
    .isEmpty()
], newTicket);
router.put("/ticket/:id", auth, updateTicket);
router.delete("/ticket/:id", auth, deleteTicket)

export default router;