import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';


import AdminArticlesComponent from './components/admin-articles-component.js';
import AdminAuthorsComponent from './components/admin-author-component.js';
import AdminImagesComponent from './components/admin-images-component.js';
import CreateArticle from './components/create-articles-component.js';
import EditArticle from './components/edit-articles-component.js';

// const baseUrl = "/admin";
const rootElement = document.getElementById('root');

ReactDOM.render(
 <React.StrictMode>
  <BrowserRouter>
      <Routes>

        <Route path="/admin" element={<App />}> 
          <Route path="/admin/articles" element={<AdminArticlesComponent />} />
           <Route path="/admin/articles/create" element={<CreateArticle />} > </Route>
          <Route path="/admin/articles/:id" element={<EditArticle />} />
            
            <Route path="/admin/authors" element={<AdminAuthorsComponent />} />
            
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





