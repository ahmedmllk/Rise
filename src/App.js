import './App.css';
import CalenderPage from './components/Calendar/CalenderPage';
import Home from './components/HomePage/Home';
import Main from './components/MainPage/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainProfile from './components/Profile/MainProfile';
import MainForum from './components/Forum/MainForum';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Forum' element={<MainForum/>}/>
        <Route path='/Profile' element={<MainProfile/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
