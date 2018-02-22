import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
const menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true
    }, {
        name: "Quản lí Công việc",
        to: "/tasks-list",
        exact: false
    }
];
// custom link
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children = {({match}) =>{
                let active = match ? 'active': "";
                return (
                    <li className={`nav-item ${active}`}>
                        <Link className='nav-link'
                            to={to}
                        >
                            {label}
                        </Link>
                    </li>
                )
            }}
            
        />
    );
}
class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse">
                    <a className="navbar-brand">Todolist</a>
                    <ul className="navbar-nav">
                        {this.showMenu(menus)}
                    </ul>
                </div>
            </nav>
        );
    }

    showMenu = (menus) => {
        let result = null;
        if(menus.length > 0 ){
            result = menus.map( (menu, index) => {
                return <MenuLink to={menu.to}
                                activeOnlyWhenExact={menu.exact}
                                key={index}
                                label={menu.name}
                                >
                        </MenuLink>
            });
        }
        return result;
    }
}

export default Menu;
