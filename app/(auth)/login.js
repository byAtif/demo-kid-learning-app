import { Text } from "react-native";
import { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import Screen from "../../components/ui/Screen";
import AppCard from "../../components/ui/AppCard";
import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";
import { useForm, Controller } from "react-hook-form";
import { apiLogin } from "../../lib/mockApi";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const token = useAuthStore((s) => s.token);

  const [serverError, setServerError] = useState("");

  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(values) {
    console.log("SUBMIT VALUES", values);

    try {
      setServerError("");
      const res = await apiLogin(values);
      console.log("LOGIN OK", res);

      setAuth(res);

      console.log("TOKEN AFTER setAuth (store value may update next render):", token);
    } catch (e) {
      console.log("LOGIN ERROR", e);
      setServerError(e.message || "Login failed");
    }
  }

  if (token) {
    return <Redirect href="/(tabs)/home" />;
  }

  return (
    <Screen className="justify-center">
      <Text className="mb-6 text-2xl font-extrabold text-black">Student Login</Text>

      <AppCard>
        <Controller
          control={control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <AppInput
              label="Email"
              value={value}
              onChangeText={onChange}
              placeholder="test@gmail.com"
              keyboardType="email-address"
              error={error?.message || ""}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <AppInput
              label="Password"
              value={value}
              onChangeText={onChange}
              placeholder="1234"
              secureTextEntry
              error={error?.message || ""}
            />
          )}
        />

        {serverError ? (
          <Text className="mb-3 text-sm text-red-600">{serverError}</Text>
        ) : null}

        <AppButton
          title="Login"
          onPress={handleSubmit(
            onSubmit,
            (errors) => {
              console.log("FORM INVALID", errors);
              setServerError("Please fill in email and password.");
            }
          )}
        />
      </AppCard>
    </Screen>
  );
}
