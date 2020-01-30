import React from 'react';

class LifeCycle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            age: 16,
        }
        // 状态+属性初始化
        console.log("1. constructor")
    }

    componentWillMount() {
        console.log("2. will mount")
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                age: 18,
            })
        }, 2000)
        console.log("4. did mount")
    }

    componentWillReceiveProps() {
        console.log("5. will receive props")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("对比props", this.props, nextProps);
        console.log("对比state", this.state, nextState);
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
        const styles = {
            conclusion: {
                border: 'solid 1px red',
            }
        }
        return (<div class="wrap">
            <div style={styles.conclusion}>
            总结：
            <p>
                1. 生命周期： 
                1.1 constructor -> will mount -> render -> did mount -> will unmount
                1.2 will receive props -> should update -> will update -> render -> did update
            </p>
            <p>
                2. 组件执行顺序： 子组件 -> 父组件, 由shouldComponentUpdate更新得出结论。
            </p>
            </div>
            {this.state.status && <LifeCycle name={this.state.name}></LifeCycle>}
        </div>)
    }
}

export default TestLife;
