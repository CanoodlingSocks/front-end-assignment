import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import  axios  from "axios";
import { useState } from "react"
import { Fragment } from "react";

const AdminImagesComponent = () => {
    const [AdminImages, setAdminImages] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:7208/api/images")
      .then((response) => {
        let AdminImages = response.data;
        setAdminImages(AdminImages)
      });
    }, [])
        

        return(
            <Fragment>
        <div className="container">
            <header className="inner-header">
                <h2>Images</h2>
                <div class="create-btn">
                <Link to="/admin/images/create">Create</Link>
                </div>
            </header>
                    
                    {AdminImages.map((image) => {
                       return (
                      <ul>
                        <li>
                        <Link
                        to={`admin/images/${image.title}`}
                        key={image.id}
                        >
                        {image.title}
                        </Link>
                          
                        </li>
                      </ul>
                        
                       )}

                    )};
       
          <Outlet />
       </div>
       </Fragment>
        );

}

export default AdminImagesComponent;