import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const DeleteAuthor = () => {
  let params = useParams();
  let id = params.id;

  const [status, setStatus] = useState("Författaren är raderad");

  useEffect(() => {
    axios.delete("https://localhost:7208/api/authors/" + id)
  });


  return (
    <div className="container">
      <header className="inner-header">
        <h2>Journalister</h2>
      </header>
      <hr />
      <h3>
        {status}
      </h3>

      <Link to="/admin/journalists">Gå tillbaka</Link>
    </div>

  )
}

export default DeleteAuthor;