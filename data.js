/* ---------------------------------------------------------------------------
   THE ONLY FILE YOU EDIT.

   One block per reporting period. Copy the whole block, change the key, edit
   the numbers. The page works out the period-on-period changes itself — don't
   calculate them.

   Leave anything you don't know as null. The page shows a dash rather than a
   wrong number, which is always the better option in front of Joe.

   Derived automatically, so don't fill them in:
     click-through rate   (clicks ÷ impressions)
     cost per click       (spend ÷ clicks)
     cost per enquiry     (spend ÷ enquiries)

   NOTE ON PERIODS: Google Ads reports on a rolling 30-day window, not calendar
   months. The keys below sort the periods; the labels say what the window
   actually was. Keep doing it that way — a full month against a part month
   produces a comparison that looks alarming and means nothing.
--------------------------------------------------------------------------- */

window.REPORT = {

  updated: "2026-09-13",
  current: "2026-09",          // which period the page opens on

  months: {

    /* ===================================================================== */
    "2026-07": {
      label: "15 Jun – 14 Jul",
      live: true,
      headline: "",
      ads: {
        spend: 164, impressions: 2200, clicks: 227, conversions: null,
        tracked: false,
        note: "No conversion tracking in this period, so there's no record of " +
              "what any of these clicks led to."
      },
      enquiries: { total: null, booked: null, byChannel: {} },
      terms: [], changes: [], insights: [], activity: [], next: []
    },

    /* ===================================================================== */
    "2026-08": {
      label: "15 Jul – 13 Aug",
      live: true,
      headline: "",
      ads: {
        spend: 301, impressions: 4400, clicks: 405, conversions: null,
        tracked: false,
        note: "The busiest period of the three — and still no way of telling " +
              "which of those 405 clicks was worth having."
      },
      enquiries: { total: null, booked: null, byChannel: {} },
      terms: [], changes: [], insights: [], activity: [], next: []
    },

    /* ===================================================================== */
    "2026-09": {
      label: "14 Aug – 12 Sep",
      live: true,

      headline:
        "Over the last three months your ads have had 978 clicks and cost £713. " +
        "That's a lot of people arriving at your website — about eleven a day. " +
        "The cost per click has barely moved, around 72p, which is cheap for " +
        "this sort of work, so nobody's overcharging you. The question is what " +
        "those 978 people did next, and at the moment nothing in the account " +
        "can tell us. That's the gap worth closing first. " +
        "I've also been through the website: six of your ten pages tell Google " +
        "they're about the same thing, and your nineteen five-star reviews are " +
        "invisible to it entirely.",

      ads: {
        spend: 248, impressions: 3540, clicks: 346, conversions: null,
        tracked: false,
        note: "Conversion tracking isn't set up, so the account can't tell which " +
              "of those 346 clicks led anywhere. Until it can, Google is " +
              "optimising for clicks rather than enquiries — and it's very good " +
              "at getting clicks."
      },

      enquiries: { total: null, booked: null, byChannel: {} },

      // The website side. All measured from the live site.
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

      terms: [],
      changes: [],

      insights: [
        {
          title: "978 clicks in three months, and we don't know what happened to any of them",
          body: "That's the headline, really. Nearly a thousand people have " +
                "arrived at your website from an ad since mid-June. If even a " +
                "couple of those became assessments the advertising has paid for " +
                "itself many times over — but nothing currently records it, so " +
                "neither of us can say. Fixing that is worth more than any " +
                "amount of fiddling with the ads themselves."
        },
        {
          title: "Your clicks are cheap, which rules out the obvious worry",
          body: "72p a click, steady across all three months. I'd have guessed " +
                "two or three times that for this sort of work. So you're not " +
                "being stung on price — whatever's going wrong is about who's " +
                "clicking, not what they cost. Nearly one in ten people who see " +
                "your ad click it, which is high, and usually means the ads are " +
                "appearing for broad searches that sound relevant but aren't."
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
        }
      ],

      activity: [
        { date: "2026-09-13", minutes: 90,
          summary: "Went through all ten pages of the site. Six share an identical main heading; three share one description. Full fix list written up." },
        { date: "2026-09-13", minutes: 40,
          summary: "Pulled three months of figures out of the ads account so there's something to compare against from now on." },
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
  }
};
