import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
	};

	return (
		<View style={styles.page}>
			<View style={styles.goalConatainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.txtInput}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={addGoalHandler} />
			</View>
			<View>
				{courseGoals.map((goal) => (
					<View key={goal} style={styles.listItem}>
						<Text>{goal}</Text>
					</View>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		padding: 30,
	},
	goalConatainer: {
		marginTop: 30,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	txtInput: {
		height: 40,
		width: "80%",
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
	},
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
	},
});
