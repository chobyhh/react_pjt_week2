import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Main from './component/Main'
import Add from './component/Add';
import AddCard from './component/Card'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {db} from "./firebase";
import { collection, getDoc, getDocs} from "firebase/firestore";
import {createWords, loadWordsFB} from "./redux/modules/words";
import { useDispatch } from "react-redux";


function App() {


  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadWordsFB());
  }, [dispatch]);

  return (
    
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
