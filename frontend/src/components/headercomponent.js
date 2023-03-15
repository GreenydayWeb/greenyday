import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Space,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    title: "Salad",
    links: "/menu/",
    items: "샐러드",
  },
  {
    title: "Sandwich & Wrap",
    links: "/menu/",
    items: "샌드위치",
  },
  {
    title: "Greek yogyrt & Granola",
    links: "/menu/",
    items: "그릭요거트",
  },
  {
    title: "Side & Drink",
    links: "/menu/",
    items: "사이드",
  },
  {
    title: "Lunch box",
    links: "/menu/",
    items: "런치박스",
  },
];

function HeaderComponent() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <div>
          <Link href={item.links + item.items}>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
          </Link>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <Header
        style={{ backgroundColor: "rgba(236, 228, 215, 1)" }}
        height={60}
        px="md"
      >
        <Group position="center" sx={{ height: "100%" }}>
          <Group
            sx={{ height: "100%" }}
            spacing={100}
            className={classes.hiddenMobile}
          >
            <a href="/about" className={classes.link}>
              <Text fz="xl">About</Text>
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="/menu/샐러드" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      <Text fz="xl">Menu</Text>
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                sx={{ overflow: "hidden" }}
                style={{ backgroundColor: "rgba(236, 228, 215, 1)" }}
              >
                <Group position="apart" px="md">
                  <Text fw={500}>Menu</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              <Text fz="xl">Nutrition</Text>
            </a>
            <a href="#" className={classes.link}>
              <Text fz="xl">Store</Text>
            </a>
          </Group>
          <Space w="xl" />
          <Group className={classes.hiddenMobile} ml="xl">
            <Button variant="default">
              <a href="/loginpage/login">Log in</a>
            </Button>
            <Button variant="default">
              {" "}
              <a href="/loginpage/signup">Sign up</a>
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="GreenyDay"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea
          h={`calc(100vh - ${rem(60)})`}
          mx="-md"
          style={{ backgroundColor: "rgba(236, 228, 215, 1)" }}
        >
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <a href="/about" className={classes.link}>
            <Text fz="xl"> About</Text>
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                <Link href="/menu/샐러드" className={classes.link}>
                  <Text fz="xl">Menu</Text>
                </Link>
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>

          <a href="#" className={classes.link}>
            <Text fz="xl"> Nutrition</Text>
          </a>

          <a href="#" className={classes.link}>
            <Text fz="xl"> Store</Text>
          </a>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">
              <a href="/loginpage/login">Log in</a>
            </Button>
            <Button variant="default">
              {" "}
              <a href="/loginpage/signup">Sign up</a>
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
export default HeaderComponent;
