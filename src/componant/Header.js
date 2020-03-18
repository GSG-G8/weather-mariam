import React from 'react';

class Header extends React.Component {
  state = {
    data: 'mariam',
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <p>test header {data}</p>
      </div>
    );
  }
}

export default Header;
