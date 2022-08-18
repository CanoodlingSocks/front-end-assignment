import { Link, Outlet } from "react-router-dom";
// import { useEffect } from "react";
import  axios  from "axios";
import { useState } from "react"
import { Fragment } from "react";

const AdminImagesComponent = () => {
    const [adminImages, setAdminImages] = useState([]);

  const UploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
      formData.append('image', adminImages);
      try {
        const response = axios({
          method: 'post',
          url: 'https://localhost:7208/api/images',
          data: formData,
          heaader: {
            'Content-Type': `multipart/form-data`
          },
        })
      } catch (error) {
        console.log(error)
      }
      //Fixa en let msg grej som säger att uppladdningen funkar
  }

const fileSelect = (event) => {
setAdminImages(event.target.files[0])
}

    // useEffect(()=>{
    //   axios.post("https://localhost:7208/api/images")
    //   .then((response) => {
    //     let adminImages = response.data;
    //     setAdminImages(AdminImages)
    //   });
    // }, [])
        

        return(
            <Fragment>
        <div className="container">
            <header className="inner-header">
                <h2>Bilder</h2>
                <div class="create-btn">
                <Link to="/admin/images/new">Create</Link>
                </div>
            </header>
                    <form onSubmit={UploadImage}>
                      <label>Select Image</label>
                      <input type="file" onChange={fileSelect}></input>
                      <input type="submit"></input>
                    </form>
                   
          <Outlet />
       </div>
       </Fragment>
        );

}

export default AdminImagesComponent;