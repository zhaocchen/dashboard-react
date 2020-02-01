import React from 'react'
import {createStore} from 'redux'

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'add':
            return state + 1
        case 'minus':
            return state - 1
        default:
            return state
    }
}

const store = createStore(counterReducer)

export default class TestRedux extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: store.getState()
        }
        store.subscribe(() => {
            this.setState({
                count: store.getState()
            })
        })
    }
    render() {
        // console.log(store)
        return <div>
            <h1>redux(方式1订阅)</h1>
            <p> store:
                {store.getState()}
            </p>
            <p>this.state:
                {this.state.count}
            </p>
            <button onClick={() => store.dispatch({type: "add"})}>+</button>
            <button onClick={() => store.dispatch({type: "minus"})}>-</button>
        </div>
    }
}


