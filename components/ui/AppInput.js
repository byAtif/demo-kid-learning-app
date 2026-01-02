import { Text, TextInput, View } from "react-native";

export default function AppInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error = "",
  keyboardType = "default",
}) {
  const border = error ? "border-red-500" : "border-black";

  return (
    <View className="mb-4">
      <Text className="mb-1 font-semibold text-black">{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        className={`rounded-md border ${border} p-3 text-base text-black`}
        placeholderTextColor="#6b7280"
      />
      {error ? <Text className="mt-1 text-xs text-red-600">{error}</Text> : null}
    </View>
  );
}
