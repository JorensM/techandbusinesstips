---
title: "How to measure the impact of your product updates"
excerpt: "Measuring the impact that the updates to your product cause is an important part
of managing a business. It helps you see and understand what works, what doesn't,
and why."
date: "2025-05-09T10:00:00"
author:
  name: Jorens M
---

*This post is affiliated with [gitnalytics.com](https://gitnalytics.com)*

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
are as few of those as possible. For example if you changed your brand and released
a new feature on the same day, it will be harder to say whether the new visitor
count changed due to the new feature or the change in the brand.

For this reason it is a good idea to keep updates that you want to measure resonably
far apart in terms of release dates, and try not to release them at the same time.

You might think that this kind of goes against the Agile principle of 
delivering new updates often, but keep in mind that this doesn't necessarily mean
that you can't release new updates often, but rather just the updates for which
you wish to track impact. These would probably usually be major updates or feature
releases, as opposed to small additions of bug fixes.

One great way to map your product updates to your stats is to use [Gitnalytics](https://gitnalytics.com).
It is a tool that allows you to look at your GitHub commit history and your Google Analytics
stats on a single chart and easily compare them and see which commits might've
affected your statistics.

## Surveys

Next up on the list is engaging with your users directly and making polls/surveys
to ask your users directly how they are finding the new updates. It will help you
understand how your users feel about a particular update and how it affects them.

When using the surveys approach, it is all about asking the right questions and
doing so in a non-intrusive way. Offer the user to take the survey and if they
decline the first time, don't push it onto them. Add an option to disable survey
notifications.

The questions should be such that answer what you want to know (obviously). But
besides that the questions should be worded in a clear and well defined manner so
there is as little room for ambiguity as possible (unless ambiguity is what you're looking for).

For example, you can ask your user 'Do you find this new feature useful?', and follow
up with a 'Why?'. You can get more specific and ask questions such as 'Do you feel that
this new feature improves the ROI of your work? If so, by how much?'. It all depends
on what you want to know and what is your definition of impact.

## Detailed tracking

Another way to measure the impact is to collect more specific data about your
user's behavior. Which areas are clicked most often, which pages are visited most
often, which ones are bounced most often, which ones are visited least often.

Collecting user data can give you insights into how introducing new updates changes
their behavior and whether it improves the user experience.

Personally I would not recommend this approach except in specific cases and in
a very careful manner, as it can be quite invasive in terms of the user's privacy
and if your terms of service are not clear, or if your tracking methods are no compliant
with policies such as GDPR, it can get you in legal trouble too.

In case you do decide to go with this approach, make sure that it is compliant
with your regional data privacy policies and is completely anonymous.

## Conclusion

In this article we explored some ways we can measure the impact of our product updates.
I hope you found this article useful and if you want to talk about anything or have
any questions, feel free to reach out.
