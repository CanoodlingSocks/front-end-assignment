import axios from "axios";
import React, {Fragment, useState} from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams } from "react-router-dom";

const EditAuthor = () => {

    let uParams = useParams();
    let authorId = uParams.authorId;

    // const [authorName, setAuthorName] = useState([
    //     {firstName: '', lastName: ''}
    // ]);

    const [authorFname, setAuthorFname] = useState([]);

    const [authorLname, setAuthorLname] = useState([]);

    const [authorImage, setAuthorImage] = useState([]);

    // const handleChange = (event) => {
    //     setAuthorName({...authorName, [event.target.name]: event.target.value})
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.put(`https://localhost:7208/api/authors/{id}`, `authorName`)
    //     .then(function (response) {
    //         console.log(response)
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })
    // }
    //Axios error 405

    useEffect(() => {
        axios.get("https://localhost:7208/api/authors/" + authorId)
        .then((response) => {
            setAuthorFname(response.data.authorFname);
            setAuthorLname(response.data.authorLname);
            setAuthorImage(response.data.authorImage);
        })
    })
    
    useEffect(()=>{
        try{
        const {authorImage: response} = axios.get("https://localhost:7208/api/images")
            setAuthorImage(response)
        } catch (error) {
            console.log(error)
        }
    }, []);
      

const handleSubmit = () => {
    return axios.post('https://localhost:7208/api/authors/',
    {
        firstName: authorFname,
        lastName: authorLname,
        imageName: authorImage, 
        mail: "abc@lmao.se",
        twitterUserName: "twitterNamePlaceholder"
    })
}


//LACHLANS KOD 
// export function UpdateAuthor(authorInfo) {
//     return axios.put('https://localhost:7208/api/authors/' + authorInfo.id, authorInfo)
//     .then((response) => {
//         const data = response.data;
//         return data;
//     })
//     .catch((error) => {
//         console.log("Error in UpdateAuthor: ", error);
//     })
// }
// END OF LACHLANS KOD

    return (
        <Fragment>
        <div className="container">
            <h3>Edit Author</h3>
            <div className="form-container">
            <form onSubmit={handleSubmit}>
            <div className="name-input">
            <label htmlFor="first-name">First name</label>
            <input type="text" name="first-name" required="required" defaultValue={authorFname} onChange={(e) => setAuthorFname(e.target.value)}/>
            <label htmlFor="Last-name">Last name</label>
            <input type="text" name="last-name" required="required"  defaultValue={authorLname} onChange={(e) => setAuthorLname(e.target.value)} />
            <label htmlFor="author-image">Image</label>
            <input type="file" name="author-image" required="required" defaultValue={authorImage} onChange={(e) => setAuthorImage(e.target.value)} />
            <option value={authorImage}>{authorImage}</option>
            <input type="submit" value="Update" />
            </div>
            </form>
            </div>
            <Outlet />
        </div>
        </Fragment>
    );
}


export default EditAuthor;