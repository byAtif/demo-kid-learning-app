import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      hydrated: false,

      setHydrated: (v) => set({ hydrated: v }),

      setAuth: ({ token, user }) => set({ token, user }),

      logout: () => set({ token: null, user: null }),
    }),
    {
      name: "kids_auth",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ token: state.token, user: state.user }),
      onRehydrateStorage: () => (state, error) => {
        if (state && state.setHydrated) state.setHydrated(true);
      },
    }
  )
);
