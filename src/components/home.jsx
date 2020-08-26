import React from "react";
import Moment from "react-moment";
import { useQuery, fetchMore, cursor } from "@apollo/client";
import { Link } from "react-router-dom";

import { GET_JOBS } from "../helpers/queries";
import PostJob from "./postjob";
import Menu from "./menu";

function Jobs() {
  const { data, loading, error } = useQuery(GET_JOBS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col-sm-6 mt-2">
            <h2>Available Jobs {data.jobs.length}</h2>
            {data.jobs.map((jobs) => (
              <div key={jobs.id}>
                <Link
                  className="text-primary"
                  to={{
                    pathname: "/job",
                    jobData: jobs,
                  }}
                >
                  {jobs.title} | {jobs.company.name}
                </Link>
                <p>
                  {jobs.cities.map((city) => city.name)},{" "}
                  {jobs.cities.map((city) => city.country.name)} | Posted:{" "}
                  <Moment fromNow>{jobs.postedAt}</Moment>
                </p>
              </div>
            ))}
          </div>
          <div className="col-sm-6">
            <PostJob />
          </div>
        </div>
      </div>
    </>
  );
}

export { Jobs };
