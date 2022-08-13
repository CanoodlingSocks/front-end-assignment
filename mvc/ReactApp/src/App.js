import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <main>
                    <nav className="navbar">
                <div class="article-links-container">
                    <div className="article-links">
                        <Link className="btn-links" to="/admin/articles">Articles</Link>
                        <br />
                            <Link className="btn-links" to="/admin/authors">Authors</Link>
                        <br />
                            <Link className="btn-links" to="/admin/images">Images</Link>
                    </div>
                </div>
                {/* <div className="container"></div> */}
                    </nav>
                <Outlet />
            </main>
        );
    }
}
