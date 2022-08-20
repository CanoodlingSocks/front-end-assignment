import axios from "axios";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateAuthor = () => {
  // let uParams = useParams();
  // let id = uParams.id;

  const [authorFname, setAuthorFname] = useState("");
  const [authorLname, setAuthorLname] = useState("");

  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState("");

  const [mail, setMail] = useState("");
  const [twitter, setTwitter] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios.post("https://localhost:7208/api/authors/", {
        firstName: authorFname,
        lastName: authorLname,
        imageName: imageName,
        mail: setMail,
        twitterUserName: setTwitter,
      });
    } catch {
      console.log("Something went wrong");
    }
    console.log("Ok");
  };

  return (
    <Fragment>
      <div className="container">
        <h3>Skapa ny författare</h3>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="name-input">
              <label htmlFor="first-name">Förnamn</label>
              <input
                type="text"
                name="first-name"
                required="required"
                onChange={(e) => setAuthorFname(e.target.value)}
              />
              <label htmlFor="Last-name">Efternamn</label>
              <input
                type="text"
                name="last-name"
                required="required"
                onChange={(e) => setAuthorLname(e.target.value)}
              />
            </div>
            <div className="socials-input">
            <label htmlFor="author-mail">Epost</label>
            <input 
            type="email" 
            onChange={(e) => setMail(e.target.value)}
            />
            <label htmlFor="author-twitter">Twitter</label>
            <input 
            type="text" 
            onChange={(e) => setTwitter(e.target.value)} />
            </div>
            <label htmlFor="author-image">Bild</label>
            <select
              classname="input"
              required="required"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
            >
              <option hidden disabled defaultValue />
              {images.map((image) => (
                <option classname="input" key={image} value={image}>
                  {image}
                </option>
              ))}
            </select>
            <input type="submit" value="Skapa" />
            <Link to="/admin/journalists">Avbryt</Link>
          </form>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default CreateAuthor;
