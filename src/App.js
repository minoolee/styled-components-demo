
import './App.css';
import { Menu } from './components/Menu/Menu';
import { Men } from './components/Men';
import { Header } from './components/Header/Header';
import { Women } from './components/Women';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      <Menu />
      <Men />
      <Women />
      </header>
    </div>
  );
}

export default App;
