import { Outlet } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPen,FaTrashAlt } from "react-icons/fa";
import  axios  from "axios";

const AdminArticlesComponent = () => {
    const [AdminArticles, setArticles] = useState([]);

    useEffect(() =>{
        axios.get("https://localhost:7208/api/articles").then((response) => { 
            // console.log(response.data)    
        let AdminArticles = response.data;
            setArticles(AdminArticles)
        });
    }, [])
    
    return(
    <Fragment>
        <div className="container">
            <header className="inner-header">
                <h2>Artiklar</h2>
                <div class="create-btn">
                <Link class="create-btn-link" to="/admin/articles/new">Skapa</Link>
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

                        <div className="move">
                        <Link to={`/admin/articles/${AdminArticle.id}`}><FaPen className="icons"></FaPen></Link>
                        </div>
                        
                    </td>
                    <td>
                        <div className="move-2">
                        <FaTrashAlt className="icons" />
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