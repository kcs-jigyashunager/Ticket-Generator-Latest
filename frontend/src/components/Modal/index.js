import React, { useState } from 'react';
import Modal from "react-modal";
import "./modal.css";
import { useDispatch } from "react-redux"
import { newTicket } from '../../redux/actions/ticketAction';

Modal.setAppElement('#root');

function ModalForm() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [ticket, setTicket] = useState({ ticket_no: "", ticket_desc: ""});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTicket({ ...ticket, [e.target.name] : e.target.value})

    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(newTicket(ticket))
        setTicket({ ticket_no: "", ticket_desc: ""})
        setModalIsOpen(false)
    };

    

    const style = {
        content: {
          border: '0',
          borderRadius: '4px',
          bottom: 'auto',
          left: '50%',
          position: 'fixed',
          right: 'auto',
          transform: 'translate(-50%)', 
          width: '50%',
        }
      };
    

  return (
    <div className='ModalForm'>
        <button className='openbutton' onClick={() => setModalIsOpen(true)}> Create Ticket </button>
        <Modal style={style} isOpen = {modalIsOpen} onRequestClose={() => setModalIsOpen( false )}>
            
      <form className='form-login' onSubmit={onSubmit}> 
        <div className='form-inner'>
          <h2>Create Ticket</h2>

          <div className='form-group'>
            <label htmlFor='text'>Ticket Number:</label>
            <p className='para' style={{ "fontSize": "10px", "fontFamily": "sans-serif"}}> Please Enter Numbers Only</p>
            <input type="text" name="ticket_no" pattern="[0-9]*" id="ticket_no" value={ticket.ticket_no} onChange={handleChange }/>
            <br/>
          </div>

          <div className='form-group'>
            <label htmlFor='description'>Ticket Description:</label>
            <input type="text" name="ticket_desc" id="ticket_desc" value={ticket.ticket_desc} onChange={handleChange}/>
          </div> 

            <input className='submit' type="submit" value="SUBMIT" />
        </div>
      </form>

            <div>
                <button className='closebutton' onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
        </Modal>
    </div>
  )
}

export default ModalForm;