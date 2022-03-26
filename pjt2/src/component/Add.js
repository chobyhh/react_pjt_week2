import React, { useRef, useState } from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './Add.css';
import {useDispatch} from "react-redux";
import {createWords} from ".././redux/modules/words"




function Add(){

    const text = useRef(null);

    const dispatch = useDispatch();

    const addBucketList = () => {
        dispatch(createWords(text.current.value));
    }


    return(
        <div>
           <div className="navbar">
                <div>Yoonictionary</div>
            </div> 
            <div className="add">
                            <div className="c_title">
                    <h6 >단어 추가 </h6>
                    <Link to="/"><button className="btn_x">✖</button></Link>
                </div>
                <div >
                    <p style={{margin:"10px"}}> 
                        <span style={{backgroundColor:"black"}}> 단어 </span> 
                        <input type="text" ref={text}
                        placeholder="단어를 입력해주세요" 
                        style={{height:"40px", width:"100%"}} ></input>
                    </p> 
                </div>
                <div >
                    <p style={{margin:"10px"}}> 
                        <span style={{backgroundColor:"black"}}> 의미 </span> 
                        <input type="text" ref={text}
                        placeholder="의미를 입력해주세요" 
                        style={{height:"100px", width:"100%"} } ></input>
                    </p>            
                </div>
                <div >
                    <p style={{margin:"10px"}}> 
                        <span style={{backgroundColor:"black"}}> 예시 </span> 
                        <input type="text" ref={text}
                        placeholder="예시를 입력해주세요" 
                        style={{height:"100px", width:"100%"}} ></input>
                    </p>
                </div>
                <Link to="/">
                <button style={{display: "flex", marginLeft:"auto", marginRight:"auto" }}
                onClick={addBucketList}>
                    💾
                </button>
                </Link>
            </div> 
        </div>
        
    )
}


export default Add;