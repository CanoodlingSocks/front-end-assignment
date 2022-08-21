import axios from "axios";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditAuthor = () => {
  let uParams = useParams();
  let id = uParams.id;

  // DEN HÄR KOMPONENTEN VAR BARA PAIN PAIN PAIN
  // HUR SKULLE JAG VETA ATT JAG BEHÖVDE SÄTTA {} I MIN
  // USESTATE OCH INTE [], I HAVE SPENT DAYS DAAAAYS ON THIS SHIITTTT

  const [authorId, setAuthorId] = useState([]);

  const [authorFname, setAuthorFname] = useState("");
  const [authorLname, setAuthorLname] = useState("");

  const [images, setImages] = useState([]); //Change name later to authorImage, setAuthorImage

  const [imageName, setImageName] = useState("");

  const [mail, setMail] = useState("");
  const [twitter, setTwitter] = useState("");

//   const handleChange = (event) => {
//       setAuthorName({...authorName, [event.target.name]: event.target.value})
//   }

//   const handleSubmit = (e) => {
//       e.preventDefault()
//       axios.put(`https://localhost:7208/api/authors/{id}`, `authorName`)
//       .then(function (response) {
//           console.log(response)
//       })
//       .catch(function (error) {
//           console.log(error)
//       })
//   }
  //Axios error 405

  // Mikaela hjälpte mig med axiosen, axios vill helt enkelt inte fungera för mig T_T
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


//     try {
//       axios.put("https://localhost:7208/api/authors/" + id, {
//         id: authorId,
//         firstName: authorFname,
//         lastName: authorLname,
//         imageName: imageName,
//         mail: setMail,
//         twitterUserName: setTwitter,
//       });
//     } catch {
//       console.log("Something went wrong");
//     }
//     console.log("Ok");
//   };

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
                // onChange={(e) => setAuthorFname(e.target[0].value)}
              />
              <label htmlFor="Last-name">Last name</label>
              <input
                type="text"
                name="last-name"
                required="required"
                defaultValue={authorLname}
                // onChange={(e) => setAuthorLname(e.target.value)}
              />
            </div>
            <div className="socials-input">
            <label htmlFor="author-mail">Epost</label>
            <input 
            type="email" 
            defaultValue={mail}
            // onChange={(e) => setMail(e.target.value)}
            />
            <label htmlFor="author-twitter">Twitter</label>
            <input 
            type="text" 
            defaultValue={authorId.twitterUserName !== undefined ? authorId.twitterUserName : twitter} 
            
            // onChange={(e) => setTwitter(e.target.value)}
            />
            </div>
            
            <label htmlFor="author-image">Image</label>
            <select
              classname="input"
              required="required"
              value={imageName}
            //   onChange={(e) => setImageName(e.target.value)}
            >
              {images.map((image) => {
                // <option hidden disabled defaultValue />
                  return <option selected={image === images.imageName ? true : false } classname="input" key={image} value={image}>{image}</option>
              }
              )}
            </select>
            <div>
            <input type="submit" value="Uppdatera" />
            <Link to="/admin/journalists">Avbryt</Link>
            </div>
          </form>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default EditAuthor;
