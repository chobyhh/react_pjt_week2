import React, { useEffect } from "react";
import './Main.css';
import Add from './Add';
import Card from './Card'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom"
import {connect, useDispatch, useSelector} from "react-redux"
import {db} from ".././firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore"
import {createWordsFB, loadWordsFB, deleteWordsFB} from ".././redux/modules/words";


function Main(){

    let state = useSelector((state)=>state.words.list);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    //console.log(state);

   React.useEffect(async()=> {
      dispatch(loadWordsFB());
        
    //     addDoc(collection(db, "pjt_week2"), {text: "new"})
        
    //     delete
    //     const docRef = doc(db, "pjt2", "AnU30JTgSRjgvdTOpRGs");
    //     deleteDoc(docRef);
        
    //     update
    //     const docRef = doc(db, "pjt2", "92pPIT0SuagA2GJk0OMo");
    //     updateDoc(docRef, {test: "사슴은 고라니"});
        
    //     add
    //     addDoc(collection(db, "pjt2"),{test: "사슴은 고라니", test: "사슴과", text: "사슴앤고라니", completed: false})
        
        // load
        // const query = await getDocs(collection(db, "pjt2"));
        // console.log(query)
        // query.forEach((doc)=>{
        //     console.log(doc.id, doc.data())
    //     })

     }, [dispatch]);

    return(
        <div>
            <div className="navbar">
                <div>Yoonictionary</div>
                <Link to="/add"><button className="btn_add">+</button></Link>
            </div> 
           <div style={{maxWidth:"1200px", height:"100vh", display:"inline-table",  margin:"auto", }}>
                {
                    state.map((e, i)=>{
                        return(
                            
                            <div  className="cards"  key={i} id={e.id}>
                                <div className="title">
                                    <p>단어</p>
                                    <div className="btn_t">  
                                        
                                    </div>  
                                </div>

                                <div className="desc">
                                    <p>단어: {e.word}</p>
                                    <p>의미: {e.mean}</p>
                                    <p style={{color: "darkblue"}}>예시: {e.exm}</p> 
                                    <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
                                        <button style={{backgroundColor:"transparent", border:"none", color:"black", fontWeight:"700", display:"flex", justifyContent: "center", alignItems:"center", position: "absolute", paddingTop:"80px"}}
                                            onClick={() => {dispatch(deleteWordsFB(e.id)); navigate("/");}}>
                                            🗑
                                        </button>    
                                    </div>       
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