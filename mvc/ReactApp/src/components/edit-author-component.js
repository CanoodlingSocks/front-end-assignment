import axios from "axios";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditAuthor = () => {
  let uParams = useParams();
  let id = uParams.id;

  const [authorId, setAuthorId] = useState([]);

  const [authorFname, setAuthorFname] = useState("");
  const [authorLname, setAuthorLname] = useState("");

  const [images, setImages] = useState([]); 

  const [imageName, setImageName] = useState("");

  const [mail, setMail] = useState("");
  const [twitter, setTwitter] = useState("");

  useEffect(() => {
    axios.get("https://localhost:7208/api/authors/" + id).then((response) => {
      setAuthorId(response.data.id);
      setAuthorFname(response.data.firstName);
      setAuthorLname(response.data.lastName);
      setImageName(response.data.imageName);
      setMail(response.data.mail);
      setTwitter(response.data.twitterUserName);
    });
}) 

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


const saveData = (e) => {
    e.preventDefault();
    const editData = {
        Id: id,
        firstName:  `${e.target[0].value}`,
          lastName:  `${e.target[1].value}`,
          imageName: `${e.target[4].value}`,
          mail: `${e.target[2].value}`,
          twitterUserName: `${e.target[3].value}`
    };

      axios.put("https://localhost:7208/api/authors/" + id, editData)
      .then((response) => console.log(response)) 
      const relocate = 
    window.location.href = 'admin/journalists';  
}

  return (
    <Fragment>
      <div className="container">
        <h3>Redigera Författare</h3>
        <div className="form-container">
          <form onSubmit={(e) => saveData(e)}>
            <div className="name-input">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                name="first-name"
                required="required"
                defaultValue={authorFname}
              />
              <label htmlFor="Last-name">Last name</label>
              <input
                type="text"
                name="last-name"
                required="required"
                defaultValue={authorLname}
              />
            </div>
            <div className="socials-input">
            <label htmlFor="author-mail">Epost</label>
            <input 
            type="email" 
            defaultValue={mail}
            />
            <label htmlFor="author-twitter">Twitter</label>
            <input 
            type="text" 
            defaultValue={authorId.twitterUserName !== undefined ? authorId.twitterUserName : twitter} 
            />
            </div>
            <label htmlFor="author-image">Image</label>
            <select
              classname="input"
              required="required"
              value={imageName}
            >
              {images.map((image) => {
                  return <option selected={image === images.imageName ? true : false } classname="input" key={image} value={image}>{image}</option>
              }
              )}
            </select>
            <div>
            <input type="submit" value="Uppdatera" />
            <Link to="/admin/journalists" className="back-btn">Avbryt</Link>
            </div>
          </form>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default EditAuthor;
