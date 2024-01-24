export let incnumber2 = (num) =>{
    return {
        type:"INCREMENT",
        payload:num
    }
}

export let decnumber = (num) =>{
    return {
        type:"DECREMENT",
        payload:num
    }
}