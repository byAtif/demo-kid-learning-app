import { View, Text } from "react-native";

export default function ProgressBar({ value = 0, label = "" }) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <View>
      {label ? <Text className="mb-2 font-semibold text-black">{label}</Text> : null}
      <View className="h-3 w-full overflow-hidden rounded-full border border-[#e4e4f7] bg-[#F0F8FF]">
        <View style={{ width: `${clamped}%` }} className="h-3 bg-[#003366]" />
      </View>
      <Text className="mt-2 text-sm text-black">{clamped}%</Text>
    </View>
  );
}
