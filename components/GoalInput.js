import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal("");
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.goalConatainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.txtInput}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<Button
						title="CANCEL"
						color="red"
						onPress={props.onCancel}
					></Button>
					<Button title="ADD" onPress={addGoalHandler} />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	goalConatainer: {
		flex: 1,
		marginTop: 30,
		justifyContent: "center",
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
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "50%",
	},
});

export default GoalInput;
