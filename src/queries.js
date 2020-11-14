import {  gql } from "@apollo/client";

export const DONATION_TARGETS = gql`
  query getTargets($page: Int = 1) {
    getDonationTargets(page: $page) {
      donationTargets {
        id
        name
        descriptionContent
        mediaObject {
          thumbnail
        }
      }
      lastPage
      nextPage
      totalCount
    }
  }
`;