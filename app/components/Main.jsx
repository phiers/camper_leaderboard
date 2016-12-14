import React from 'react';

/* eslint-disable */
import TitleBar from 'TitleBar';
import TableMain from 'TableMain';
import TableHeader from 'TableHeader';
import getData from 'camperData';
/* eslint-enable */

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      sortKey: 3,
      data: [],
    };
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    this.sortTable(this.state.sortKey);
    this.loadData();
  }

  loadData() {
    const newData = getData();
    newData.then((data) => {
      this.setState({ data });
    });
  }

  sortTable(key) {
    const data = [...this.state.data];
    if (key === 2) {
      data.sort((a, b) => b.recent - a.recent);
    } else {
      data.sort((a, b) => b.alltime - a.alltime);
    }
    this.setState({ data });
  }
  handleSort(key) {
    if (key !== this.state.sortKey) {
      // added optional callback to sortTable because
      // setState is called asynchronously
      this.setState({ sortKey: key }, this.sortTable(key));
    }
    return this.state;
  }
  render() {
    return (
      <div className="container">
        <TitleBar />
        <table>
          <TableHeader sortKey={this.handleSort} />
          <TableMain data={this.state.data} />
        </table>
      </div>
    );
  }
}
