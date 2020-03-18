import React from 'react';

export default class Weather extends React.Component {
  state = {
    data: 'data',
  };

  componentDidMount() {
    fetch('')
      .then(res => res.json())
      .then(res => {
        this.state.data = res;
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <p>test weather {data}</p>
      </div>
    );
  }
}
