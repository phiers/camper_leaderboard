import React from 'react';

/* eslint-disable */
import TableHeader from 'TableHeader';
import TableCell from 'TableCell';
/* eslint-enable */

export default class TableMain extends React.Component {
  render() {
    const data = this.props.data;

    const renderTable = () => {
      if (data.length === 0) {
        return (
          <tr>
            <td>Loading....</td>
          </tr>
        );
      }

      return data.map((cellData, index) =>
        (<TableCell key={cellData.username} {...cellData} rowNo={index + 1} />));
    };

    return (
      <tbody>
        { renderTable() }
      </tbody>
    );
  }
}

TableMain.propTypes = {
  data: React.PropTypes.array, // eslint-disable-line
};
