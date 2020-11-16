import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function AppBar() {
  return (
    <div>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h5" noWrap>
          Donation Targets Gallery
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}
