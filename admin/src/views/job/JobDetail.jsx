import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getJob = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:8888/api/jobs/${id}`);
        const job = res.data.payload[0];
        setJob(job);
        setLoading(false);
      } catch (error) {
        // console.log(error);
      }
    };

    getJob();
  }, []);
  return (
    <div className="container">
      {loading && <h1>Loading...</h1>}
      {!loading && job != null && (
        <>
          <div className="row mt-2 p-3">
            <Link to={"/jobs"} className="col-md-4 btn btn-primary btn-sm">
              Back
            </Link>
          </div>
          <div className="card mt-2 mb-5">
            <div className="card-header">{job.title}</div>
            <div className="card-body">
              <p>Deadline :</p>
              <p>{job.createdAt}</p>
              <p>posted at :</p>
              <p>{job.createdAt}</p>
              <p>Experience :</p>
              <p>{job.experience}</p>
              <p>Requirements :</p>
              <p>{job.requirements}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JobDetail;
