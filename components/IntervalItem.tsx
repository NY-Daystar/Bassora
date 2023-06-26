import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatDuration } from "../utils";
import { Interval, RecordType } from "../types";

interface IntervalItemProps {
	interval: Interval;
}

const IntervalItem: React.FC<IntervalItemProps> = ({ interval }) => {
	const formattedInterval = formatDuration(interval.diff);

	const backgroundColor =
		interval.type === RecordType.RECORD ? "green" : "orange";

	return (
		<View style={[styles.intervalContainer, { backgroundColor }]}>
			<Text style={styles.intervalText}>{formattedInterval}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	intervalContainer: {
		padding: 8,
		marginBottom: 8,
		backgroundColor: "#f2f2f2",
		borderRadius: 4
	},
	intervalText: {
		fontSize: 16,
		textAlign: "center"
	}
});

export default IntervalItem;
