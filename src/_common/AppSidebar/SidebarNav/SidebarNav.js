import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

import IconProfile from "@material-ui/icons/AccountBox";
import IconAccount from "@material-ui/icons/AccountBalance"; //
import IconAdmin from "@material-ui/icons/VpnKey";
import IconDashboard from "@material-ui/icons/Dashboard";
import IconSearch from "@material-ui/icons/Search";
import IconError from "@material-ui/icons/Error";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import IconQuestionAnswer from "@material-ui/icons/QuestionAnswer";
import IconStars from "@material-ui/icons/Stars";
import IconNewReleases from "@material-ui/icons/NewReleases";
import IconSettings from "@material-ui/icons/Settings";
import IconGroup from "@material-ui/icons/Group";
import IconPreson from "@material-ui/icons/Person"; //

import NavList from "./NavList";

const SidebarNav = (props) => {
  const { isCollapsed } = props;
  const classes = useStyles();

  const itemsCore = [
    {
      name: "Home",
      Icon: IconDashboard,
      link: "/"
    },
    {
      name: "ENG Program",
      Icon: IconDashboard,
      items: [
        {
          name: "Master Data",
          link: "/program/master-data"
        },
        {
          name: "Change Requests",
          link: "/program/requests"
        },
        // {
        //   name: "Sub-Programs",
        //   link: "/program/subprograms"
        // },
        {
          name: "Change History",
          link: "/program/history"
        }
      ]
    },




    {
      name: "Equipment",
      items: [
        {
          name: "Under Development"
        }
      ]
    },
    {
      name: "Facilities",
      items: [
        {
          name: "Under Development"
        }
      ]
    },
    // {
    //   name: 'Account',
    //   Icon: IconProfile,
    //   items: [
    //     {
    //       name: 'Profile',
    //       link: '/profile/me',
    //     },
    //     {
    //       name: 'Organization',
    //       link: '/organization',
    //     },
    //   ],
    // },
    {
      name: "System",
      Icon: IconSettings,
      items: [
        {
          name: "User Access",
          link: "/administration/user-management",
          Icon: IconGroup
        },
        {
          name: "Notification Management",
          link: "/administration/user-management",
          Icon: IconGroup
        }
      ]
    }
    // {
    //   name: 'Search',
    //   link: '/search',
    //   Icon: IconSearch,
    // },
    // {
    //   name: 'Settings',
    //   link: '/settings',
    //   Icon: IconSettings,
    // },
    // {
    //   name: 'Error',
    //   link: '/error',
    //   Icon: IconError,
    // },
  ];

  const itemsTheme = [
    // {
    //   name: 'Why Modular?',
    //   link: '/demo/features',
    //   Icon: IconNewReleases,
    //   IconClassName: classes.iconFeatures,
    // },
    // {
    //   name: "Reference Guide",
    //   link: "/demo/docs",
    //   Icon: IconLibraryBooks,
    //   IconClassName: classes.iconDocs
    // }
    // {
    //   name: 'Supporters',
    //   link: '/demo/supporters',
    //   Icon: IconStars,
    //   IconClassName: classes.iconSupporters,
    // },
    // {
    //   name: 'Discuss',
    //   link: '/demo/discuss',
    //   Icon: IconQuestionAnswer,
    //   IconClassName: classes.iconDiscuss,
    // },
  ];

  return (
    <div>
      <List className={classes.navList} disablePadding>
        <ListSubheader
          disableSticky={true}
          className={classes.navListHeader}
        ></ListSubheader>
        <NavList isCollapsed={isCollapsed} items={itemsCore} />
      </List>

      <List className={classes.navList} disablePadding>
        <ListSubheader
          disableSticky={true}
          className={classes.navListHeader}
        ></ListSubheader>
        <NavList isCollapsed={isCollapsed} items={itemsTheme} />
      </List>
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    navList: {
      width: theme.sidebar.width,
      fontSize: "1.1em",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em"
    },
    navListHeader: {
      textAlign: "center",
      color: "rgba(255,255,255,0.5)"
    },
    iconFeatures: {
      color: "#95de3c"
    },
    iconDocs: {
      color: "#f8cda9"
    },
    iconSupporters: {
      color: "#e3b546"
    },
    iconDiscuss: {
      color: "#ccc"
    }
  })
);

export default SidebarNav;
