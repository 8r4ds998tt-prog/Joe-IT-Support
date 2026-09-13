/* ---------------------------------------------------------------------------
   THE ONLY FILE YOU EDIT.

   One block per month. Copy the whole block, change the key, edit the numbers.
   The page works out the month-on-month changes itself — don't calculate them.

   Leave anything you don't know as null. The page shows a dash rather than a
   wrong number, which is always the better option in front of Joe.

   Derived automatically, so don't fill them in:
     click-through rate   (clicks ÷ impressions)
     cost per click       (spend ÷ clicks)
     cost per enquiry     (spend ÷ enquiries)
--------------------------------------------------------------------------- */

window.REPORT = {

  updated: "2026-09-13",
  current: "2026-09",          // which month the page opens on

  months: {

    "2026-09": {
      label: "September 2026",

      // Set to true once there are real ad figures in here.
      live: true,

      // The paragraph Joe actually reads. Write it last. Plain English.
      headline:
        "Your £248 bought 346 clicks last month — that's a lot of people, at " +
        "about 72p each, which is cheap for this sort of work. So the money " +
        "isn't being wasted on expensive clicks. It's that 346 visits should be " +
        "producing more than a handful of enquiries, which points at who is " +
        "clicking rather than what they cost. Exactly what you suspected. " +
        "I've also been through the website: six of your ten pages tell Google " +
        "they're about the same thing, and your nineteen five-star reviews are " +
        "invisible to it entirely.",

      ads: {
        spend: 248,
        impressions: 3540,
        clicks: 346,
        conversions: null,
        tracked: false,        // is the ads account recording enquiries yet?
        note: "Conversion tracking isn't set up, so the account can't tell which " +
              "of those 346 clicks led anywhere. Until it can, Google is " +
              "optimising for clicks rather than enquiries — and it's very good " +
              "at getting clicks."
      },

      enquiries: {
        total: 0,
        booked: 0,
        byChannel: { phone: 0, form: 0, email: 0, other: 0 }
      },

      // The website side. All of this is measured from the live site.
      // status: "ok" | "poor" | "none"
      website: {
        checked: "2026-09-13",
        pages: 10,
        ranking: "Both your home page and services page come up on the first " +
                 "page of Google for \"private autism assessment Lincolnshire\" " +
                 "— against NHS trusts and established clinics. That's a good " +
                 "starting position, not a problem to fix.",
        checks: [
          { label: "Pages loading properly",        got: 10, of: 10, status: "ok",
            note: "No broken pages." },
          { label: "Pages with their own main heading", got: 4, of: 10, status: "poor",
            note: "Six pages share one identical heading, so Google can't tell what each is about." },
          { label: "Pages with a unique title",     got: 7, of: 10, status: "poor",
            note: "Services, Fees and Contact all show the same title in search results." },
          { label: "Pages with a proper description", got: 6, of: 10, status: "poor",
            note: "Three use a 30-character description; Meet the Team has none at all." },
          { label: "Pages Google can read properly", got: 0, of: 10, status: "none",
            note: "No structured data anywhere — Google is guessing at what the practice does." },
          { label: "Reviews visible to Google",     got: 0, of: 19, status: "none",
            note: "Nineteen five-star reviews that search engines currently cannot see." }
        ],
        best: "Your Q&A page is the strongest thing on the site — around 1,200 " +
              "words answering ten real questions, and properly structured. It's " +
              "the model the other pages should follow.",
        thin: "Fees is about 85 words and Areas Covered lists eleven towns in " +
              "roughly the same, so it ranks for none of them."
      },

      // What people actually typed before your ad appeared.
      // verdict: "useful" | "wasted" | "unclear"
      terms: [],

      // What was changed in the account this month.
      changes: [],

      insights: [
        {
          title: "346 clicks is a lot of people for £248",
          body: "At 72p a click you're getting plenty of traffic — the problem " +
                "isn't the price. Nearly one in ten people who see your ad click " +
                "it, which is a high rate and usually means the ads are appearing " +
                "for broad searches that sound relevant but aren't. My working " +
                "theory is you're paying for people researching autism generally, " +
                "or looking for the NHS route, rather than people ready to book " +
                "privately. The search terms report will settle it."
        },
        {
          title: "Your hunch about conversion tracking was right",
          body: "GoDaddy's website builder won't let you add tracking code where " +
                "Google Ads normally needs it. It's a real limitation, not " +
                "something you've set up wrong. There are routes around it using " +
                "the Google settings already in your dashboard, and that's job one."
        },
        {
          title: "Following visitors around the web isn't allowed here",
          body: "Google restricts personalised advertising for health conditions, " +
                "and autism is explicitly covered. So retargeting and uploading " +
                "contact lists are off the table. If an agency ever offers you " +
                "either, they haven't read the policy. It also means getting the " +
                "search targeting right is the whole game — there's no second bite."
        },
        {
          title: "One assessment pays for seven months of advertising",
          body: "At £248 a month against a £1,895 assessment, the ad spend isn't " +
                "really the thing to worry about. Two bookings a year and it has " +
                "already paid for itself several times over. Worth keeping in " +
                "proportion before we go optimising anything."
        }
      ],

      activity: [
        { date: "2026-09-13", minutes: 90,
          summary: "Went through all ten pages of the site. Six share an identical main heading; three share one description. Full fix list written up." },
        { date: "2026-09-13", minutes: 30,
          summary: "Looked into the conversion tracking problem you raised. Confirmed it's a genuine GoDaddy restriction, not a setup error." },
        { date: "2026-09-13", minutes: 20,
          summary: "Checked Google's advertising rules for health services, so we don't build something that gets rejected later." },
        { date: "2026-08-16", minutes: 60,
          summary: "Tracked down the Google error emails. A GoDaddy sign-up page was switched on but never published. Turned off — the error clears itself." }
      ],

      next: [
        "Pull the search terms report and find out what those 346 clicks were actually searching for",
        "Work out how much conversion tracking we can get working on GoDaddy",
        "Set up the Google Business Profile so the nineteen reviews start counting"
      ]
    }

    /* ---------------------------------------------------------------------
       NEXT MONTH — copy this, uncomment, fill in:

    ,"2026-10": {
      label: "October 2026",
      live: true,
      headline: "",
      ads: { spend: null, impressions: null, clicks: null, conversions: null,
             tracked: false, note: "" },
      enquiries: { total: 0, booked: 0, byChannel: { phone:0, form:0, email:0, other:0 } },
      terms: [
        // { term: "private autism assessment lincoln", clicks: 9, cost: 22, verdict: "useful" },
        // { term: "free autism test online",          clicks: 6, cost: 14, verdict: "wasted" }
      ],
      changes: [],
      insights: [],
      activity: [],
      next: []
    }
    --------------------------------------------------------------------- */
  }
};
