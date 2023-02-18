import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditJob = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [deadline, setDeadline] = useState("");
  const [edu_level, setEduLevel] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      title,
      level,
      deadline,
      edu_level,
      experience,
      description,
      requirements,
    };

    try {
      const res = await axios.put("http://localhost:8888/api/jobs/", jobData);

      navigate("/jobs");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getJob = async () => {
      try {
        const res = await axios.get(`http://localhost:8888/api/jobs/${id}`);
        const job = res.data.payload[0];
        console.log({ job });

        setTitle(job.title);
        setLevel(job.level);
        setDeadline(job.deadline);
        setEduLevel(job.edu_level);
        setExperience(job.experience);
        setDescription(job.description);
        setRequirements(job.requirements);
      } catch (error) {}
    };

    getJob();
  }, []);

  return (
    <div className="container">
      <div className="card my-5">
        <div className="card-header">Add New Job</div>
        <div className="card-body">
          <form className="row g-3" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-md-8">
                <label htmlFor="validationCustom01" className="form-label">
                  Title
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="validationCustom01"
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom04" className="form-label">
                  Level
                </label>
                <select
                  className="form-select"
                  id="validationCustom04"
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value={"DEGREE"}>Bachelors Degree</option>
                  <option value={"MASTERS"}>Masters</option>
                  <option value={"UNDER_GRADUATE"}>under grad (intern)</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <label htmlFor="validationCustom02" className="form-label">
                Educational level
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="validationCustom02"
                value={edu_level}
                onChange={(e) => setEduLevel(e.target.value)}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  Deadline
                </label>
                <input
                  required
                  type="datetime"
                  className="form-control"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  id="validationCustom01"
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  Experience
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  id="validationCustom01"
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Job Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Requirements
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
              ></textarea>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
              <Link to={"/jobs"} className="btn btn-danger mx-2" type="submit">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditJob;
