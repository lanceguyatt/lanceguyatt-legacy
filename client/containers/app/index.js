import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <div className="u-h100">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: '',
};

export default App;
