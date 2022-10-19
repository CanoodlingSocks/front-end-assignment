import { Outlet } from "react-router-dom";
import axios from "axios";
import { useState } from "react"
import { Fragment } from "react";

const AdminImagesComponent = () => {
  const [adminImages, setAdminImages] = useState([]);

  const [msg, setMsg] = useState('');
  const [setSuccess] = useState(false)

  const UploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', adminImages);
    try {
      axios({
        method: 'post',
        url: 'https://localhost:7208/api/images',
        data: formData,
        header: {
          'Content-Type': `multipart/form-data`
        },
      })
      setMsg('Uppladdning lyckades!');
      setSuccess(true)
    } catch (error) {
      console.log(error)
      setMsg('Uppladdning misslyckades...')
    }

  }
  const fileSelect = (event) => {
    setAdminImages(event.target.files[0])
  }

  return (
    <Fragment>
      <div className="container">
        <header className="inner-header">
          <h2>Bilder</h2>
        </header>
        <hr />
        <br />
        <form onSubmit={UploadImage}>
          <label>Välj bild att ladda upp</label>
          <br />
          <input type="file" onChange={fileSelect}></input>
          <div className="msg-div">
            {msg}
          </div>
          <br />
          <input type="submit"></input>
        </form>

        <Outlet />
      </div>
    </Fragment>
  );
}

export default AdminImagesComponent;