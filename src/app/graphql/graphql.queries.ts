import { gql } from "apollo-angular";

const CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
				species
        status
				type
				gender
				origin {
          name
        }
				location {
          name
        }
				created
      }
    }
  }
`;

export { CHARACTERS };
