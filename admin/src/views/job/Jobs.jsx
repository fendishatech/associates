import { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";
import { Link } from "react-router-dom";

const Jobs = () => {
  const { mutate } = useSWRConfig();

  const getJobs = async () => {
    const res = await axios.get("http://localhost:8888/api/jobs");
    return res.data.payload;
  };

  const { data } = useSWR("jobs", getJobs);
  if (!data) return <h2>Loading ...</h2>;

  const onDelete = async (jobID) => {
    const res = await axios.delete(`http://localhost:8888/api/jobs/${jobID}`);
    mutate("jobs");
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between my-4">
        <h1>Jobs</h1>
        <Link to={`/jobs/new`} className="btn btn-success text-center  py-0">
          Add New Job
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-light table">
          <thead>
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Job Title</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((job, index) => (
                <tr className="" key={index}>
                  <td>{job.id}</td>
                  <td>{job.title}</td>
                  <td className="d-flex gap-3">
                    <Link
                      to={`/jobs/detail/${job.id}`}
                      className="btn btn-info"
                    >
                      Detail
                    </Link>
                    <Link
                      to={`/jobs/edit/${job.id}`}
                      className="btn btn-warning"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => onDelete(job.id)}
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

export default Jobs;

//   const [jobs, setJobs] = useState({});

//   useEffect(() => {
//     const getJobs = async () => {
//       try {
//         const res = await axios.get("http://localhost:8888/api/jobs");
//         setJobs(res.data.payload);
//       } catch (e) {
//         console.log(e);
//       }
//     };

//     getJobs();
//   }, []);
