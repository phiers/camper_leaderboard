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
        (<TableCell key={index} {...cellData} rowNo={index + 1} />));
    };

    return (
      <table>
        <TableHeader />
        <tbody>
          { renderTable() }
        </tbody>
      </table>
    );
  }
}

TableMain.propTypes = {
  data: React.PropTypes.array, // eslint-disable-line
};