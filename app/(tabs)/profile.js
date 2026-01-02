import { Text, View } from "react-native";
import Screen from "../../components/ui/Screen";
import AppCard from "../../components/ui/AppCard";
import AppButton from "../../components/ui/AppButton";
import { useAuthStore } from "../../store/authStore";
import { useProgressStore } from "../../store/progressStore";

export default function Profile() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const resetProgress = useProgressStore((s) => s.resetProgress);

  return (
    <Screen>
      <Text className="mt-4 text-2xl font-extrabold text-black">Profile</Text>

      <View className="mt-4 gap-4">
        <AppCard>
          <Text className="text-lg font-bold text-black">User</Text>
          <Text className="mt-2 text-sm text-gray-700">{user?.email || "Unknown"}</Text>
        </AppCard>

        <AppButton title="Reset Progress" variant="secondary" onPress={resetProgress} />
        <AppButton title="Logout" variant="danger" onPress={logout} />
      </View>
    </Screen>
  );
}
