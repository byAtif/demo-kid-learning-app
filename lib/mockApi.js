import { MOCK_LESSONS, MOCK_REWARDS } from "./mockData";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function apiLogin({ email, password }) {
  await wait(400);

  const e = String(email || "").trim();
  const p = String(password || "").trim();

  if (e.length < 4) throw new Error("Email must be at least 4 characters.");
  if (p.length < 4) throw new Error("Password must be at least 4 characters.");

  return {
    token: "fake_token_123",
    user: { id: "u1", name: "Student", email: e },
  };
}


export async function apiGetLessons() {
  await wait(400);
  return MOCK_LESSONS;
}

export async function apiGetLessonById(id) {
  await wait(350);
  const lesson = MOCK_LESSONS.find((x) => x.id === id);
  if (!lesson) throw new Error("Lesson not found.");
  return lesson;
}

export async function apiGetRewards() {
  await wait(400);
  return MOCK_REWARDS;
}
