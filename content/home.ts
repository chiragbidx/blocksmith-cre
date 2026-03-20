import { type HomeContent } from "./home";

// All type exports remain unchanged ...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Coffee Shop CRM",
    badgeOuter: "BrewCRM",
    titleBefore: "The CRM ",
    titleHighlight: "Crafted for Coffee Shops",
    titleAfter: "",
    subtitle:
      "BrewCRM helps you connect with your customers, track loyalty, and grow your coffee shop community—all in one simple dashboard.",
    primaryCta: { label: "Start Brewing Relationships", href: "#pricing" },
    secondaryCta: { label: "See How It Works", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "BrewCRM dashboard preview",
  },
  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Trusted by café owners",
    items: [
      { icon: "Coffee", name: "Local Roasters" },
      { icon: "Coffee", name: "Neighborhood Cafés" },
      { icon: "Coffee", name: "Franchises" },
      { icon: "Coffee", name: "Independent Shops" },
      { icon: "Coffee", name: "Drive-thru Cafés" }
    ],
  },
  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why BrewCRM",
    heading: "The CRM made for coffee shop success",
    description:
      "BrewCRM is built exclusively for coffee shop teams who want a simpler way to grow a loyal community and deliver a personal touch—without the overhead of generic, bloated CRM systems.",
    items: [
      {
        icon: "Users",
        title: "Know Your Regulars",
        description: "Easily manage customer profiles, preferences, and visit history.",
      },
      {
        icon: "Star",
        title: "Boost Loyalty",
        description: "Reward repeat customers with built-in loyalty programs and automated offers.",
      },
      {
        icon: "Mail",
        title: "Promote Your Shop",
        description: "Run email and SMS campaigns tailored to your coffee shop audience.",
      },
      {
        icon: "Coffee",
        title: "1-Click Setup",
        description: "All-in-one dashboard that makes onboarding and daily use a breeze.",
      },
    ],
  },
  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Designed for real coffee shop workflows",
    subtitle:
      "Grow your shop and nurture your community with tools built to streamline service and keep regulars coming back.",
    items: [
      { icon: "User", title: "Know Your Regulars", description: "Easily manage customer profiles, preferences, and visit history." },
      { icon: "Star", title: "Boost Loyalty", description: "Reward repeat customers with built-in loyalty programs and automated offers." },
      { icon: "Mail", title: "Promote Your Shop", description: "Run email and SMS campaigns tailored to your coffee shop audience." },
      { icon: "ClipboardList", title: "Track Orders", description: "See past orders and favorite drinks at a glance." },
      { icon: "Gift", title: "Birthday & Holiday Offers", description: "Delight your customers with timely, automatic rewards so they feel special." },
      { icon: "BarChart", title: "Insights & Analytics", description: "Discover trends and grow sales with simple, real-time reporting." },
    ],
  },
  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "For Coffee Shops",
    heading: "Everything your coffee shop needs",
    subtitle:
      "An all-in-one suite to help you connect with customers, build loyalty, and stay top-of-mind in your community.",
    items: [
      { title: "Customer Management", description: "Profiles, preferences, and quick lookup for service and marketing.", pro: false },
      { title: "Loyalty Program", description: "Configurable points, tiers, and rewards—track visits and purchases automatically.", pro: false },
      { title: "Promotional Campaigns", description: "Send targeted promos by email or SMS to boost foot traffic.", pro: false },
      { title: "Order Tracking", description: "See customer purchases and favorite orders in real time.", pro: true },
    ],
  },
  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Shop owners love BrewCRM",
    reviews: [
      {
        image: "/team1.jpg",
        name: "Alex",
        role: "Coffee Shop Owner",
        comment: "BrewCRM helped us turn new visitors into loyal regulars. Our community has never been stronger.",
        rating: 5.0,
      },
    ],
  },
  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Our Team",
    heading: "Meet BrewCRM’s creators",
    members: [],
  },
  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, affordable pricing",
    subtitle: "Start for free, then grow as your shop grows.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect for small shops launching their loyalty program.",
        buttonText: "Start for free",
        benefits: ["Up to 100 customers", "Basic loyalty & marketing", "Community support", "No card required"],
      },
      {
        title: "Growth Café",
        popular: true,
        price: 39,
        description: "Best for established coffee shops ready to grow with advanced loyalty and promo tools.",
        buttonText: "Start trial",
        benefits: ["Unlimited customers", "Automated campaigns", "Promotions & analytics", "Priority support"],
      },
      {
        title: "Multi-Location",
        popular: false,
        price: 119,
        description: "Built for multi-location chains or franchises with dedicated onboarding.",
        buttonText: "Contact sales",
        benefits: ["Multi-location support", "Advanced reporting", "Dedicated onboarding", "Integration help"],
      },
    ],
  },
  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Get in touch",
    description:
      "Have questions? Looking for a demo or interested in partnership? Reach out — we’d love to help your coffee shop thrive.",
    mailtoAddress: "aaron@bidx.ai",
    info: {
      address: { label: "Headquarters", value: "Remote-first • San Francisco, CA" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "aaron@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "8AM - 6PM PT"] },
    },
    formSubjects: [
      "BrewCRM Demo",
      "Loyalty Program Setup",
      "Promo Campaigns",
      "Feature Request",
      "Partner Inquiry",
    ],
    formSubmitLabel: "Send message",
  },
  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Common BrewCRM Questions",
    items: [
      {
        question: "Is BrewCRM only for coffee shops?",
        answer: "Yes, BrewCRM is crafted specifically for the unique needs of coffee shop owners and teams.",
      },
      {
        question: "Can I migrate my existing customer list?",
        answer: "Absolutely. BrewCRM provides simple tools to import/export customer data anytime.",
      },
      {
        question: "Does BrewCRM handle loyalty rewards automatically?",
        answer: "Yes. Track visits, purchases, and redemption automatically using the loyalty module.",
      },
      {
        question: "Do I need special hardware or apps?",
        answer: "No. BrewCRM works in your browser and integrates with your POS using simple APIs.",
      },
      {
        question: "Is there a trial or free plan?",
        answer: "Yes. Start for free with our Starter plan—no credit card needed!",
      },
    ],
  },
  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "BrewCRM",
    columns: [
      {
        heading: "Connect",
        links: [
          { label: "aaron@bidx.ai", href: "mailto:aaron@bidx.ai" },
          { label: "Github", href: "#" },
          { label: "X", href: "https://x.com" }
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "© 2026 BrewCRM.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },
  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "BrewCRM",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#features", label: "Features" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "BrewCRM preview" },
    features: [
      { title: "Know Your Regulars", description: "Customer management designed for coffee shop teams." },
      { title: "Boost Loyalty", description: "Reward visits and automate discounts for your regulars." },
      { title: "Promote Your Shop", description: "Launch campaigns to stay top-of-mind in your neighborhood." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Create Account",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}