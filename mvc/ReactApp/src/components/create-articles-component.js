import { useParams } from "react-router-dom";

const CreateArticle = () => {
    let uParams = useParams();
    return (
        <div className="container">
        <p>New Article! {uParams.id}</p>
        </div>

    )

}

export default CreateArticle;