import React from "react";
import raw from "raw.macro";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import StackOverflowIcon from "@material-ui/icons/HorizontalSplit";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";

const latestPost = raw("../posts/2018/passed-qa.md");
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "", url: "#" },
  { title: "", url: "#" },
  { title: "Posts", url: "#" },
  { title: "Talks", url: "#" },
  { title: "Portfolio", url: "#" },
  { title: "", url: "#" },
  { title: "", url: "#" },
];

const mainFeaturedPost = {
  title: "OceanLife, a love letter",
  date: "October 2011",
  description:
    "Read this multi-part entry on how one of my side projects ended up reaching 10 years old & changing my life...",
  image: "https://source.unsplash.com/random",
  imageText: "OceanLife",
};

const featuredPosts = [
  {
    title: "Getting your users to upgrade",
    date: "December 2019",
    description:
      "Learn how we went about asking, then forcing users to upgrade their apps at Candide...",
    image: "https://source.unsplash.com/random",
    imageText: "'Encarter Encyclopedia' CD-ROMs",
  },
  {
    title: "Visualising your Slack workspace",
    date: "June, 2019",
    description:
      "Struggling to find information in Slack & want to change 'things'. If so, then click right this way...",
    image: "https://source.unsplash.com/random",
    imageText: "Bubble chart",
  },
];

const posts = [latestPost];

const sidebar = {
  title: "What's this?",
  description: "👋 It's my personal blog discussing software, hiring & teams.",
  archives: [
    { year: 2020, url: "#" },
    { year: 2019, url: "#" },
    { year: 2018, url: "#" },
    { year: 2017, url: "#" },
    { year: 2016, url: "#" },
    { year: 2015, url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon, url: "https://github.com/BrantApps" },
    {
      name: "Twitter",
      icon: TwitterIcon,
      url: "https://twitter.com/BrantApps",
    },
    {
      name: "Stack Overflow",
      icon: StackOverflowIcon,
      url: "https://stackoverflow.com/users/story/1348379",
    },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Branton's Yak" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Latest Posts..." posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
