export const pricingFaqs = [
  {
    question: "How are screenshots counted?",
    answer:
      "Every successful screenshot generated through the API counts toward your monthly quota.",
  },
  {
    question: "What happens if I exceed my monthly limit?",
    answer:
      "If you reach your limit, additional requests will return a limit error. You can upgrade your plan anytime to increase your quota.",
  },
  {
    question: "Do unused screenshots roll over?",
    answer: "No. Screenshot quotas reset at the beginning of each billing cycle.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel your subscription anytime through the billing portal. ",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We generally do not offer refunds, but if you experience issues with the service our support team will help resolve them.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. Our Free plan includes a limited number of screenshots each month so you can test the API before upgrading.",
  },
  {
    question: "How fast are screenshots generated?",
    answer:
      "Most screenshots are generated within 1–5 seconds, depending on the complexity of the website.",
  },
  {
    question: "Are screenshots stored permanently?",
    answer:
      "Screenshots are stored temporarily and automatically deleted after the retention period defined by your plan.",
  },
] as const;
