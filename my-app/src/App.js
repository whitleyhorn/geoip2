import "./App.css";
import LatLongGetter from './LatLongGetter.js';
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Get the latitude and longitude of any IP address!</p>
        <LatLongGetter />
      </header>
    </div>
  );
}
  
export default App;
