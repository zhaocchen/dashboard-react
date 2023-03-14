import React from 'react'
import { Button } from 'antd'
import TestRouter from "@/test/TestRouter";
import TestRedux from "@/test/TestRedux";
import TestReactRedux from "@/test/TestReactRedux";

export default class Home extends React.Component {

    componentDidMount() {
        console.log(this.props);
        
    }

    onLogout = () => {
        // this.props.history.push('/login')
        window.sessionStorage.removeItem('token')
    }

    render() {
        return <div>home
            <Button>Default</Button>
            <TestRouter></TestRouter>
            <TestRedux></TestRedux>
            <TestReactRedux></TestReactRedux>
        </div>
    }
}