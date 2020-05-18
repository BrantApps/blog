# Visualising Slack
#### June 2019, Candide, Lead Engineer

# Preamble
As companies grow in size there is a painful period where existing, organic modes of communication start to creak and let you down. This entry explains how to make evidence-based improvements to your use of instant messaging tools such as Slack.

## Knowing you have a problem
> "Hi folks, I wondered if you could..."

You've probably read messages that start like this. But what room was it sent to? Did 50 notifications get sent? Was the resolution a redirect to another room? We've all been here, however, if this is a common occurrence then your existing instant message (IM) communication paths are letting you down. Around the same time, you are likely hearing complaints that there are _just too many rooms!_. Either, or all of these symptoms are your canaries that information is becoming harder to find or, at worst, is being hidden and it's time to take action.

## Taking action
One of the easiest resolutions to problems involving a tool is to focus in on the tool itself, but don't do this just yet. When it comes to internal comms there are a couple of health checks you need to pass before getting into the _nitty gritty_ of how a tool is being used.

1. Are there > 1 instant messaging tools being used across the organisation? Are they valid usages?
2. Anecdotally, how many private rooms are there? Ask your colleagues or send out a survey. Nothing presented here can solve the problems of [information hiding](https://onlinelibrary.wiley.com/doi/abs/10.1002/job.737) which is a serious problem for many growing organisations. Cut this off at the root.
3. And finally, do new starters (and existing staff) have a quick start as to how to communicate with their peers and across the organisation? This is key to sustaining the changes you will make next.

So, you have 1 instant messaging platform in use, your culture encourages openess with private rooms reserved for warranted confidentiality and your new starters have a quick start on how to ask for help and communicate change. These changes alone, will result in sustained improved communications but your "chat-scape" (room names, purposes) is still a jumbled mess. It's time to get into the detail of how the tool is being used...

### Find your hotspots
A hotspot in this context are rooms that have high message traffic (number of messages) and a high member count (number of people in the room). If you are using Slack (where rooms are called channels and always start with a `#`) then channels such as  `#general` and `#support` are the first to come to mind. We can use the [Slack API](https://api.slack.com/) to take our first steps into visualising what is happening in your chat workspace. Here's what we want to draw;

<Image src="https://raw.githubusercontent.com/BrantApps/blog/master/src/features/posts/assets/visualising-slack/hotspots.png" alt="Find your hotspots"/>

#### On the x-axis, the channel's creation date and on the y-axis, the number of people in that channel. The Bubble size represents the number of messages sent over a given period. 

This kind of plot can provide your first evidence-based insight into how your company is using Slack.
Do bubbles tend to get larger over time? If so, this could be a hint that channels tend to evolve, taking on more than one purpose, collecting members and becoming a problem. Are there specific channels that both have a high number of members and highly trafficked from the get go? These channel are a potential source of distraction. We need to investigate why so many people need to know what's happening and take mitigating action to minimise disruptions.

### Fixing the confused channel
Channels with high traffic & high number of members from various disciplines tend to be confused. One minute, you are a passive observer of a chat between two engineers about a problem, next you are hearing that there are cakes in kitchen before you finally get a chance to ask for help with your analytics reports. Meanwhile, 20 other people click-and-scan just to clear their red dots. These losely related discussions with large amounts of waste (messages reaching people who don't need to see that message) represent confused channels.

What we need is a system whereby it is easy for a message to reach the right person with lowest waste. To do this we'll need to give our Slack workspace structure, making channel topics searchable by title and encouraging **more channels with fewer members in each**. Slack themselves [published](https://slackhq.com/advice-for-large-teams-on-slack) a very concise and instructive guide precisely about this task. If you are embarking on a wider refactor of your Slack channel workspace then read this guide. The key points are;

> With a greater number of topic- and project-specific channels, groups can focus their discussions among smaller numbers of people. Furthermore, each person can be in fewer channels, because only a handful of specific channels will be necessary for their daily work. More channels on a team doesn’t mean more work when they’re increasingly targeted and organized.

> Channel naming conventions are key

### Measuring 'channel commitment'
With our goal to allow the number of channels to grow in order to improve discussion focus and decrease number of members we can use the Slack API to track channel commitment. Here's how an organisation's channel commitment may look;

<Image src="https://raw.githubusercontent.com/BrantApps/blog/master/src/features/posts/assets/visualising-slack/fewer-people-more-channels.png" alt="Fewer people in more channels"/>

#### Flattening the curve by allowing an expansion of channels who have a narrow focus and fewer members will let team members find the right people and reduce distractions born out of irrelevant messages.

Tracking these two plots will provide on-going evidence as to how well your initiatives are are working out in practice.

## Kickstarting change
As your use of instant messaging evolves there will be an adoption lag as FOMO (Fear Of Missing Out) slows the process of members leaving these once highly trafficked rooms. To kick start the process there are a number of recommendations you can make to your peers including;
1. Normalising the act of leaving a room. It's OK to go, you can come back!
    * Bots can even be used to auto-suggest this such as the Slackbot _Suggestions_
2. Customising the default settings of your IM agent to your needs.
    * Chat systems allow you to customise the displayed rooms and notifications
3. Disable the use of tools such as `@here` and `@channel` in high attendee rooms

For Slack in particular here is a comprehensive guide from [RescueTime](https://blog.rescuetime.com/slack-focus-guide/).

## Use Slack? Generate your own Hotspot & Channel Commitment Plots
Having completed a similar exercise at [Candide](https://candidegardening.com) I put together a [command-line application](https://github.com/BrantApps/slack-channel-reader) that is capable of extracting the data you need to form these two plots at the touch of a button. Give it a go and get back to me [@BrantApps](https://twitter.com/BrantApps).

_Update 18/05/2020: No Code Approach:_ I noticed the Slack Workspace Administration tools now include an 'Analytics' section which provide many of the data points I discuss here by way of an data export.