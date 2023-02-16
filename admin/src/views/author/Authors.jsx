import { useEffect, useState } from "react";
import axios from "axios";

const Authors = () => {
  const [authors, setAuthors] = useState({});

  useEffect(() => {
    const getAuthors = async () => {
      try {
        const res = await axios.get("http://localhost:8888/api/authors");

        console.log(res);
        setAuthors(res.data.payload);
      } catch (e) {
        console.log(e);
      }
    };

    getAuthors();
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-between my-4">
        <h1>Authors</h1>
        <button className="btn btn-success py-0">Add New Author</button>
      </div>
      <div className="table-responsive">
        <table className="table table-light table">
          <thead>
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.length > 0 &&
              authors.map((author, index) => (
                <tr className="" key={index}>
                  <td>{author.id}</td>
                  <td>
                    {author.firstName} {author.lastName}
                  </td>
                  <td className="d-flex gap-3">
                    <button className="btn btn-info">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Authors;
