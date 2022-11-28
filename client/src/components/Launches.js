import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import Spinner from './Spinner';
import Launchitem from './Launchitem';
import { v4 as uuidv4 } from 'uuid';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

class Launches extends Component {
  render() {
    return (
      <>
        <Query query={LAUNCHES_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <Spinner />;
            if (error) console.log(error);
            return (
              <>
                {data.launches.map((launch) => (
                  <Launchitem key={uuidv4()} {...launch} />
                ))}
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Launches;
