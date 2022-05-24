import logo from './logo.svg';
import './App.css';
import {Button, Input} from 'antd';
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios';
import './App.css';
import Login from "./scripts/login"
import New from "./scripts/new"
import Mio from "./scripts/mio"
import FinNew from "./scripts/finNew"
import Homepage from "./scripts/homepage"
import MyPage from "./scripts/mypage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

{
    /*
    function App() {
    const [message, setMessage]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/hello", {
          })
            .then((res)=>{
              return res.json();
            })
            .then((data)=>{
                setMessage(data);
            });
      },[]);

    return (
      <div className="App">
        <header className="App-header">
          // 기본코드
          <ul>
              {console.log(message)}
            {message.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
          </ul>
        </header>
      </div>
  );
}
    */
}

function App() {
  return(
    <>
      <Routes>
        <Route path="/KNU-DBP-Grape" exact={true} element={<Homepage />} />
        <Route path="/KNU-DBP-Grape/login" element={<Login />} />
        <Route path="/KNU-DBP-Grape/new" element={<New />} />
        <Route path="/KNU-DBP-Grape/mio" element={<Mio />} />
        <Route path="/KNU-DBP-Grape/newFin" element={< FinNew/>} />
        <Route path="/KNU-DBP-Grape/mypage" element={<MyPage/>} />
      </Routes>
    </>
  );
}

export default App;
