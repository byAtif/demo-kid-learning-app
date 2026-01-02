import { useQuery } from "@tanstack/react-query";
import { apiGetLessons, apiGetLessonById, apiGetRewards } from "./mockApi";

export function useLessons() {
  return useQuery({
    queryKey: ["lessons"],
    queryFn: apiGetLessons,
  });
}

export function useLesson(id) {
  return useQuery({
    queryKey: ["lesson", id],
    queryFn: () => apiGetLessonById(id),
    enabled: !!id,
  });
}

export function useRewards() {
  return useQuery({
    queryKey: ["rewards"],
    queryFn: apiGetRewards,
  });
}
