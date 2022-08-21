import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const DeleteAuthor = () => {
    let params = useParams();
    let id = params.id;
   

        // Vet inte varför en enkel axios.delete strular så mycket för
        // mig, jag svär att axios är ute efter mig

        

    const [status, setStatus] = useState("Författaren är raderad");

    // const [errorMsg, setErrorMsg] = useState("")



    // const client = axios.create({
    //     baseURL: "https://localhost:7208/api/authors/"
    //   });

    // const [posts, setPosts] = useState({});

    // const deletePost = (authorId) => {
    //         client.delete(`${authorId}`);
    //         setPosts(
    //             posts.filter((post) => {
    //                 return post.authorId !== authorId;
    //             })
    //         )
    // }

      useEffect(() => {
        axios.delete("https://localhost:7208/api/authors/" + id)
      });


    return (
        <div className="container">
          <header className="inner-header">
                <h2>Journalister</h2>
                </header>
                <hr />
        <h3>
          {status}
        </h3>
        
        <Link to="/admin/journalists">Gå tillbaka</Link>
        </div>

    )
    }

export default DeleteAuthor;