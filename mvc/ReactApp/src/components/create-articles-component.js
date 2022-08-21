import { useEffect, useState } from "react";
import axios from "axios";

const CreateArticle = () => {

    const [title, setTitle] = useState("")
    const [images, setImages] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [author, setAuthor] = useState("");
    const [ingress, setIngress] = useState("");

    useEffect(() => {
        try {
          axios.get("https://localhost:7208/api/images").then((response) => {
            let retrievedImages = response.data;
            setImages(retrievedImages);
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

      const handleSubmit = (event) => {
        event.preventDefault();
        try {
          axios.post("https://localhost:7208/api/articles/", {
            title: title,
            intro: ingress,
            authorId: author,
            imageName: images,
          });
        } catch {
          console.log("Something went wrong");
        }
        console.log("Ok");
        Relocate();
    
      };

      function Relocate() {
        window.location.href = 'admin/articles';
      }

    return (
        <div className="container">
        <h3>Skapa en ny Artikel</h3>
        <hr />
        <form>
        <label>Titel</label>
        <input 
        maxLength={75}
        type="text"
        required="required"
        />
        <label>Välj författare</label>
        <div>
        </div>
        <select
        className="input"
        required="required"
        defaultValue={author} 
        onChange={(e) => setAuthor(e.target.value)}
        >
            <option hidden disabled defaultValue />
            {authors.map((authors) => (
              <option className="input" key={authors.id} value={authors.id}>{authors.firstName} {authors.lastName}</option>
              ))}  
        </select>
        {/* <label htmlFor="author-image">Välj författarebild</label>
            <select
              className="input"
              required="required"
            >
              {images.map((image) => {
                  return <option selected={image === images.imageName ? true : false } className="input" key={image} value={image}>{image}</option>
              }
              )}
            </select> */}
        <label htmlFor="article-image">Välj artikelbild</label>
            <select 
              className="input"
              required="required"
            >
              {images.map((image) => {
                  return <option selected={image === images.imageName ? true : false } className="input" key={image} value={image}>{image}</option>
              }
              )}
            </select>
            <label htmlFor="ingress">Textruta för ingress</label>
            <input type="text" required="required"></input>
        </form>
        <h1>UNFINISHED</h1>
        <input type="button" onClick={Relocate} value="Go back" />
        </div>
    )

}

export default CreateArticle;