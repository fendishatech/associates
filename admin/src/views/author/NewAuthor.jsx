import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewAuthor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const authorData = {
      firstName,
      lastName,
      email,
      title,
      position,
    };

    try {
      const res = await axios.post(
        "http://localhost:8888/api/authors/",
        authorData
      );

      navigate("/authors");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="card my-5">
        <div className="card-header">Add New Author</div>
        <div className="card-body">
          <form className="row g-3" onSubmit={onSubmit}>
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="validationCustom01"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label">
                Email
              </label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <label htmlFor="validationCustom04" className="form-label">
                Title
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                onChange={(e) => setTitle(e.target.value)}
                required
              >
                <option disabled value={title}>
                  {title}
                </option>
                <option value={"Dr."}>Dr.</option>
                <option value={"Prof."}>Prof.</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-7">
              <label htmlFor="validationCustom03" className="form-label">
                Job Position
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
              <Link
                to={"/authors"}
                className="btn btn-danger mx-2"
                type="submit"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewAuthor;
