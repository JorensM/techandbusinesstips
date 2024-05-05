---
title: "Multi-factor authentication"
excerpt: "Multi-factor authentication, or MFA, is a form of authentication where, in order to authenticate, the user must go through several steps of authentication instead of only a single step."
date: "2024-05-04T17:00:00"
author:
  name: Jorens M
---
Security is a major part of business and web development. All companies try to maximize their security in various ways, and one of those ways is multi-factor authentication.

In this article I will tell you all you need to know about multi-factor authentication, both from the perspective of a developer and a bussines person.

## What is multi-factor authentication?
So what exactly is multi factor authentication?

**Multi-factor authentication, or MFA, is a form of authentication where, in order to authenticate, the user must go through several steps of authentication instead of only a single step.**

Most commonly in consumer-facing apps and website, there is only a single step to authentication - providing your username and password. It’s more common to find MFA in B2B apps/websites, although some consumer websites allow you to enable MFA as well.

The most common form of MFA is 2FA - 2 factor authentication, meaning that there are two steps to the authentication flow.

## Why is multi-factor authentication useful?

Multi factor authentication is useful because it provides an additional layer of security to accessing an account. Even if an intruder manages to find/guess the password of the user, they will still need to go through additional steps of authentication, which will highly decrease the likelihood of the intruder successfully authenticating as the user, especially since the additional steps often rely on a physical factor such as the user’s mobile phone or biometric data.

## Forms of Multi-factor authentication

There are multiple forms to multi-factor authentication, meaning that there are several ways how a user can be asked to authenticate in addition to the first step. The list below is ordered starting by most commonly used forms to the least commonly used ones.

 * **SMS verification.** In this form of authentication, the user is sent a code to their phone via SMS which they need to enter on the login screen in order to authenticate
 * **Email verification.** In this form of authentication, the user is sent a code to their email address which they use to authenticate.
 * **Authenticator app.** These are specialized “authenticator” apps that you can install on your phone. For each website that uses this form of authentication, the authenticator app generates (and regenerates every few minutes) a temporary code that can be used to authenticate during MFA.
 * **Physical security keys.** Physical security keys are most often used for on-site entry access. These can be cards, chips, USB drives that you scan against a scanner device in order to gain access.
 * **Biometric authentication.** In this form of authentication, the user uses their biometric data to authenticate, for example by doing a fingerprint scan, a retina scan, voice recording or face capture.

## Conclusion

In this article we explored multi-factor authentication, what it is, how it is useful and the different forms of MFA. I hope this article was useful to you and that you learned something new. If you have any questions or comments feel free to leave them down below or email me directly at jorensmerenjanu@gmail.com
