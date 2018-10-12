import React, { Component, createContext } from 'react';
import Context from './Context';

class Provider extends Component {
  state = {
    aThing: false,
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={{
        state: this.state,
      }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export default Provider;
