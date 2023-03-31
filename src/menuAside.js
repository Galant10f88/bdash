import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  //mdiReact,
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    to: "/error",
    label: "Order Cart",
    icon: mdiTable,
  },
  {
    to: "/error",
    label: "Order History",
    icon: mdiSquareEditOutline,
  },
  {
    to: "/error",
    label: "Pharmacies",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/error",
    label: "Hospitals",
    icon: mdiResponsive,
  },
  {
    to: "/error",
    label: "Patients",
    icon: mdiAccountCircle,
  },
  {
    to: "/",
    label: "Styles",
    icon: mdiPalette,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    to: "/error",
    label: "Error",
    icon: mdiAlertCircle,
  },
  {
    label: "Dropdown",
    icon: mdiViewList,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
  {
    href: "https://github.com/Galant10f88/",
    label: "GitHub",
    icon: mdiGithub,
    target: "_blank",
  },
];
