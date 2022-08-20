import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';


import AdminArticlesComponent from './components/admin-articles-component.js';
import CreateArticle from './components/create-articles-component.js';
import EditArticle from './components/edit-articles-component.js';

import AdminAuthorsComponent from './components/admin-author-component.js';
import CreateAuthor from './components/create-author-component.js';
import EditAuthor from './components/edit-author-component.js';
import DeleteAuthor from './components/delete-author-component.js';

import AdminImagesComponent from './components/admin-images-component.js';

// const baseUrl = "/admin";
const rootElement = document.getElementById('root');

ReactDOM.render(
 <React.StrictMode>
  <BrowserRouter>
      <Routes>

        <Route path="/admin" element={<App />}> 
          <Route path="/admin/articles" element={<AdminArticlesComponent />} />
           <Route path="/admin/articles/new" element={<CreateArticle />} > </Route>
          <Route path="/admin/articles/:id" element={<EditArticle />} />
            
            <Route path="/admin/journalists" element={<AdminAuthorsComponent />} />
            <Route path="/admin/journalists/:id" element={<EditAuthor />} />
            <Route path="/admin/journalists/new" element={<CreateAuthor />} />
            <Route path="/admin/journalists/delete/:id" element={<DeleteAuthor />} />

            <Route path="/admin/images" element={<AdminImagesComponent />} />

            </Route>

          <Route

      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
          }
         />
      </Routes>
  
  </BrowserRouter>
</React.StrictMode>,
   rootElement);





