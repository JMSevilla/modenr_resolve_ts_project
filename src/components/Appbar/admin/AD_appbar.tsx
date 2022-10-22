import React from "react";
import { IAdministratorSidebar } from "../../../core/componentsInterfaces";

import {
  Box,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const SystemAdministratorAppBar: React.FC<IAdministratorSidebar> = (props) => {
  const { open, handleDrawerOpen, AppBar, token, signoutRouteDestroy } = props;
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="flex items-center justify-between w-full">
            <h3 className="text-xl font-medium font-body text-white">
              Hi, Administrator
            </h3>
            <Box className="flex item-center gap-3 ">
              <IconButton
              // aria-controls={logout ? "basic-menu" : undefined}
              // aria-haspopup="true"
              // aria-expanded={logout ? "true" : undefined}
              // onClick={handleClick}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cj9fuTsqPCwvnG-IqN3HAVb9jMa0BD5uxQ&usqp=CAU"
                />
              </IconButton>
              <Menu
                id="basic-menu"
                // anchorEl={anchorEl}
                open={true}
                // onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  data-testid={"btnsignouttest"}
                  //   onClick={handleSignoutDialog}
                >
                  Log out
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SystemAdministratorAppBar;
