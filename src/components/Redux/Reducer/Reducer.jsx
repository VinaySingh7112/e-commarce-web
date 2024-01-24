let intialstate = 0;

let intialstate2 =0;
export let change =(state =intialstate,action)=>{
    switch (action.type){
        case "INCREMENT":return state + action.payload;
        case "DECREMENT":return state - action.payload;
        default :return state
    }
}
export let change2 =(state =intialstate2,action)=>{
    switch (action.type){
        case "INCREMENT":return state + 1;
        case "DECREMENT":return state - 1;
        default :return state
    }
}
