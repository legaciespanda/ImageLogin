import React, { memo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Background from "../ui-component/Background";
import Logo from "../ui-component/Logo";
import Header from "../ui-component/Header";
import Button from "../ui-component/Button";
import { theme } from "../config/Theme";
import LoginActivity from '../activity/LoginActivity'


import Toast from "../ui-component/Toast";

import { Login } from 'react-native-md-motion-buttons';

const AccessActivity = ({ navigation }) => {


  const _onSignUpPressed = async () => {

  };

  const promise = () => new Promise((resolve, reject) => setTimeout(() => resolve(), 2000) );

  return (
    <Login.View style={styles.container} homeScreen={<LoginActivity />}>
        <Background>

        <Logo />

        <Header>Facial Athentiction Required</Header>

            <Login.Button
                onPress={promise}
                style={styles.button}
                color="rgb(255,155,57)" />

        </Background>
    </Login.View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
    button: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 24,
    marginRight: 20,
    marginLeft: 20,
    width: 300,
    justifyContent: 'center',
    backgroundColor: "#380b22"
  },
});

export default memo(AccessActivity);
