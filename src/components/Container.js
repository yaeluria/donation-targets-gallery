import React, { useContext } from "react";
import Gallery from "./Gallery";
import { useQuery } from "@apollo/client";
import { DONATION_TARGETS } from "../graphql/queries";
import Box from "@material-ui/core/Box";
import { Waypoint } from "react-waypoint";
import CircularProgress from "@material-ui/core/CircularProgress";
import AppBar from './AppBar';
import OrderSelect from "./OrderSelect";
import DataContext from "../data-context";
import {INITIAL_PAGE_NUM} from "../constants";

export default function Container() {
  const {filter} = useContext(DataContext);
  
  const orderBy = filter?.orderBy || "approved_at_DESC"
    
  
  const { loading, error, data, fetchMore } = useQuery(DONATION_TARGETS, {
    variables: {
      page: INITIAL_PAGE_NUM,
      orderBy: orderBy
    }
  });

  return (
    <>
      <AppBar />
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
                      orderBy: orderBy
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
