// import React from "react"
// import './Card.css';
// import {connect, useSelector} from "react-redux"

// function Card(){

//     let state = useSelector((state)=>state.words.list);
//     console.log(state);
  
//         return(
//             <div className="cards">                
//                 {
//                     state.map((e, i)=>{
//                         return(
             
//                             <div>

//                                 <div className="title">
//                                     <p>단어</p>
//                                 </div>

//                                 <div className="desc">
//                                     <p>단어: {state[i].word}</p>
//                                     <p>의미: {state[i].means}</p>
//                                     <p>예시: {state[i].exg}</p>
//                                 </div>  
//                             </div> 
          
//                         )
//                     })
//                 }
//                 <div className="desc">
//                     <p>단어: {state[0].word}</p>
//                     <p>의미: {state[0].means}</p>
//                     <p>예시: {state[0].exg}</p>
//                 </div>     
//             </div>
//         )


// }


// export default Card;
