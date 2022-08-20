import { useEffect, useState } from "react";
import axios from "axios";

const CreateArticle = () => {

    const [images, setImages] = useState([]);
    const [authors, setAuthors] = useState([]);

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


    return (
        <div className="container">
        <h3>Skapa en ny Artikel</h3>
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
        {/* <select
        className="input"
        required="required"
        >
            {
                authors?.results.data && authors.results.map(author => {
                    return <p>{author.name}</p>
                })
            }
        </select> */}
        <label htmlFor="author-image">Välj författarebild</label>
            <select
              className="input"
              required="required"
            >
              {images.map((image) => {
                  return <option selected={image === images.imageName ? true : false } className="input" key={image} value={image}>{image}</option>
              }
              )}
            </select>
        </form>
        </div>
    )

}

export default CreateArticle;