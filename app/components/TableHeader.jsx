import React from 'react';

const TableHeader = (props) => {
  // pass column index to main
  const handleClick = evt => (props.sortKey(evt.target.cellIndex));
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <thead>
      <tr>
        <th className="first">#</th>
        <th>Camper Name</th>
        <th className="number" onClick={handleClick} >Points Last 30 Days</th>
        <th className="number" onClick={handleClick}>Points All-Time</th>
      </tr>
    </thead>
  );
};

export default TableHeader;

TableHeader.propTypes = {
  sortKey: React.PropTypes.func,
};
