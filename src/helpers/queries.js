import { gql } from "@apollo/client";

const GET_JOBS = gql`
  query {
    jobs {
      id
      title
      slug
      description
      cities {
        name
        country {
          name
        }
      }
      commitment {
        title
      }
      tags {
        name
      }
      userEmail
      postedAt
      company {
        name
      }
    }
  }
`;

const POST_JOBS = gql`
  mutation {
    postJob(
      input: {
        title: $title
        commitmentId: "123"
        companyName: "XYZ"
        locationNames: "Delhi"
        userEmail: "xyz@gmail.com"
        description: "Valid Job"
        applyUrl: "google.com"
      }
    ) {
      id
    }
  }
`;

export { GET_JOBS, POST_JOBS };
