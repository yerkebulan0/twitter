import './App.css';
import Home from './components/HomeComponent';
import Rightside from './components/RightSideMenu/rightside';
import SideMenu from './components/SideMenuComponent';

function App() {
  return (
    <div className="App d-flex flex-row">
      <SideMenu/>
      <div className='vertical-divider'></div>
      <Home/>
      <div className='vertical-divider'></div>
      <Rightside/>
    </div>
  );
}

export default App;
