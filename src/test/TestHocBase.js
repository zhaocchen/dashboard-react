import React from 'react';

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

// const NewCard = box(Card);
const NewCard = box(withLog(Card));

export default class TestHocBase extends React.Component {
    render() {
        return (<div>
            <h1>高阶组件</h1>
            <NewCard name={"Mary"}/>
        </div>);
    }
}