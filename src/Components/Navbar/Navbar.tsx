import React from "react";
import {
  Navbar,
  Group,
  Code,
  ScrollArea,
  createStyles,
  Text,
  Title,
} from "@mantine/core";
import { Users, User, Home, Car, Book } from "tabler-icons-react";
/* import { UserButton } from "../UserButton/UserButton"; */
import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup";
import ColorScheme from "../ColorScheme/ColorScheme";
/* import { Logo } from "./Logo"; */

const mockdata = [
  { label: "Home", icon: Home },
  {
    label: "Teams",
    icon: Users,
    initiallyOpened: false,
    links: [
      { label: "Competitive", link: "/" },
      { label: "Freestyle", link: "/" },
      { label: "No-Flip", link: "/" },
    ],
  },
  {
    label: "Players",
    icon: User,
    links: [
      { label: "Cliphitters", link: "/" },
      { label: "Pro", link: "/" },
    ],
  },
  {
    label: "Car Designs",
    icon: Car,
    links: [
      { label: "Common", link: "/" },
      { label: "Exclusives", link: "/" },
      { label: "Very Rare", link: "/" },
      { label: "Import", link: "/" },
      { label: "Exotic", link: "/" },
      { label: "Limited", link: "/" },
      { label: "Premium", link: "/" },
    ],
  },
  {
    label: "Academy",
    icon: Book,
    links: [
      { label: "Basics", link: "/" },
      { label: "Rotations/Positioning", link: "/" },
      { label: "Mechanics", link: "/" },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  brand: {
    letterSpacing: "0.1em",
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function NavbarNested() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar
      height={"100vh"}
      width={{ sm: 300 }}
      p="md"
      className={classes.navbar}
    >
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Title order={3} className={classes.brand}>
            {/* <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon> */}
            Rocket
            <Text color="blue" inherit component="span">
              Lib
            </Text>
          </Title>
          <Code sx={{ fontWeight: 700 }}>v0.0.2</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <ColorScheme />
        {/* <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        /> */}
      </Navbar.Section>
    </Navbar>
  );
}
