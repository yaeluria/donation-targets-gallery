import { gql } from "@apollo/client";

export const DONATION_TARGETS = gql`
  query getTargets($page: Int = 1, $orderBy: DonationTargetsOrder) {
    getDonationTargets(page: $page, orderBy: $orderBy ) {
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