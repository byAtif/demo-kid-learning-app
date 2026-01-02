import { Text, View } from "react-native";
import Screen from "../../components/ui/Screen";
import AppCard from "../../components/ui/AppCard";
import ProgressBar from "../../components/ui/ProgressBar";
import { useProgressStore } from "../../store/progressStore";

export default function Home() {
  const points = useProgressStore((s) => s.points);
  const done = useProgressStore((s) => s.completedLessonIds);

  const progress = Math.min(100, done.length * 30);

  return (
    <Screen>
      <Text className="mt-4 text-2xl font-extrabold text-black">Hello</Text>

      <View className="mt-4 gap-4">
        <AppCard>
          <Text className="text-lg font-bold text-black">Weekly Progress</Text>
          <View className="mt-4">
            <ProgressBar value={progress} label="Lesson progress" />
          </View>
        </AppCard>

        <AppCard>
          <Text className="text-lg font-bold text-black">Points</Text>
          <Text className="mt-2 text-3xl font-extrabold text-black">{points}</Text>
          <Text className="mt-1 text-sm text-gray-600">Points increase when a lesson is completed.</Text>
        </AppCard>
      </View>
    </Screen>
  );
}
