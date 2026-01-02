import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import Screen from "../../components/ui/Screen";
import AppCard from "../../components/ui/AppCard";
import { useLessons } from "../../lib/hooks";
import { useProgressStore } from "../../store/progressStore";

export default function Learn() {
  const router = useRouter();
  const { data, isLoading, error } = useLessons();
  const done = useProgressStore((s) => s.completedLessonIds);

  if (isLoading) {
    return (
      <Screen className="justify-center items-center">
        <Text className="text-black">Loading lessons</Text>
      </Screen>
    );
  }

  if (error) {
    return (
      <Screen className="justify-center items-center">
        <Text className="text-red-600">Lesson loading failed</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <Text className="mt-4 text-2xl font-extrabold text-black">Learn</Text>

      <View className="mt-4 gap-4">
        {data.map((lesson) => {
          const completed = done.includes(lesson.id);
          return (
            <Pressable key={lesson.id} onPress={() => router.push(`/lesson/${lesson.id}`)}>
              <AppCard className={completed ? "bg-[#F0F8FF]" : ""}>
                <Text className="text-lg font-bold text-black">{lesson.title}</Text>
                <Text className="mt-1 text-sm text-gray-600">{lesson.skill}</Text>
                <Text className="mt-2 text-sm text-black">
                  {completed ? "Completed" : "Not completed"}
                </Text>
              </AppCard>
            </Pressable>
          );
        })}
      </View>
    </Screen>
  );
}
