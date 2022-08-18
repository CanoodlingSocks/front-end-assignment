import { useParams } from "react-router-dom";
// import { useState } from "react";
// import AdminArticlesComponent from "./admin-articles-component.js";

const EditArticle = () => {
    
    // const [componentValue, setComponentValue] = useState("");

    // const onClickFunction = (string) => {
    //     props.callbackProp(string(props.changeValue))
    //     setComponentValue(componentValue + string(props.changeValue));
    // }

    let uParams = useParams();
    return (    
        <div className="container">
        <h3>Edit Article Page</h3>
        <p>Artikel Id: {uParams.id}</p>
        {/* <AdminArticlesComponent callbackProp={onClickFunction} /> */}
        </ div>
    );


    
}

export default EditArticle;