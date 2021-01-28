import React from 'react'
import {Route, Switch} from 'react-router-dom'
import aboutPage from './components/about/aboutPage'
import Header from './components/common/Header'
import homePage from './components/home/homePage'
import NotFound from './components/NotFound/NotFound'


const App = () => {
    return (
        <div className="container-fluid">
        <Header />
        <Switch>
            <Route exact path="/" component={homePage}/>
            <Route path="/about" component={aboutPage}/>
            <Route component={NotFound}/>
        </Switch>
         </div>
    )
}

export default App
