import React from "react";
import './Main.css';
import Add from './Add';
import Card from './Card'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom"
import {connect, useDispatch, useSelector} from "react-redux"



function Main(){

    let state = useSelector((state)=>state.words.list);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    console.log(state);

    return(
        <div>
            <div className="navbar">
                <div>Yoonictionary</div>
                <Link to="/add"><button className="btn_add">+</button></Link>
            </div> 
           
                {
                    state.map((e, i)=>{
                        return(
                
                            <div className="cards" key={i}>
                                <div className="title">
                                    <p>단어</p>     
                                </div>

                                <div className="desc">
                                    <p>단어: {state[i].word}</p>
                                    <p>의미: {state[i].mean}</p>
                                    <p style={{color: "darkblue"}}>예시: {state[i].exm}</p> 
                                    <button className="btn_del">
                                        🗑
                                    </button>
                
                                </div>  
                            </div> 
            
                        )
                    })
                }       


        </div> 
    );
}


export default Main;