import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';

var App = function App() {
  var isDesktop = useMediaQuery({ minWidth: 992 });
  var isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  var isMobile = useMediaQuery({ maxWidth: 767 });
  var whatIsIt = "";

  if (isDesktop) {
    whatIsIt = "desktop";
  } else if (isTablet) {
    whatIsIt = "tablet";
  } else if (isMobile) {
    whatIsIt = "mobile";
  }

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'whatIsIt'
    )
  );
};

export default App;