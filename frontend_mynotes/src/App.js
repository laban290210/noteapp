import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';

import { Header } from './components';
import { NotesListPage, NotePage } from './pages';

import './App.css'

function App() {
  return (
    <Router>
      <div className="w-[100%] h-[100vh] text-[#383a3f] bg-[#f3f6f9] flex items-center dark:bg-[#1f2124]  dark:text-[#d6d1d1] ">
        <div className=" w-[100%] h-[88vh] max-w-[480px] m-auto bg-[#fff] shadow-[0_1px_1px_6px_rgb(0,0,0,0.05)] relative dark:bg-[#2e3235]" >
          <Header/>
          <Routes>
          <Route path="/" exact Component={NotesListPage} />
          <Route path="/note/:id" Component={NotePage} />
          </Routes>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
