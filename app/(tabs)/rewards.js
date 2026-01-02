import { Text, View } from "react-native";
import Screen from "../../components/ui/Screen";
import AppCard from "../../components/ui/AppCard";
import { useRewards } from "../../lib/hooks";
import { useProgressStore } from "../../store/progressStore";

export default function Rewards() {
  const points = useProgressStore((s) => s.points);
  const { data, isLoading, error } = useRewards();

  if (isLoading) {
    return (
      <Screen className="justify-center items-center">
        <Text className="text-black">Loading rewards</Text>
      </Screen>
    );
  }

  if (error) {
    return (
      <Screen className="justify-center items-center">
        <Text className="text-red-600">Rewards loading failed</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <Text className="mt-4 text-2xl font-extrabold text-black">Rewards</Text>
      <Text className="mt-2 text-sm text-gray-600">Current points: {points}</Text>

      <View className="mt-4 gap-4">
        {data.map((r) => (
          <AppCard key={r.id}>
            <Text className="text-lg font-bold text-black">{r.title}</Text>
            <Text className="mt-1 text-sm text-gray-600">Cost: {r.cost} points</Text>
            <Text className="mt-2 text-sm text-black">
              {points >= r.cost ? "Unlocked" : "Keep learning to unlock"}
            </Text>
          </AppCard>
        ))}
      </View>
    </Screen>
  );
}
