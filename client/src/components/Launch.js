import React from 'react';
import Spinner from './Spinner';
import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LAUNCHQUERY($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      details
      launch_date_local
      launch_site {
        site_id
        site_name
        site_name_long
      }
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export default function Launch() {
  let { flight_number } = useParams();
  flight_number = parseInt(flight_number);
  return (
    <>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) console.log(error);

          const {
            mission_name,
            flight_number,
            launch_year,
            launch_success,
            details,
            launch_site: { site_id, site_name, site_name_long },
            rocket: { rocket_id, rocket_name, rocket_type },
          } = data.launch;

          return (
            <div>
              <h1 className='display-4 my-3'>
                <span className='text-dark'>Mission:</span> {mission_name}
              </h1>
              <h4 className='mb-3'>Launch Details</h4>
              <ul className='list-group hover-overlay ripple'>
                <li className='list-group-item'>
                  Flight Number: {flight_number}
                </li>
                <li className='list-group-item'>Launch Year: {launch_year}</li>
                <li className='list-group-item'>
                  Launch Successful:{' '}
                  <span
                    className={classNames({
                      'text-success': launch_success,
                      'text-danger': !launch_success,
                    })}
                  >
                    {' '}
                    {launch_success ? 'yes' : 'No'}{' '}
                  </span>
                </li>
                <li className='list-group-item'>Details: {details}</li>
              </ul>

              <h4 className='my-3'>Rocket Details</h4>
              <ul className='list-group'>
                <li className='list-group-item'>Launch ID: {site_id}</li>
                <li className='list-group-item'>Launch Name: {site_name}</li>
                <li className='list-group-item'>Full Name: {site_name_long}</li>
              </ul>
              <ul className='list-group'>
                <li className='list-group-item'>Rocket ID: {rocket_id}</li>
                <li className='list-group-item'>Rocket Name: {rocket_name}</li>
                <li className='list-group-item'>Rocket Type: {rocket_type}</li>
              </ul>
              <Link to='/' className='btn btn-secondary'>
                Back
              </Link>
            </div>
          );
        }}
      </Query>
    </>
  );
}
