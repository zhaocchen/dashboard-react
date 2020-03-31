// 路由拦截， 另名berforeRoute
import React from 'react'
import { Route as OriginRoute, Redirect } from 'react-router-dom'

function Route({ component: Comp, isLogin, ...rest }) {
    console.log('isLogin', isLogin)
    return <OriginRoute 
        {...rest}
        render={props => 
            isLogin ? <Comp /> : <Redirect to={{
                pathname: '/login',
                state: {
                    redirect: props.location.pathname
                }
            }}/>
        }
    ></OriginRoute>
}

export default Route