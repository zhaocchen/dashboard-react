import React, {useContext} from 'react'

const context = React.createContext()
const { Provider, Consumer } = context

function Box(prop) {
    return <div>name: {prop.name}</div>
}

function Hook(prop) {
    const obj = useContext(context)
    return <div>name: {obj.name}</div>
}

class Comp extends React.Component {
    static contextType = context
    render() {
        return <div>name: {this.context.name}</div>
    }
}

export default class TestContext extends React.Component {
    render() {
        console.log(Provider)
        return (<div>
            <h1>context-方式1</h1>
            <Provider value={{name: "Mary"}}>
                <Consumer>
                    {value => <Box {...value} />}
                </Consumer>
            </Provider>
            <h1>context-方式2</h1>
            <Provider value={{name: "Jack"}}>
                <Hook></Hook>
            </Provider>
            <h1>context-方式3</h1>
            <Provider value={{name: "Lucy"}}>
                <Comp></Comp>
            </Provider>
            
        </div>);
    }
}
