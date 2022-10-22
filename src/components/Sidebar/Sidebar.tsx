import React from "react";
import {
  Box,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  MoveToInbox,
  Mail,
  StarBorder,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material/";
import Logo from "../../assets/modernresolve.png";

import { ISidebar } from "../../core/componentsInterfaces";

const adminSidebarData = [
  {
    title: "Admin Overview",
    dropDown: false,
    // link: routerSpiels.router[0].router_obj.admin_dashboard,
  },
  {
    title: "Product Management",
    dropDown: false,
    // link: routerSpiels.router[0].router_obj.admin_product_mgmt,
  },
  {
    title: "User Management",
    dropDown: false,
    // link: routerSpiels.router[0].router_obj.admin_user_mgmt,
  },
];

const SystemSidebar: React.FC<ISidebar> = (props) => {
  const {
    open,
    handleDrawerClose,
    theme,
    handleClick,
    dropDown,
    Drawer,
    DrawerHeader,
  } = props;
  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#051e34",
            color: "white",
          },
        }}
      >
        <Box className="flex flex-col justify-between h-full">
          <Box className="flex flex-col">
            <DrawerHeader>
              <Box className="flex gap-2 items-center">
                <img src={Logo} style={{ height: "38px" }} alt="logo" />
                <h3 className="font-logo font-medium text-white text-xl">
                  Modern Resolve
                </h3>
              </Box>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRight style={{ color: "white" }} />
                ) : (
                  <ChevronLeft style={{ color: "white" }} />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider className="bg-sideBarTabHover" />
            <List style={{ marginTop: "5px" }}>
              {adminSidebarData.map((text, index) => (
                <Box className="flex flex-col items-center">
                  <ListItem
                    key={text.title}
                    disablePadding
                    sx={{
                      display: "block",
                      background: "#122c44",
                      margin: "4px 0px",
                      borderRadius: "10px",
                      width: "90%",
                      "&:hover": {
                        backgroundColor: "#253d53",
                      },
                    }}
                  >
                    {text.dropDown ? (
                      <>
                        {/* DROPDOWN */}
                        <ListItemButton onClick={handleClick}>
                          <ListItemIcon>
                            <MoveToInbox className="text-white" />
                          </ListItemIcon>
                          <ListItemText primary="Inbox" />
                          {dropDown ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={dropDown} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                <StarBorder className="text-white" />
                              </ListItemIcon>
                              <ListItemText primary="Starred" />
                            </ListItemButton>
                          </List>
                        </Collapse>
                      </>
                    ) : (
                      <>
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                              color: "white",
                            }}
                          >
                            {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                          </ListItemIcon>
                          <ListItemText
                            primary={text.title}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </>
                    )}
                  </ListItem>
                </Box>
              ))}
            </List>
            <Divider className="bg-sideBarTabHover" />
            <List>
              {["Our Products", "Settings"].map((text, index) => (
                <Box className="flex flex-col items-center">
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{
                      display: "block",
                      background: "#122c44",
                      margin: "4px 0px",
                      borderRadius: "10px",
                      width: "90%",
                      "&:hover": {
                        backgroundColor: "#253d53",
                      },
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color: "white",
                        }}
                      >
                        {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Box>
              ))}
            </List>
          </Box>
          <Box className="flex flex-col py-2 gap-2">
            <Divider className="bg-sideBarTabHover" />
            <h3
              className={
                open ? "block font-serif text-white text-center" : "hidden"
              }
            >
              All rights Reserved MDR 🔥
            </h3>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SystemSidebar;
