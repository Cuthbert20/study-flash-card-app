import React from 'react';
import './App.css';
import routes from './routes'
import { withRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      {routes}
    </div>
  );
}

export default withRouter(App);
