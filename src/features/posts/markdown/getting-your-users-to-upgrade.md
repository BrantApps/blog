# Getting your users to upgrade [WIP]
#### December 2019, Candide, Lead Engineer

# Preamble
The worse aspect of developing native mobile applications is the very 1990s model
of getting your users to upgrade to the latest and greatest version of your product. At best, your users languishing 10 versions behind are just missing out. At worst, those users are vulnerable to a security flaw or experiencing crashes. As products mature and platforms evolve you are soon going to find yourself discussing _force upgrading_ of users.

## The cost of not
What you loose in terms of agility
The trade-offs between freedom to use improved APIs vs dropping support for some users
The testing load

## Not _just_ a force upgrade
Force upgrading is just one aspect. However, you also need to consider;
1. Non-forced upgrade prompts
2. Ending feature development for a branch of the application that can't use newer features. A process known as 'sunsetting'. (These version could still be updated with critical security patches)
3. The remote disabling of clients that soon won't function correctly or safely, a process referred to here as 'killing'.

### The 'Force upgrade'

### The 'Recommendended Upgrade'

### The 'Sunset'

### The 'Kill'

## Avoiding misuse
1. The weaponsation of force upgrade - not a growth/marketing tool
2. Opinion based sunset/kill - need evidenced rules for platform drops. Not opinions.
3. Over-recommendation - not every feature is relevant to everyone. Don't overuse recommendation.

## Some guidelines
Force upgrade for critical security issues, (very) bad releases, before killing an app version where the user **can upgrade**
Recommend for major product releases or every 6 months. No more than 1 every half year.
Sunset based on SDK roadmaps/performance considersations.
Kill based on End of Life support / no meaningful user base / breaking changes where affected users **can't upgrade**

## Candide case study
December recommended upgrade adoption.
June recommended upgrade for just chat users.