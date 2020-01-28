import React from 'react';

class LifeCycle extends React.Component{
    constructor(props) {
        super(props);
        // 状态+属性初始化
        console.log("1. constructor")
    }

    componentWillMount() {
        console.log("2. will mount")
    }

    componentDidMount() {
        console.log("4. did mount")
    }

    componentWillReceiveProps() {
        console.log("5. will receive props")
    }

    shouldComponentUpdate() {
        console.log("6. should update")
        return true;
    }

    componentWillUpdate() {
        console.log("7. will update")
    }

    componentDidUpdate() {
        console.log("8. did update")
    }

    componentWillUnmount() {
        console.log("9. will unmount")
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        console.log("3. render")
        return (<div>测试生命周期， 在控制台查看</div>)
    }
}

class TestLife extends React.Component{
    state = {
        name: "jack",
        status: true,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Mary",
            })
        }, 2000)
        setTimeout(() => {
            this.setState({
                status: false,
            })
        }, 5000)
    }
    render() {
        return (<div class="wrap">
            {this.state.status && <LifeCycle name={this.state.name}></LifeCycle>}
        </div>)
    }
}

export default TestLife;
