import React from 'react'
import { Button } from 'antd'

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
            <Button onClick={this.onLogout}>注销</Button>
        </div>
    }
}