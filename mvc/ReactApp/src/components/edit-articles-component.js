import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const EditArticle = () => {
    
    let uParams = useParams();

    const [title, setTitle] = useState("")
    const [images, setImages] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [author, setAuthor] = useState("");
    const [ingress, setIngress] = useState("");

    useEffect(() => {
        try {
          axios.get("https://localhost:7208/api/articles" + uParams.id).then((response) => {
            setTitle(response.data.title);
            setIngress(response.data.intro);
            setAuthors(response.data.authorId);
            setImages(response.data.imageName)
          });
        } catch (error) {
          console.log(error);
        }
      }, []);

      useEffect(() => {
        try {
          axios.get("https://localhost:7208/api/images").then((response) => {
            let retrievedData = response.data;
            setImages(retrievedData);
          });
        } catch (error) {
          console.log(error);
        }
      }, []);

      useEffect(() => {
        try {
          axios.get("https://localhost:7208/api/authors").then((response) => {
            let retrievedAuthors = response.data;
            setAuthors(retrievedAuthors);
          });
        } catch (error) {
          console.log(error);
        }
      }, []);

      function Relocate() {
        window.location.href = 'admin/articles';
      }

    return (    
        <div className="container">
        <h3>Redigera Artikel</h3>
        <hr />
        <p>Artikel Id: {uParams.id}</p>
        <form>
        <label>Titel</label>
        <input 
        maxLength={75}
        type="text"
        required="required"
        defaultValue={title}
        />
        <label>Författare</label>
        <div>
        </div>
        <select
        className="input"
        required="required"
        defaultValue={authors} 
        onChange={(e) => setAuthor(e.target.value)}
        >
            <option hidden disabled defaultValue />
            {authors.map((authors) => (
              <option className="input" key={authors.id} value={authors.id}>{authors.firstName} {authors.lastName}</option>
              ))}  
        </select>

        <label htmlFor="article-image">Artikelbild</label>
            <select 
              className="input"
              required="required"
              defaultValue={images}
            >
              {images.map((image) => {
                  return <option selected={image === images.imageName ? true : false } className="input" key={image} value={image}>{image}</option>
              }
              )}
            </select>
            <label htmlFor="ingress">Ingress</label>
            <input type="text" required="required" defaultValue={ingress}></input>
        </form>

        <h1>UNFINISHED</h1>
        <input type="button" onClick={Relocate} value="Go back" />
        </ div>
    );


    
}

export default EditArticle;