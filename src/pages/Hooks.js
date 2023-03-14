import React from 'react'
import { Button } from 'antd'
import TodoList from '@/components/TodoList/index.jsx'

export default class Home extends React.Component {

    componentDidMount() {
        console.log(this.props);
        
    }

    onLogout = () => {
        // this.props.history.push('/login')
        window.sessionStorage.removeItem('token')
    }

    render() {
        return <div>hooks
            <TodoList />
        </div>
    }
}