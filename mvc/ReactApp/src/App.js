import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <main>
                <header>
                    <h1 class="admin-header">Blåatoppens dagblad ADMIN</h1>
                </header>
                <div class="article-links">
                    <nav class="navbar">
                        <Link to="/articles">Articles</Link>
                        <br />
                        <Link to="/journalists">Journalists</Link>
                        <br />
                        <Link to="/images">Images</Link>
                    </nav>
                </div>
                <Outlet />
            </main>
        );
    }
}
