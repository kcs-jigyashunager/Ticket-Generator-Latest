import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delTickets, getTickets } from '../../redux/actions/ticketAction';
import ModalForm from '../Modal';
import "../Tickets/ticket.css";
import ReactPaginate from "react-paginate";
import moment from "moment";

function Tickets() {

    const dispatch = useDispatch();

    let Data = useSelector(state => state.getTicket.ticket)

    const [pageNumber, setPageNumber] = useState(0)
    const ticketPerPage = 10
    const ticketNumbers = pageNumber * ticketPerPage
    const displayUsers = Data?.slice(ticketNumbers, ticketNumbers + ticketPerPage)

    useEffect(() => {
      dispatch(getTickets())
    
    },[]);

    if (Data === undefined){
      Data = []
    };
    
    const pageCount = Math.ceil(Data?.length / ticketPerPage);

    const changePage = ({selected}) => {
      setPageNumber(selected)
    };

    const delTicket = (data) => {
      dispatch(delTickets(data._id)) 
    }
    

  return (
   
    <>
    <ModalForm />
      <table id="customers">
         <tr>
          <th>Ticket Number</th>
          <th>Ticket Description</th>
          <th>Date</th>
          <th> User Action </th>
         </tr>
    
        {displayUsers && displayUsers.map((data)=>{
          return (
             
         <tr key={data._id}>
            <td>{data.ticket_no}</td>
            <td>{data.ticket_desc}</td>
            <td>{moment(data.createdAt).format('MM/DD/YYYY')}</td>
            <td><button className='delete' onClick={()=>{delTicket(data)}}> Delete </button></td>
         </tr>
        )
    })}
    </table>
    <div>
    <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
    </>
  )
}

export default Tickets;