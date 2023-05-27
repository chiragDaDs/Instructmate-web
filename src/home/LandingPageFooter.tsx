import { createStyles, Container, Group, ActionIcon, rem } from '@mantine/core';
// import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
// import Image from 'next/image';
const logoAspectRatio = 2.36;
const logoHeight = 50;

const useStyles = createStyles((theme) => ({
  footer: {
    background: "linear-gradient(180deg, rgba(251,79,20,1) 26%, rgba(255,127,80,1) 84%)",
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function LandingPageFooter() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <img src = "/logos/center_full.png" className='' alt = {""} height={logoHeight} width={logoHeight * logoAspectRatio} />
      </Container>
    </div>
  );
}