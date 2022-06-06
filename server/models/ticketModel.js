import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    ticket_no: {
        type: String, 
        required: true, 
    },
    ticket_desc: {
        type: String,
        required: true,
    },

}, { timestamps: true });

export default mongoose.model("ticket", ticketSchema);