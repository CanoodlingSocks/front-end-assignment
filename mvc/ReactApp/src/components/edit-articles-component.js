import { useParams } from "react-router-dom";

const EditArticle = () => {
    let uParams = useParams();
    return (
        <div className="container">
        <h3>Edit Article Page</h3>
        <p>{uParams.id}</p>
        </ div>
    );
    
}

export default EditArticle;