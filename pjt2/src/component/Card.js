// import React, { useRef, useState } from "react"
// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
// import './Add.css';
// import {useDispatch} from "react-redux";
// import {createWords, loadWordsFB, createWordsFB, updateWordsFB} from ".././redux/modules/words";
// import {useNavigate} from "react-router-dom";
// import {db} from ".././firebase";





// function Update(){


//     const word = useRef(null);
//     const mean = useRef(null);
//     const exm = useRef(null);

//     const dispatch = useDispatch();
//     let navigate = useNavigate();



//     const createWords = () => {
//         dispatch(updateWordsFB({
//             word: word.current.value,
//             mean: mean.current.value,
//             exm: exm.current.value
//         }
//             ));
//         navigate('/');
//     }


//     return(
//         <div>
//            <div className="navbar">
//                 <div>Yoonictionary</div>
//             </div> 
//             <div className="add">
//                             <div className="c_title">
//                     <h6 >단어 수정 </h6>
//                     <Link to="/"><button className="btn_x">✖</button></Link>
//                 </div>
//                 <div >
//                     <p style={{margin:"10px"}}> 
//                         <span style={{backgroundColor:"black"}}> 단어 </span> 
//                         <input type="text" ref={word}
//                         placeholder="단어를 입력해주세요" 
//                         style={{height:"40px", width:"100%"}} ></input>
//                     </p> 
//                 </div>
//                 <div >
//                     <p style={{margin:"10px"}}> 
//                         <span style={{backgroundColor:"black"}}> 의미 </span> 
//                         <input type="text" ref={mean}
//                         placeholder="의미를 입력해주세요" 
//                         style={{height:"100px", width:"100%"} } ></input>
//                     </p>            
//                 </div>
//                 <div >
//                     <p style={{margin:"10px"}}> 
//                         <span style={{backgroundColor:"black"}}> 예시 </span> 
//                         <input type="text" ref={exm}
//                         placeholder="예시를 입력해주세요" 
//                         style={{height:"100px", width:"100%"}} ></input>
//                     </p>
//                 </div>
//                 <Link to="/">
//                 <button style={{display: "flex", marginLeft:"auto", marginRight:"auto" }}
//                 onClick={createWords}>
//                     💾
//                 </button>
//                 </Link>
//             </div> 
//         </div>
        
//     )
// }


// export default Update;