import React from 'react'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import { Provider, connect } from 'react-redux'


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

const store = createStore(counterReducer, applyMiddleware(logger, thunk))

const mapStateToProps = state => {
    return {
        count: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch({type: "add"}),
        minus: () => dispatch({type: "minus"}),
        asyncAdd: () => {
            setTimeout(() => {
                dispatch({type: "add"})
            }, 1000)
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class Card extends React.Component {
    render() {
        const { count, add, minus, asyncAdd } = this.props
        // console.log(asyncAdd)
        return <div>
            <p>
                {count}
            </p>
            <button onClick={() => add()}>+</button>
            <button onClick={() => minus()}>-</button>
            <button onClick={() => asyncAdd()}>异步增加</button>
        </div>
    }
}

export default class TestReactRedux extends React.Component {
    render() {
        // console.log(store)
        return <Provider store={store}>
            <h1>redux(方式2订阅)</h1>
            <Card></Card>
        </Provider>
    }
}

// 错误写法
// connect(mapStateToProps, mapDispatchToProps)(Card)

// 复杂写法-需要占用多余变量空间
// const NewCard = connect(mapStateToProps, mapDispatchToProps)(Card)

// export default class TestReactRedux extends React.Component {
//     render() {
//         // console.log(store)
//         return <Provider store={store}>
//             <h1>redux(方式2订阅)</h1>
//             <NewCard></NewCard>
//         </Provider>
//     }
// }
