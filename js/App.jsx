import React from 'react';
import { render } from 'react-dom';
import Landing from './Landing';

const renderApp = () => {
  render(<Landing />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./Landing', () => {
    renderApp();
  });
}
