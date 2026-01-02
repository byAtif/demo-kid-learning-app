import { Pressable, Text } from "react-native";

export default function AppButton({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  className = "",
}) {
  const bg =
    variant === "secondary"
      ? "#CAFF9C"
      : variant === "danger"
      ? "#dc2626"
      : "#003366";

  const textColor = variant === "secondary" ? "black" : "white";

  return (
    <Pressable
      onPress={() => {
        console.log("APPBUTTON PRESSED");
        if (onPress) onPress();
      }}
      disabled={disabled}
      style={{
        width: "100%",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bg,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "700", color: textColor }}>
        {title}
      </Text>
    </Pressable>
  );
}
