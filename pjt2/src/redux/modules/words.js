// words.js

// Actions
const CREATE = 'my-app/words/CREATE';

const wordState = {
    list: [
        { id : 1, word : "고라니", means : "사슴목 고라니과 동물", exg : "고라니 울음소리"},
        { id : 2, word : "e", means : "사슴목ee 고라니과 동물", exg : "eeedfe"}
    ]
}

// Action Creators
export function createWords(words) {
return { type: CREATE, words };
}

// Reducer
export default function reducer(state = wordState, action = {}) {
switch (action.type) {
// do reducer stuff

case "words/CREATE" : {
    const new_word = [...state.list, action.words]
    return{list : new_word};
}

default: return state;
}
}