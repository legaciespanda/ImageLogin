import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../ui-component/Background";
import Logo from "../ui-component/Logo";
import Header from "../ui-component/Header";
import Button from "../ui-component/Button";
import TextInput from "../ui-component/TextInput";
import BackButton from "../ui-component/BackButton";
import { theme } from "../config/Theme";

import { signInUser } from "../api/Firsebaseauth-api";
import Toast from "../ui-component/Toast";

const LoginActivity = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onSignUpPressed = async () => {
    if (loading) return;

    setLoading(true);

    const response = await signInUser({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    if (response.error) {
      setError(response.error);
    }

    setLoading(false);
  };

  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate("HomeScreen")} /> */}

      <Logo />

      <Header>Athentiction Required</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />

      <Button
        loading={loading}
        mode="contained"
        onPress={_onSignUpPressed}
        style={styles.button}
      >
        Register
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already Authenticted? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginActivity")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>

      <Toast message={error} onDismiss={() => setError("")} />
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default memo(LoginActivity);
