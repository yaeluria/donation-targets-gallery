import React from "react";
import Gallery from "./Gallery";
import { useQuery } from "@apollo/client";
import { DONATION_TARGETS } from "../queries";
import Box from "@material-ui/core/Box";
import { Waypoint } from "react-waypoint";
import CircularProgress from "@material-ui/core/CircularProgress";
import OrderSelect from "./OrderSelect";
import DataContext from "../data-context";

export default function Container() {
  const {filter} = useContext(DataContext);
  const INITIAL_PAGE = 1;
  const { loading, error, data, fetchMore } = useQuery(DONATION_TARGETS, {
    variables: {
      page: INITIAL_PAGE,
      orderBy: filter?.orderBy || "approved_at_DESC"
    }
  });

  return (
    <Box p={3} display="flex" flexDirection="column" alignItems="center">
      {data ? (
        <>
         <OrderSelect />
          <Gallery data={data} />
          <Waypoint
            onEnter={() => {
              const nextPage = data?.getDonationTargets?.nextPage;
              if (nextPage) {
                fetchMore({
                  variables: {
                     page: nextPage, 
                     orderBy: filter?.orderBy || "approved_at_DESC"
                   },
                  updateQuery: (_previousResult, { fetchMoreResult }) =>
                    fetchMoreResult,
                });
              }
            }}
          >
            <CircularProgress />
          </Waypoint>
        </>
      ) : loading ? (
        <CircularProgress />
      ) : (
        error && <p>Error :(</p>
      )}
    </Box>
    </>
  );
}
