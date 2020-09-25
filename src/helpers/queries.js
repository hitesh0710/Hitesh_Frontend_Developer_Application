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
mutation postJob($title:String!
  $companyName:String!
  $locationNames:String!
  $userEmail:String!
  $description:String!
  $applyUrl:String!){
  postJob(
  input: {
  title: $title
  commitmentId: "cjtu8esth000z0824x00wtp1i"
  companyName: $companyName
  locationNames: $locationNames
  userEmail: $userEmail
  description: $description
  applyUrl: $applyUrl
  }
  ) {
  id
  }
  }
`;

export { GET_JOBS, POST_JOBS };
