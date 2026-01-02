import { Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Screen from "../../components/ui/Screen";
import AppCard from "../../components/ui/AppCard";
import AppButton from "../../components/ui/AppButton";
import { useLesson } from "../../lib/hooks";
import { useProgressStore } from "../../store/progressStore";

export default function LessonDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { data, isLoading, error } = useLesson(id);
  const markLessonComplete = useProgressStore((s) => s.markLessonComplete);

  if (isLoading) {
    return (
      <Screen className="justify-center items-center">
        <Text className="text-black">Loading lesson</Text>
      </Screen>
    );
  }

  if (error) {
    return (
      <Screen className="justify-center items-center">
        <Text className="text-red-600">Lesson not found</Text>
      </Screen>
    );
  }

  function completeLesson() {
    markLessonComplete(data.id);
    router.back();
  }

  return (
    <Screen>
      <Text className="mt-4 text-2xl font-extrabold text-black">{data.title}</Text>
      <Text className="mt-1 text-sm text-gray-600">{data.skill}</Text>

      <View className="mt-4 gap-4">
        <AppCard>
          <Text className="text-lg font-bold text-black">Steps</Text>
          <View className="mt-3 gap-3">
            {data.steps.map((s, idx) => (
              <View key={s.id} className="rounded-md border border-[#e4e4f7] p-3">
                <Text className="font-semibold text-black">Step {idx + 1}</Text>
                <Text className="mt-1 text-sm text-gray-700">{s.text}</Text>
              </View>
            ))}
          </View>
        </AppCard>

        <AppButton title="Mark Lesson Complete" onPress={completeLesson} />
        <AppButton title="Go Back" variant="secondary" onPress={() => router.back()} />
      </View>
    </Screen>
  );
}
