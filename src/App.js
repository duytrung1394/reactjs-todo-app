import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {

    render() {
        return (
            <Router>
                <React.Fragment>
                    {/*Menu*/}
                    <Menu />
                    <div className="container main-content">
                        {this.showContent(routes)}
                    </div>
                </React.Fragment>
            </Router>
        );
    }

    showContent = (routes) => {
        let result = null;
        if(routes.length > 0){
            result = routes.map( (route, index) => {
                return <Route 
                        path={route.path}
                        exact={route.exact}
                        component={route.main} 
                        key={index}
                        />
            });
        }
        return <Switch>{result}</Switch>;
    }
}

export default App;
