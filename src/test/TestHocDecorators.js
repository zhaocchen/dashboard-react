import React from 'react';

const box = Comp => {
    const age = 16;
    // const NewComp = (props) => <Comp {...props} age={age} />
    class NewComp extends React.Component {
        componentDidMount() {
            console.log('高阶处理！')
        }
        render() {
            return (<Comp {...this.props} age={age}></Comp>);
        }
    }
    return NewComp;
}

const withLog = Comp => {
    console.log('withLog',Comp.name)
    return props => <Comp {...props}></Comp>
}

@box
@withLog
class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            card:
            <p>
                名字：{this.props.name}
            </p>
            <p>
                年龄: {this.props.age}
            </p>
        </div>)
    }
}

export default class TestHocDecorators extends React.Component {
    render() {
        return (<div>
            <h1>高阶组件</h1>
            <Card name={"Mary"}/>
        </div>);
    }
}