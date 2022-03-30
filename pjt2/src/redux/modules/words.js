// words.js
import {db} from "../../firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore" 
import { async } from "@firebase/util";


// Actions type
const LOAD = 'words/LOAD';
const CREATE = 'words/CREATE';
// const UPDATE = 'words/UPDATE';
const DELETE = "words/DELETE";

const wordState = {
    list: [],
};

// Action Creators
export function loadWords(words_list) {
    return { type: LOAD, words_list };
}
export function createWords(words) {
    return { type: CREATE, words };
}
// export function updateWords(words_index) {
//     return { type: UPDATE, words_index };
// }
export function deleteWords(words_index) {
    return { type: DELETE, words_index };
}

// middlewares
export const loadWordsFB = ()=>{
    return async function (dispatch){
        const words_data = await getDocs(collection(db, "pjt2"));
        //console.log(words_data)

        let words_list = [];
        words_data.forEach((words)=>{
            //console.log(words.data)
            words_list.push({id:words.id,...words.data()})
        });
        //console.log(words_list)

        dispatch(loadWords(words_list));
    }
}

export const createWordsFB =(words) =>{
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "pjt2"), words);
        const words_data = {id: docRef.id, ...words.data()};
        console.log((await getDoc(docRef)).id, (await getDoc(docRef)).data());
        dispatch(createWords(words_data))
    }
}

// export const updateWordsFB = (words, words_id) => {
//     return async function (dispatch, getState) {
//       console.log(words_id);
//       const docRef = doc(db, "pjt2", words_id);
//       await updateDoc(docRef);
      
//       const _words_list = getState().words.list;
//       const words_index = _words_list.findIndex((b) => {
//         return b.id === words_id;
//       });
//       dispatch(updateWords(words_index));
//     };
// };

export const deleteWordsFB = (words_id) => {
    return async function (dispatch, getState) {
      console.log(words_id);
      const docRef = doc(db, "pjt2", words_id);
      await deleteDoc(docRef);
      
      const _words_list = getState().words.list;
      const words_index = _words_list.findIndex((b) => {
        return b.id === words_id;
      });
      dispatch(deleteWords(words_index));
    };
  };


// Reducer
export default function reducer(state = wordState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "words/LOAD":{
            return {list : action.words_list};
        }
        case "words/CREATE" : {
            const new_word = [...state.list, action.words];
            return{list : new_word};
        }
        case "words/DELETE": {
            const del_word = state.list.filter((list, idx) => {
              return parseInt(action.words_index) !== idx;
            });
            return {...state, list: del_word, };
        }

        default: 
            return state;
    }
}