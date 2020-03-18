import React from 'react';
import Weather from './componant/Weather';

class App extends React.Component {
  state = {
    city: '',
  };

  changeCity = c => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ city: c });
  };

  render() {
    const { city } = this.state;
    return (
      <div className="container">
        <input
          type="text"
          name="search"
          value={city}
          onChange={e => this.changeCity(e.target.value)}
          className="search-input"
          placeholder="search for weather"
        />
        <Weather city={city} />
      </div>
    );
  }
}

export default App;
