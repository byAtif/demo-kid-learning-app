import { SafeAreaView, View } from "react-native";

export default function Screen({ children, className = "" }) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className={`flex-1 px-4 ${className}`}>{children}</View>
    </SafeAreaView>
  );
}
