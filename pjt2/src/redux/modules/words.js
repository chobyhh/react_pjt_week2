// words.js

// Actions
const CREATE = 'words/CREATE';

const wordState = {
    list: [],
};

// Action Creators
export function createWords(words) {
    return { type: CREATE, words };
}

// Reducer
export default function reducer(state = wordState, action = {}) {
    switch (action.type) {
        // do reducer stuff

        case "words/CREATE" : {
            const new_word = [...state.list, action.words];
            return{list : new_word};
        }

        default: 
            return state;
    }
}