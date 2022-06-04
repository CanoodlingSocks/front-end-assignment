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
            let AdminArticles = response.data;
            setArticles(AdminArticles)
        });
    }, []) // <-- Fortfarande är jag osäker på varför dom tomma brackets behövs?
    
    return(
    <Fragment>
        <div class="container">
            <header className="inner-header">
                <h2>Articles</h2>
                <div class="create-btn">
                <Link to="/articles/new">Create</Link>
                </div>
            </header>

            {AdminArticles.map((AdminArticle) => {
                return (
                    <table>
                    <tr>
                    <td className="table" keys={AdminArticle.id}>{AdminArticle.title}</td>

                    <td>
                        <div>
                        <Link to={AdminArticle.id}><FaPen></FaPen></Link>
                        </div>
                    </td>
                    <td>
                        <div>
                        <FaTrash></FaTrash>
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