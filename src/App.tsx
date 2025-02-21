import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { MonthStatistics } from './pages/monthStatistics/MonthStatistics';
import { Header } from './shared/header/Header';

import './App.scss'
import { Popup } from './shared/popup/Popup';

function App() {
  return (
    <>
      <Popup/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/monthStatistics" element={<MonthStatistics />} />
      </Routes>
    </>
    
  );
}

export default App
