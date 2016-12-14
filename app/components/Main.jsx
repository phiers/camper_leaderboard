import React from 'react';

/* eslint-disable */
import TitleBar from 'TitleBar';
import TableMain from 'TableMain';
import TableHeader from 'TableHeader';
/* eslint-enable */

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      sortKey: 3,
      data: [
        {
          username: 'sjames1958gm',
          img: 'https://avatars.githubusercontent.com/u/4639625?v=3',
          alltime: 4531,
          recent: 547,
        },
        {
          username: 'apottr',
          img: 'https://avatars.githubusercontent.com/u/1924021?v=3',
          alltime: 1113,
          recent: 464,
        },
        {
          username: 'diomed',
          img: 'https://avatars.githubusercontent.com/u/72777?v=3',
          alltime: 1661,
          recent: 63,
        },
      ],
    };
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    this.sortTable(this.state.sortKey);
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
