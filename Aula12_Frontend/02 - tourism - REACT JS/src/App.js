import React from 'react';

import './style.css';

import Header from './components/header';

import Main from './pages/main';

import Routes from './routes';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}
*/

export default App;
