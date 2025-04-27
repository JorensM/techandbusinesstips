---
title: "How to measure the impact of your product updates"
excerpt: "Measuring the impact that the updates to your product cause is an important part
of managing a business. It helps you see and understand what works, what doesn't,
and why."
date: "2025-04-27T10:00:00"
author:
  name: Jorens M
---

Measuring the impact that the updates to your product cause is an important part
of managing a business. It helps you see and understand what works, what doesn't,
and why.

Ideally, I suppose, one would know beforehand how effective a product update
or a new feature would be, and whether it is reasonable to introduce it at all.
But we know that this is often not the case, and oftentimes experimenting and leaps
of faith are required.

In cases where we have to take a leap of faith and introduce an update before
knowing the potential impact of this update, we have to make sure that we are measuring
this impact after releasing the update, in order to know if anything needs to be
changed, removed or if the update should be reverted whatsoever.

So, how *can* we measure the impact of our product updates?

## Comparing your product updates to your visitor stats

Probably the most intuitive and simple way to measure your impact is by comparing
your product updates to changes in your statistics.

For example, if your visitor engagement has been a steady horizontal line for the last
month, and after pushing a new update you've noticed a sudden rise or fall in this
statistic, it would be a pretty good guess to say that the update affected this statistic, 
granted that there aren't any other variables at play that might've affected the
statistic as well.

Speaking of other variables, in order to be more certain that a particular update
was in fact the cause of a change in statistics, you have to isolate the update
from any other possible side-effect-causing variables, and make sure that there
are as few of those as possible. For example if you changed a domain name and released
a new feature on the same day, it will be harder to say whether the new visitor
count increased due to the new feature or the change in the domain name.

For this reason it is a good idea to keep updates that you want to measure resonably
far apart in terms of release dates, and try not to release them at the same time.

You might think that this kind of goes against the Agile principle of 
delivering new updates often, but keep in mind that this doesn't necessarily mean
that you can't release new updates often, but rather just the updates for which
you wish to track impact. These would probably usually be major updates or feature
releases, as opposed to small additions of bug fixes.

One great way to map your product updates to your stats is to use [Gitnalytics](https://gitnalytics.vercel.app/).
It is a tool that allows you to look at your GitHub commit history and your Google Analytics
stats on a single chart and easily compare them and see which commits might've
affected your statistics.