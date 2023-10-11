import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Text } from '@mantine/core';
import { useCookies } from 'react-cookie';
import getNavbar from "../../controllers/headerFetcher";


function useDisclosure(
  initialState: boolean,
  callbacks?: { onOpen?(): void; onClose?(): void }
) {
  const [opened, setOpened] = useState(initialState);

  const open = () => {
    if (!opened) {
      setOpened(true);
      callbacks?.onOpen?.();
    }
  };

  const close = () => {
    if (opened) {
      setOpened(false);
      callbacks?.onClose?.();
    }
  };

  const toggle = () => {
    opened ? close() : open();
  };

  return [opened, { open, close, toggle }] as const;
}

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  }
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export default function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const [cookie, setCookie] = useCookies(["auth"]);
  const links = getNavbar(cookie?.auth ? true : false)

  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={cx(classes.link)} target={link.target}>
      {link.label}
    </a>
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
      <a key='CAM tools' href='/' target='_self'>
          <Text size="xl">CAM tools</Text>
        </a>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  );
}
