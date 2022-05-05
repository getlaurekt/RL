import { createStyles, Container, Transition } from "@mantine/core";
import Banner from "../Banner/Banner";

const Data = {
  image:
    "https://sm.ign.com/t/ign_pl/screenshot/default/rocketleague-5f50b63cbed6d_7zak.1280.jpg",
  title: "Gameplay",
  description: "Read more about proper gameplay on the field!",
  action: {
    label: "Read more",
    link: "#",
  },
};

const useStyle = createStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    marginTop: "2rem",
    overflowX: "auto",
    gap: "1rem",
    scrollbarWidth: "none",
    scrollSnapType: "x mandatory",
    scrolbarWidth: "none",
    "&::-webkit-scrollbar": {
      width: "0",
    },
  },
  banner: {
    flex: "0 0 auto",
    scrollSnapAlign: "center",
  },
}));

export default function Demo() {
  const { classes } = useStyle();
  return (
    <Container className={classes.container}>
      <Transition
        mounted={true}
        transition="scale"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => (
          <>
            <Banner style={styles} {...Data} className={classes.banner} />
            <Banner style={styles} {...Data} className={classes.banner} />
            <Banner style={styles} {...Data} className={classes.banner} />
            <Banner style={styles} {...Data} className={classes.banner} />
            <Banner style={styles} {...Data} className={classes.banner} />
          </>
        )}
      </Transition>
    </Container>
  );
}
