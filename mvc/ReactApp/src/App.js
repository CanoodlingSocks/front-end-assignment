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
                            <Link className="btn-links" to="/admin/articles">Artiklar</Link>
                            <br />
                            <Link className="btn-links" to="/admin/journalists">Journalister</Link>
                            <br />
                            <Link className="btn-links" to="/admin/images">Bilder</Link>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </main>
        );
    }
}

