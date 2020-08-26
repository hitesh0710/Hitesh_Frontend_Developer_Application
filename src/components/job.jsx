import React, { Component } from "react";
import Moment from "react-moment";

class Job extends Component {
  state = {};
  render() {
    if (this.props.location.jobData !== undefined)
      return (
        <>
          <div className="container mt-4">
            <h4>
              {this.props.location.jobData.title} |{" "}
              {this.props.location.jobData.company.name}
            </h4>
            <div className="row">
              <div className="col-3 mt-2 bg-light">
                <div className="mt-2">
                  <h6>Job Title</h6>
                  {this.props.location.jobData.title}
                </div>
                <div className="mt-2">
                  <h6>Job Type</h6>
                  {this.props.location.jobData.commitment.title}
                </div>
                <div className="mt-2">
                  <h6>Location</h6>
                  {this.props.location.jobData.cities.map((city) => {
                    if (city.name) return city.name + ", " + city.country.name;
                    else return <p>Not Mentioned</p>;
                  })}
                </div>
                <div className="mt-2">
                  <h6>Company Name</h6>
                  {this.props.location.jobData.company.name}
                </div>
                <div className="mt-2">
                  <h6>Posted</h6>
                  <Moment fromNow>
                    {this.props.location.jobData.postedAt}
                  </Moment>
                </div>
                <div className="mt-2">
                  <h6>Job Poster Email</h6>
                  {this.props.location.jobData.userEmail}
                </div>
              </div>
              <div className="col-8 mt-2 ml-2 text-justify">
                <h6>Job Description</h6>
                {this.props.location.jobData.description}
              </div>
            </div>
          </div>
        </>
      );
    else
      return (
        <div className="text-warning text-center">
          <h3>No Jobs to show!</h3>
        </div>
      );
  }
}

export default Job;
