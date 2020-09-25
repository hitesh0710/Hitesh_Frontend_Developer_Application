import React from "react";
import { POST_JOBS } from "../helpers/queries";
import { useMutation } from "@apollo/client";
import '../index.css';
import { useEffect } from "react";

function myFunction(id) {
  var x = document.getElementById("toast-alert");
  x.className = "show";
  x.innerHTML = "Job posted with jobID: " + id;
  setTimeout(function () {
    x.className = x.className.replace("show", "");
    x.innerHTML = "";
  }, 3000);
}

function PostJob() {
  const [postJob, { data, error, loading }] = useMutation(POST_JOBS, {
    onCompleted({ postJob }) {

    }
  });
  useEffect(() => {
    if (data) {
      myFunction(data.postJob.id);
    }
  }, [data])
  const handleSubmit = (event) => {
    event.preventDefault();
    postJob({
      variables: {
        title: event.target.title.value,
        companyName: event.target.companyname.value,
        locationNames: event.target.location.value,
        userEmail: event.target.email.value,
        description: event.target.description.value,
        applyUrl: event.target.url.value
      }
    });
  };
  //if (data) return data;
  //if (loading) return <p>loading</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <>
      <div className="container mt-2">
        <h2>Post Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="TextBox1">Job Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                id="TextBox1"
                placeholder="Software Developer"
                aria-describedby="shortDesc"
              ></input>
            </div>
            <div className="col-sm-6">
              <label htmlFor="exampleFormControlSelect1">Job Type</label>
              <select
                name="type"
                className="form-control"
                id="exampleFormControlSelect1"
              >
                {" "}
                <option>Full Time</option>{" "}
              </select>
            </div>
            <div className="col-sm-6">
              <label htmlFor="TextBox2">Company Name</label>
              <input
                type="text"
                name="companyname"
                className="form-control"
                id="TextBox2"
                placeholder="Google"
                aria-describedby="shortDesc"
              ></input>
            </div>
            <div className="col-sm-6">
              <label htmlFor="TextBox3">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                id="TextBox3"
                placeholder="New Delhi"
                aria-describedby="shortDesc"
              ></input>
            </div>
            <div className="col-sm-6">
              <label htmlFor="TextBox4">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="TextBox4"
                placeholder="xyz@gmail.com"
                aria-describedby="shortDesc"
              ></input>
            </div>
            <div className="col-sm-6">
              <label htmlFor="TextBox5">Application Url</label>
              <input
                type="text"
                className="form-control"
                name="url"
                id="TextBox5"
                placeholder="https://..."
                aria-describedby="shortDesc"
              ></input>
            </div>
            <div className="col-sm-12">
              <label htmlFor="exampleFormControlTextarea1">
                Job Description
              </label>
              <textarea
                className="form-control"
                name="description"
                id="FormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
            {loading ? 'submitting' : 'Post job'}
          </button>
        </form>
      </div>
    </>
  );
}

export default PostJob;
