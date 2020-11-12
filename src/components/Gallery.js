import React from 'react';
import { useQuery, gql } from '@apollo/client';

const DONATION_TARGETS = gql`
  query {
    getDonationTargets {
      donationTargets {
        id
        name
        descriptionContent
        category {
          name
        }
      }
      lastPage
      nextPage
      totalCount
    }
  }
`;

export default function Gallery(){
    const { loading, error, data } = useQuery(DONATION_TARGETS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return(
        data.getDonationTargets.donationTargets.map(({ name, id }) => {
            return(
              <div key={id}>
              <p>
                {id}: {name}
              </p>
            </div>
            )
          })
    )
}