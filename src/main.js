/* main javascript */

// (2)
const reducer = () => {
    console.log('reducer');
    return {store: 'store info'};
}

// (1)
const store = Redux.createStore(reducer, {
    tasks: []
})

// (3)
store.subscribe(() => {
    document.getElementById('status').innerHTML = 'status';
})

store.dispatch({
    addTodo: () => {
        console.log("store's state?")
    }
})
