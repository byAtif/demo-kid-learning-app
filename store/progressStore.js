import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useProgressStore = create(
  persist(
    (set, get) => ({
      points: 0,
      completedLessonIds: [],

      markLessonComplete: (lessonId) => {
        const done = new Set(get().completedLessonIds);
        done.add(lessonId);
        set({
          completedLessonIds: Array.from(done),
          points: get().points + 10,
        });
      },

      resetProgress: () => set({ points: 0, completedLessonIds: [] }),
    }),
    {
      name: "kids_progress",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
