import React from 'react';

const PureRow = ({
  row: { busCompanyName, startDay, endDay, ticketKind, price }
}) => (
  <tr>
    <td>{busCompanyName}</td>
    <td>{startDay}</td>
    <td>{endDay}</td>
    <td>{ticketKind}</td>
    <td>{price}</td>
    <td>
      <button className="btn btn-danger">Mua vé</button>
    </td>
  </tr>
);

export default PureRow;
