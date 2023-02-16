import { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";
import { Link } from "react-router-dom";

const Authors = () => {
  const { mutate } = useSWRConfig();

  const getAuthors = async () => {
    const res = await axios.get("http://localhost:8888/api/authors");
    return res.data.payload;
  };

  const { data } = useSWR("authors", getAuthors);
  if (!data) return <h2>Loading ...</h2>;

  const onDelete = async (authorID) => {
    const res = await axios.delete(
      `http://localhost:8888/api/authors/${authorID}`
    );
    mutate("authors");
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between my-4">
        <h1>Authors</h1>
        <Link to={`/authors/new`} className="btn btn-success text-center  py-0">
          Add New Author
        </Link>
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
            {data.length > 0 &&
              data.map((author, index) => (
                <tr className="" key={index}>
                  <td>{author.id}</td>
                  <td>
                    {author.firstName} {author.lastName}
                  </td>
                  <td className="d-flex gap-3">
                    <Link
                      to={`/authors/edit/${author.id}`}
                      className="btn btn-info"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => onDelete(author.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
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

//   const [authors, setAuthors] = useState({});

//   useEffect(() => {
//     const getAuthors = async () => {
//       try {
//         const res = await axios.get("http://localhost:8888/api/authors");
//         setAuthors(res.data.payload);
//       } catch (e) {
//         console.log(e);
//       }
//     };

//     getAuthors();
//   }, []);
