import { useState } from 'react';
import { useEffect } from 'react';
import  axios  from 'axios';
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";
import { Fragment } from "react";

const AdminAuthorsComponent = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
      axios.get("https://localhost:7208/api/authors")
      .then((response) => {
        let authors = response.data;
        setAuthors(authors)
      });
    }, [])

    return(
        <Fragment>
            <div className="container">
            <header className="inner-header">
                <h2>Authors</h2>
                <div class="create-btn">
                <Link to="/admin/authors/create">Create</Link>
                </div>
            </header>

               {authors.map((author) => {
                  return (
                   <table>
                     <tr>
                     <td keys={author.id}>{author.firstName}{author.lastName}</td>
                     <td> <button><Link to={author.id}><FaPen></FaPen></Link></button></td>
                     <td><button><FaTrash></FaTrash></button></td>
                     </tr>
                     </table> 
         )}
                
                    
       )};
 
   <Outlet />
        </div>
   </Fragment>
        
     );
 
 
 };

export default AdminAuthorsComponent;