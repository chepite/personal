import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';

function App() {
  return (
  /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
   <div>
    <Nav></Nav>
    {/*replace div with react carousel library*/}
    <div className="flex">
    <Card text={"Tyler The Creator"}></Card>
    <Card text={"Frank Ocean"}></Card>
    </div>
    </div>
  );


}

export default App;
