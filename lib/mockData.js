export const MOCK_LESSONS = [
  {
    id: "l1",
    title: "Numbers 1 to 10",
    skill: "Math Basics",
    level: 1,
    steps: [
      { id: "s1", type: "learn", text: "Count from 1 to 10 slowly." },
      { id: "s2", type: "practice", text: "Tap the number that matches the dots." },
      { id: "s3", type: "quiz", text: "Choose the correct number." },
    ],
  },
  {
    id: "l2",
    title: "Shapes Around Us",
    skill: "Visual Learning",
    level: 1,
    steps: [
      { id: "s1", type: "learn", text: "A circle looks like a wheel." },
      { id: "s2", type: "practice", text: "Find circles on the screen." },
      { id: "s3", type: "quiz", text: "Pick the circle shape." },
    ],
  },
  {
    id: "l3",
    title: "Colors Practice",
    skill: "Visual Learning",
    level: 1,
    steps: [
      { id: "s1", type: "learn", text: "Red, blue, green, and yellow." },
      { id: "s2", type: "practice", text: "Match the color cards." },
      { id: "s3", type: "quiz", text: "Pick the correct color." },
    ],
  },
];

export const MOCK_REWARDS = [
  { id: "r1", title: "Star Badge", cost: 10 },
  { id: "r2", title: "Rocket Sticker", cost: 20 },
  { id: "r3", title: "Super Learner Medal", cost: 40 },
];
