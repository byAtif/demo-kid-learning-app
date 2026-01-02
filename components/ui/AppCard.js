import { View } from "react-native";

export default function AppCard({ children, className = "" }) {
  return (
    <View className={`rounded-lg border border-[#e4e4f7] bg-white p-4 shadow-sm ${className}`}>
      {children}
    </View>
  );
}
