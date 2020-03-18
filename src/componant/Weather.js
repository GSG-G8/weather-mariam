import React from 'react';

export default class Weather extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    data: [],
  };

  componentDidUpdate(prevProps) {
    const { city } = this.props;
    if (city !== prevProps.city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=795a73f80e1447a92a70669a7c739689&units=metric`
      )
        .then(res => res.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            data: result.main,
          });
        })
        .catch(error => {
          this.setState({
            isLoaded: true,
            error,
          });
        });
    }
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div className="content">Error: {error.message}</div>;
    }
    if (!isLoaded || this.props.city === '') {
      return <div />;
    }
    if (!data) {
      return <div className="content">city not found...</div>;
    }
    return (
      <div className="content">
        <p> {this.props.city.toUpperCase()}</p>
        <p>temp : {data.temp} °C </p>
        <p> min temp :{data.temp_min} °C</p>
        <p>max temp :{data.temp_max} °C</p>
      </div>
    );
  }
}
