const staticConfig = {
  debug: process.env.NODE_ENV !== "production",
  website: "https://brant.app",
  githubUrl: "https://github.com/BrantApps",
  twitterUrl: "https://twitter.com/BrantApps",
  stackoverflowUrl: "https://stackoverflow.com/users/story/1348379",
  mainFeaturedPost: {
    title: "OceanLife, a love letter 💚",
    date: "October 2011",
    description:
      "Read this multi-part entry on how one of my side projects ended up reaching 10 years old & changing my life...",
    image: "https://source.unsplash.com/weekly?ocean",
    imageText: "OceanLife",
    path: "/posts/oceanlife-a-story",
  },
  featuredPosts: [
    {
      title: "Getting your users to upgrade",
      date: "December 2019",
      description:
        "Learn how we went about asking, then forcing users to upgrade their apps at Candide...",
      image: "https://source.unsplash.com/weekly?mountain",
      imageText: "'Encarter Encyclopedia' CD-ROMs",
      path: "/posts/getting-your-users-to-upgrade",
    },
    {
      title: "Visualising Slack",
      date: "June, 2019",
      description:
        "Learn how to make evidence-based changes to your use of Slack improving knowledge sharing & minimising distraction...",
      image: "https://source.unsplash.com/weekly?graph",
      imageText: "Bubble chart",
      path: "/posts/visualising-slack",
    },
  ],
  latestPost: "../posts/markdown/passed-qa.md",
}

export default staticConfig
