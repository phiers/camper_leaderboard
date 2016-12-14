import React from 'react';

/* eslint-disable */

/* eslint-enable */

const TableCell = (props) => {
  const { username, img, alltime, recent, rowNo } = props;

  return (
    <tr>
      <td className="first">{rowNo}</td>
      <td><img src={img} alt="avatar" />{username}</td>
      <td className="number">{recent.toLocaleString()}</td>
      <td className="number">{alltime.toLocaleString()}</td>
    </tr>
  );
};

export default TableCell;

TableCell.propTypes = {
  username: React.PropTypes.string,
  img: React.PropTypes.string,
  alltime: React.PropTypes.number,
  recent: React.PropTypes.number,
  rowNo: React.PropTypes.number,
};
