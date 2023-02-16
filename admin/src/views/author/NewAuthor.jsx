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
      <div class="card my-5">
        <div className="card-header">Add New Author</div>
        <div className="card-body">
          <form class="row g-3" onSubmit={onSubmit}>
            <div class="col-md-4">
              <label for="validationCustom01" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="validationCustom01"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustomUsername" class="form-label">
                Email
              </label>
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="email"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-md-5">
              <label for="validationCustom04" class="form-label">
                Title
              </label>
              <select
                class="form-select"
                id="validationCustom04"
                onChange={(e) => setTitle(e.target.value)}
                required
              >
                <option selected disabled value="">
                  Choose...
                </option>
                <option value={"Dr."}>Dr.</option>
                <option value={"Prof."}>Prof.</option>
              </select>
              <div class="invalid-feedback">Please select a valid state.</div>
            </div>
            <div class="col-md-7">
              <label for="validationCustom03" class="form-label">
                Job Position
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit
              </button>
              <Link to={"/authors"} class="btn btn-danger mx-2" type="submit">
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
