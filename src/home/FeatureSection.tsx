import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  ThemeIcon,
  Container,
  rem,
} from "@mantine/core";

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    iconSrc: "./images/ExamIcon.svg",
  },
  {
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    iconSrc: "./images/ExamIcon.svg",
  },
  {
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    iconSrc: "./images/ExamIcon.svg",
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function FeaturesSection() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <ThemeIcon
        radius="xl"
        size="xl"
        variant="gradient"
        gradient={{ from: "orange", to: "red" }}
      >
        <img src="https://img.icons8.com/dotty/80/000000/test-passed.png" />
      </ThemeIcon>
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge color="red" size="xl" variant="outline">
          Teacher's Ally in Education
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Teach smarter with <span className="bg-orange-red text-white rounded-md ">InstructMate</span>  - the AI-powered LMS for
        teacherpreneurs.
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
      "Empowering teachers to take their courses online, our platform enables seamless management of courses of any size, from small cohorts to massive open online courses (MOOCs). Discover the future of education, where learning knows no bounds.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
