import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const DeleteAuthor = () => {
    let uParams = useParams();
    let authorId = uParams.authorId;

    const [status, setStatus] = useState("");

    const [errorMsg, setErrorMsg] = useState("")

    // const [msg, setMsg] = useState("Är du säker på att du vill radera författaren?");

    // let [isConfirmed, setIsConfirmed] = useState(false);

    // function RedirectionTimer() {
    //     const [redirectNow, setRedirectNow] = useState(false);
    //     setTimeout(() => setRedirectNow(true), 5000);
    //     window.location.href="https://localhost:7208/admin/journalists";
    // }

    const client = axios.create({
        baseURL: "https://localhost:7208/api/authors/"
      });

    const [posts, setPosts] = useState([]);

    const deletePost = (authorId) => {
            client.delete(`${authorId}`);
            setPosts(
                posts.filter((post) => {
                    return post.authorId !== authorId;
                })
            )
    }

        // useEffect(() => {
        //         axios.delete('https://localhost:7208/api/authors/' + authorId)
        //         .then(() => setStatus('Författare raderad'))
        //         .catch(error => {
        //             setErrorMsg(error.message);
        //             console.error('There was an error!', error);
        //         });
        // }, []);

    // function Route() {
    //     window.location.href="https://localhost:7208/admin/journalists";
    // }

    return (
        <div className="container">
        {/* {msg} */}
        {/* <div className="confirmation-btns">
        <input type="button" className="yes-btn disable" value="Ja" onClick={() => setIsConfirmed(true)} />
        <input type="button" className="no-btn " onClick={Route} value="Nej"/> */}
        {/* </div> */}

        {status}
        <Link to="/admin/journalists">Gå tillbaka</Link>
        </div>

    )

}

export default DeleteAuthor;