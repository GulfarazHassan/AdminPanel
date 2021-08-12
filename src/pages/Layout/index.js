import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  TextField,
  Menu,
  MenuItem,
  ButtonBase,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./LayoutElements";
import {
  ControlPointOutlined,
  Notifications,
  ExpandMoreOutlined,
} from "@material-ui/icons";
import { COLORS } from "../../res/Colors";
import { SidebarData } from "./SidebarData";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { MenuOutlined } from "@material-ui/icons";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
import logo from "../../assets/Images/logo.png";

const Layout = ({ children, ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpened, setIsOpened] = useState(false);

  // props.isOpened = isOpened;
  // const classes = useStyles(props);
  const classes = useStyles({ isOpened: isOpened });
  const _handleClick = () => {
    setIsOpened(!isOpened);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      {/* app bar */}{" "}
      <AppBar className={classes.appbar} elevation={2} color={"inherit"}>
        <Toolbar className={classes.toolbar}>
          <div>
            <IconButton onClick={_handleClick}>
              <MenuOutlined />
            </IconButton>
          </div>
          <TextField
            className={classes.searchText}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            variant={"standard"}
            placeholder={"Search transactions, invoices or help"}
          />
          <div className={classes.iconsWrapper}>
            <IoMdHelpBuoy
              size={24}
              cursor={"pointer"}
              className={classes.iconStyle}
            />
            <IoChatbubblesSharp
              size={24}
              cursor={"pointer"}
              className={classes.iconStyle}
            />
            <Notifications
              size={24}
              cursor={"pointer"}
              className={classes.iconStyle}
            />
            <div className={classes.dropdown} onClick={handleClick}>
              <Typography variant={"body2"} className={classes.dropdownText}>
                UĞUR ATEŞ
              </Typography>
              <ExpandMoreOutlined className={classes.dropdownIcon} />
            </div>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: "bottom",
              }}
              transformOrigin={{
                vertical: "top",
              }}>
              <MenuItem className={classes.menuItem} onClick={handleClose}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Typography className={classes.menuText}>
                    Status :{" "}
                  </Typography>
                  <Typography style={{ marginLeft: 5 }}> Online</Typography>
                </div>
              </MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleClose}>
                Account setting
              </MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleClose}>
                Feedback
              </MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleClose}>
                Logout
              </MenuItem>
            </Menu>
            <img src={logo} />
          </div>
        </Toolbar>
      </AppBar>
      {/* sidebar */}
      {isOpened && (
        <Drawer
          className={classes.drawer}
          variant='permanent'
          anchor='left'
          classes={{ paper: classes.drawerPaper }}>
          <div className={classes.title} onClick={_handleClick}>
            <ControlPointOutlined color={COLORS.primary} />
            <Typography
              variant='h5'
              style={{
                color: COLORS.primary,
                fontWeight: "500",
                marginLeft: 10,
              }}>
              PANDA/TA
            </Typography>
          </div>
          <List>
            {SidebarData.map((item) => (
              <ListItem
                key={item.title}
                button
                onClick={() => history.push(item.path)}
                className={
                  location.pathname == item.path ? classes.active : null
                }>
                <ListItemIcon style={{ color: COLORS.light_blue }}>
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  style={{ color: COLORS.primary }}
                  classes={{ root: classes.root2 }}>
                  {item.title}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
      <div className={classes.page}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
