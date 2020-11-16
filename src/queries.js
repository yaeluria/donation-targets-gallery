import { gql } from "@apollo/client";

export const DONATION_TARGETS = gql`
  query getTargets($page: Int = 1) {
    getDonationTargets(page: $page) {
      donationTargets {
        id
        name
        charityOrganization {
          name
          avatar
        }
        descriptionContent
        mediaObject {
          thumbnail
        }
        donationTargetStatistic {
          donorCount
          totalMatchedAmount
        }
      }
      lastPage
      nextPage
      totalCount
    }
  }
`;