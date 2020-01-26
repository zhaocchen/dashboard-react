import React from 'react';
import logo from './assets/img/logo.jpg';
import './assets/css/App.css';
import { Route  } from 'react-router';
import page1 from './pages/page1';
// import routers from './router';

function App() {
  return (
    <div className="App">
      哈哈
      {/* <Switch>
                  {
                      routers.map((route,index) => {
                          return(
                              <Route 
                              key={index}
                              path={route.path}
                              exact={route.exact}
                              component={route.component}/>
                          )
                      })
                  }
          </Switch> */}
        {/* <Route path="/page1" component={page1}/> */}
    </div>
  );
}

export default App;
