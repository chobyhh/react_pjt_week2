import React from "react";
import './Main.css';
import Add from './Add';
import Card from './Card'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {connect, useSelector} from "react-redux"



function Main(){

    let state = useSelector((state)=>state.words.list);
    console.log(state);

    return(
        <div>
            <div className="navbar">
                <div>Yoonictionary</div>
                <Link to="/add"><button className="btn_add">+</button></Link>
            </div> 
            <div className="row">
                {
                    state.map((e, i)=>{
                        return(
                
                            <div className="cards">
                                <div className="title">
                                    <p>단어</p>
                                </div>

                                <div className="desc">
                                    <p>단어: {state[i].word}</p>
                                    <p>의미: {state[i].means}</p>
                                    <p>예시: {state[i].exg}</p>
                                </div>  
                            </div> 
            
                        )
                    })
                }       
            </div>

        </div> 
    );
}


export default Main;