import React from 'react'

export default class TestState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: "",
        }
    }

    handleChange = (e) => {
        const { value } = e.target 
        this.setState({
            inputText: value
        }, () => {
            console.log('handle: callback of setState ', this.state.inputText)
        })
        console.log('handle: external of setState ', this.state.inputText)
    }

    render() {
        console.log('render: ', this.state.inputText)

        return <div>
            <h1>setState回调函数。
                修改state执行： external of setState -> render -> callback of setState
            </h1>
            <input type="text" value={this.state.inputText} 
            onChange={e => this.handleChange(e) }
            />
        </div>
    }
}
