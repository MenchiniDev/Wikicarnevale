import React from "react";
import { Text, View, StyleSheet }  from "react-native";


export default function AboutScreen() {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.text}>
            This app is a simple example of a React Native application.
            It is built using Expo and React Navigation.
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 8,
    },
});