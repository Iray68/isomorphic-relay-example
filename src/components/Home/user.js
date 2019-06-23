import { graphql } from 'react-relay';

export default graphql`
    query userQuery {
        user {
            name
            label
            description
        }
    }
`;