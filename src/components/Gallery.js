import React from "react";
import Card from "./Card";
import Box from "@material-ui/core/Box";

export default function Gallery({ data }) {
  React.useEffect(() => {
    console.log("data", data);
  });

  return (
    <Box display="flex" flexWrap="wrap" p={10}>
      {data?.getDonationTargets?.donationTargets?.map((target) => {
        return (
          <Box key={target.id} p={3}>
            <Card data={target} />
          </Box>
        );
      })}
    </Box>
  );
}
