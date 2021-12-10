import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './registerServiceWorker';

window.renderSmartux = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountSmartux = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
