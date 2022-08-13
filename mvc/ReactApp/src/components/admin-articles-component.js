import { Outlet } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPen,FaTrash } from "react-icons/fa";
import  axios  from "axios";

const AdminArticlesComponent = () => {
    const [AdminArticles, setArticles] = useState([]);

    //Axios can eat my butt
    //https://localhost:7208/api/articles <-- BRUH det gick inte att bara skriva localhost:7208, man måste ha med https: delen oxå 

    useEffect(() =>{
        axios.get("https://localhost:7208/api/articles").then((response) => { 
            // console.log(response.data)    
        let AdminArticles = response.data;
            setArticles(AdminArticles)
        });
    }, []) // <-- Fortfarande är jag osäker på varför dom tomma brackets behövs?
    
    return(
    <Fragment>
        <div className="container">
            <header className="inner-header">
                <h2>Articles</h2>
                <div class="create-btn">
                <Link class="create-btn-link" to="/admin/articles/create">Create</Link>
                </div>
            </header>
                <hr></hr>

            {AdminArticles.map((AdminArticle) => {
                return (
                    <table>
                    <tr>
                        <div className="table-container">

                    <td className="content" keys={AdminArticle.id}>{AdminArticle.title}</td>
                        </div>

                    <td>
                        <div>
                        <Link to={`/admin/articles/${AdminArticle.id}`}><FaPen className="icons"></FaPen></Link>
                        </div>
                    </td>
                    <td>
                        <div>
                        <FaTrash className="icons" />
                        </div>
                    </td>
                    </tr>
                    </table>
                )}
            )}
        <Outlet />
        </div>
        </Fragment>
    );
};

export default AdminArticlesComponent;