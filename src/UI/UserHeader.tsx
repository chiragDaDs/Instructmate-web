import { useState } from "react";
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from "@tabler/icons-react";
import {
  Files,
  FilePlus,
  CheckupList,
  CalendarEvent,
  Chalkboard,
  Bell
} from "tabler-icons-react";
const useStyles = createStyles((theme) => ({
  tab: {
    fontWeight: 500,
    // height: rem(38),
    backgroundColor: 'transparent',
    marginRight: "6px",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&[data-active]": {
      borderColor: "#ff4500",
      color: "#ff4500",
      borderTopLeftRadius: "18px",
      borderTopRightRadius: "18px",
    }
  }
}));


interface HeaderTabsProps {
  user: { name: string; image: string };
  tabs: string[];
}

export function UserHeader({ user, tabs }: HeaderTabsProps) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const logoAspectRatio = 2.36;
  const logoHeight = 95;

  const items = tabs.map((tab) => (
    <Tabs.Tab className="" value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <header className={`${classes.header} bg-header-background`}>
     
      {/* <Container> */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div>
          <img
            src="/logos/side_full.png"
            className="ml-3 mt-2"
            alt={""}
            height={logoHeight}
            width={logoHeight * logoAspectRatio}
          />
          </div>
          <div>
            {/* <h1 className="text-red-600 font-dancing text-2xl font-bold" >Hello {user.name}</h1> */}
          </div>
          <div>
             <Container className="mt-2" >
        <Group position="apart">
        <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton>
                <Bell></Bell>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Nothing to Show</Menu.Label>
            </Menu.Dropdown>
          </Menu>

            <Menu.Target>
              <UnstyledButton>
                <IconMessage></IconMessage>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Nothing to Show</Menu.Label>
            </Menu.Dropdown>
          </Menu>
          

          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton>
                <Group spacing={7}>
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    radius="xl"
                    size={60}
                  />
                  {/* <Text className="text-black"
                    weight={500}
                    size="sm"
                    sx={{ lineHeight: 1, color: theme.white }}
                    mr={3}
                  >
                    {user.name}
                  </Text> */}
                  <IconChevronDown size={rem(12)} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
                Account settings
              </Menu.Item>
              <Menu.Item
                icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}
              >
                Change account
              </Menu.Item>
              <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>
                Logout
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item icon={<IconPlayerPause size="0.9rem" stroke={1.5} />}>
                Pause subscription
              </Menu.Item>
              <Menu.Item
                color="red"
                icon={<IconTrash size="0.9rem" stroke={1.5} />}
              >
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
          </div>
        </div>
        <div className="md:flex justify-center sm:none">
          <Tabs
            defaultValue="courses"
            variant="outline"
            // variant="pills"
            radius="md"
            classNames={{
              // root: classes.tabs,
              // tabsList: classes.tabsList,
              tab: classes.tab,
            }}
          >
            <Tabs.List>
              <Tabs.Tab value="courses" key="Courses">
                <div className="flex">
                  <Files
                    className="mt-[-4px]"
                    size={25}
                    strokeWidth={2}
                  ></Files>
                  Courses
                </div>
              </Tabs.Tab>
              <Tabs.Tab value="newCourse" key="Courses">
                <div className="flex">
                  <FilePlus
                    className="mt-[-4px]"
                    size={25}
                    strokeWidth={2}
                  ></FilePlus>
                  New Course
                </div>
              </Tabs.Tab>
              <Tabs.Tab value="todo" key="Courses">
                <div className="flex">
                  <CheckupList
                    className="mt-[-4px]"
                    size={25}
                    strokeWidth={2}
                  ></CheckupList>
                  To-Do
                </div>
              </Tabs.Tab>
              <Tabs.Tab value="calender" key="Courses">
                <div className="flex">
                  <CalendarEvent
                    className="mt-[-4px]"
                    size={25}
                    strokeWidth={2}
                  ></CalendarEvent>
                  Calender
                </div>
              </Tabs.Tab>
              <Tabs.Tab value="colabSketch" key="Courses">
                <div className="flex">
                  <Chalkboard
                    className="mt-[-4px]"
                    size={25}
                    strokeWidth={2}
                  ></Chalkboard>
                  ColabSketch
                </div>
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </div>
      </div>
      {/* </Container> */}
    </header>
  );
}
