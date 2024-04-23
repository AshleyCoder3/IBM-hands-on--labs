//actions

// Action to increment the counter. Argument: amount to be increased
const increment = (val) =>{
    return{
        type: 'INCREMENT',
        inc: val
    }
}

export default increment;