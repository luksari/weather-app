import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWeather } from './actions/actions'
import { RootState } from 'MyTypes';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.weather.isLoadingWeather
})
const mapDispatchToProps = {
  fetchWeather
}
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
type State = {}

class AppRaw extends Component<Props, State> {
  render() {
    const {isLoading, fetchWeather } = this.props
    return (
      <div className="App">
        <button onClick={() => fetchWeather()} disabled={isLoading}>LoadWeather</button>
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppRaw);

export default {
  App
}

