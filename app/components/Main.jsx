import React from 'react';

/* eslint-disable */
import TitleBar from 'TitleBar';
import TableMain from 'TableMain';
/* eslint-enable */

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      alltime: [
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
          recent: 463,
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <TitleBar />
        <TableMain data={this.state.alltime} />
      </div>
    );
  }
}
