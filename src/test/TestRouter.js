import  React from 'react'
import {HashRouter, Link, Route, Switch, Redirect} from 'react-router-dom'
// import {HashRouter, Link, Switch, Redirect} from 'react-router-dom'
// import Route from './Route'

function Home() {
    return <div>Home</div>
}

function About() {
    return <div>about</div>
}

function Login() {
    return <div>login</div>
}

function Detail(props) {
    console.log(props)
return <div>
    <p>
        {/* 命令导航 */}
        <button onClick={props.history.goBack}>后退</button>
        {/* <button onClick={props.history.goForward}>前进</button> */}
    </p>
    <p>
        {/* match信息 */}
        当前id: {props.match.params.id}
    </p>
    <p>
        当前位置：
        {props.location.pathname}
    </p>
</div>
}

function NoMatch() {
    return <div>
        not found
    </div>
}

export default class TestRouter extends React.Component{
    render() {
        return <HashRouter>router
            <ul>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/detail/34">detail(id)</Link>
            </ul>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/detail/:id" component={Detail}></Route>
                {/* <Route component={NoMatch}></Route> */}
                <Redirect to="/home"></Redirect>
            </Switch>
        </HashRouter>
    }
}

