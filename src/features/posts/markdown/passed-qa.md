# Passed QA
#### April 2018, Just Eat, Technology Manager

I just left a retrospective where I wanted to gather the team’s thoughts on what we meant when we said an enhancement “Passed QA” or we pushed the _Ready for Release_ button in a well-known issue tracking system. It’s a little rough and ready (I literally just wrote it on the train home) and Android-centric but perhaps a fun read for other engineers/assurance professionals working with mobile. Enjoy…

Within any process where _things_ are made there is Quality Assurance (QA). This section aims to call out the responsibilities of the engineer/assurance-interested-party in ensuring that their changes undergo the right amount of rigour before being let loose on the wider population.

## What ‘QA’ does not mean

As if it needs calling out, QA does not mean the ‘manual testing person’ who sometimes appears at your desk, looking smug and saying “I broke it”. Manual testing is a facet to quality assurance but it need not require a dedicated employee called a Manual Tester. The person sitting next to you, your partner, your product owner are all great people to give a script to and say, “do something like this”, or in our case “order a pizza” etc.

## Do something like what?

To be in a position to pass the assurance step of any process you need to know what acceptable looks like. In software, this is usually distilled into the “Acceptance Criteria” of a task. If your ticket doesn’t have one of these and it’s causing a functional change to the system under test — stop. Do not pass go. Do not collect £200.

I’m willing to bet money your enhancement is not “Ready” to be worked on. Liaise with your team using techniques such as the 3 amigos method to define acceptance for your work. If your ticket is technical and would result in a contrived acceptance, then define the scenarios that your unit tests need to be exercised under. The 3 amigos technique can still be useful here since the (hopefully) varied background of your fellow team members will allow you to perform impact assessments more objectively.

> The lesson here is don’t start work that isn’t defined because you can’t know whether you can finish it.

## Android

Oh, Android, _how we love thee_. When exercising code on the Android OS and it’s myriad of form factors there are a series of techniques/tricks/tips you can deploy to ensure that your enhancement isn’t a one-hit-wonder of _Happy Path_ + _Ultra-fast Broadband_ + _Flagship Phone_. The proportion of people on these kind of devices is pretty high in some cohorts which gives us all that warm fuzzy feeling. However, if you’re an Aussie, rocking your Vodafone own-brand entry-level phone stuck on Kit Kat why should our app not work perfectly? Many Android engineers feel a deep sense responsibility to facilitate backward compatibility and (more specifically) not force users into dropping a grand on a phone to order a takeaway. After all, our app is very basic from a hardware demand standpoint and there is very little reason why our app could not support ‘The Next Billion’ via Android Go. (different point, I digress)

## The Checklist

1. Turn on “Don’t Keep Activities”, background the app, navigate around the app and have a bit of an explore around your change. This developer setting forces the app state to be serialized and the activity state to be lost respectively. If your activity state is restored to an unusable level (having to re-enter data/crashes) then you did it wrong. You did not pass QA.
2. Run it on our lowest of supported API levels — API 16 is the lowest at the time of writing. Run the app on lower level APIs especially if you’ve been fiddling with vectors or using the snazzy `drawableLeft`-type namespaces. _Spoiler: it will crash_. If the views don't render right, provide a good 'ol PNG fallback and move on with your lives. Don't waste time reengineering another SVG standard, instead, gracefully degrade. If your enhancement does not _gracefully degrade_, sorry, you did not pass QA.
3. Use the “GPU Profiler”. MainThread4life! Seriously, in the words of the now-departed Daniel Pidcock (he left, he’s not dead), UX is non-negotiable. Your MVP (Minimum Viable Product) status won’t save you from me failing your enhancement for janky scroll. If your UI isn’t acceptably buttery on a mid-range device then, you guess it…. You did not pass QA.
4. Run it on a Samsung. Sorry. If it doesn’t work well enough then… You did not pass QA.
5. Did you change a value/clear a value from a persisted store? And I don’t just mean databases, I mean our buddy `SharedPreferences` too. Perform an Upgrade Test and save many, many baby lambs from being slaughtered. Sometimes our use of SharedPreferences is almost as complicated as time itself so tread carefully here and test, test, test. So, if you did edit a persistent store and _didn't_ do an upgrade test then you did it wrong. You did not pass QA.
6. Multi-window. Ok, so not the most used feature of our beloved Android but if your enhancement doesn’t work nicely with it then there is a fair chance you’ve got your lifecycle methods messed up. You did not pass QA.
7. Design QA. Has the designer even seen what you’ve built? If there is a visual change, make it easy for your design colleagues to see their masterpieces on various form factors. My favourite approach to this is installing the app on various form factors and _physically walking over to their desk_. Over time, the illusive UI/UX designer will learn the Hockey/CI-foo for themselves and then, well, then you’re in trouble! If you’ve realised a design and the designer/owner hasn’t even seen it then… You did not pass QA.
8. Acceptance Criteria. I have no idea why this is number 8. This should be position -1. Anyways, this one is easy but most-bad if eloped. The enhancements need to do what we think they’re going to do. Sometimes, it’s OK to adjust criteria, in fact, lots of time it’s OK to adjust the criteria which is normally far from correct itself. But do it with the responsible party via the aforementioned 3 amigos technique. Change the acceptance without telling anyone? You did not pass QA. Your enhancement does not pass the documented acceptance? You obviously did not pass QA.
9. Tablet and small screen. We’re not iOS and we love our fragmentation. Don’t make UIs that are unusable on small or large screen devices. If a design conflicts with this requirement, raise it with the designer. You did not pass QA.
10. Be honest. Approach the assurance side of any process with your guard down. This is when you can learn or teach. Approaching it all cagey and defensive is going to cause friction and ultimately damage the user experience for the consumer. Not telling your colleague/partner/test engineer as much as you can about your enhancement/change? (Including the bits you are unsure of) You did not pass QA. ;)
