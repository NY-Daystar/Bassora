import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {Record, Interval, RecordType} from './types';
import RecordItem from './components/RecordItem';
import IntervalItem from './components/IntervalItem';
import {formatDuration} from './utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

/** Load FontAwesome Icons */
import {loadIcons} from './utils/fontAwesomeConfig';
loadIcons();

const App = () => {
  const [records, setRecords] = useState<Record[]>([]);

  const handleRecordPress = () => {
    const rec: Record = new Record(new Date(), RecordType.RECORD);
    setRecords([...records, rec]);
  };

  const handleBreakPress = () => {
    const rec: Record = new Record(new Date(), RecordType.BREAK);
    setRecords([...records, rec]);
  };

  const handleResetPress = () => setRecords([]);

  const calculateIntervals = useCallback(() => {
    const intervals: Interval[] = [];

    for (let i = 1; i < records.length; i++) {
      const prevRecord = records[i - 1];
      const currRecord = records[i];

      // Get type of the interval
      let type: RecordType = RecordType.RECORD;
      if (
        currRecord.type === RecordType.BREAK &&
        prevRecord.type === RecordType.BREAK
      ) {
        type = RecordType.BREAK;
      }

      const diff = currRecord.date.getTime() - prevRecord.date.getTime();
      intervals.push(new Interval(diff, type));
    }
    return intervals;
  }, [records]);

  // TESTS in debug mode
  var debug = false;
  useEffect(() => {
    if (debug && records.length === 0) {
      records.push(
        new Record(new Date('2023-06-19 09:00:00'), RecordType.RECORD),
      );
      records.push(
        new Record(new Date('2023-06-19 11:45:00'), RecordType.BREAK),
      );
      records.push(
        new Record(new Date('2023-06-19 12:10:00'), RecordType.BREAK),
      );
      records.push(
        new Record(new Date('2023-06-20 17:10:05'), RecordType.RECORD),
      );
    }
    console.info(`Records Number : ${records.length}`);
    calculateIntervals();
  }, [records, debug, calculateIntervals]);

  const calculateTotalInterval = () => {
    const intervals = calculateIntervals();
    const totalInterval = intervals.reduce(
      (acc: number, curr: Interval) =>
        curr.type === RecordType.RECORD ? acc + curr.diff : acc,
      0,
    );
    return totalInterval;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <RecordItem record={item} />}
        contentContainerStyle={styles.recordList}
      />

      <View style={styles.separator} />

      <FlatList
        data={calculateIntervals()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <IntervalItem interval={item} />}
        contentContainerStyle={styles.intervalList}
      />

      <View style={styles.separator} />

      <View style={styles.totalIntervalContainer}>
        <Text style={styles.totalIntervalText}>
          Total: {formatDuration(calculateTotalInterval())}
        </Text>
      </View>

      <FAB
        icon={() => (
          <FontAwesomeIcon style={styles.fabFa} icon="fa-solid fa-plus" />
        )}
        onPress={handleRecordPress}
        style={styles.recordFab}
      />

      <FAB
        icon={() => (
          <FontAwesomeIcon style={styles.fabFa} icon="fa-solid fa-trash" />
        )}
        onPress={handleResetPress}
        style={styles.resetFab}
      />

      <FAB
        icon={() => (
          <FontAwesomeIcon style={styles.fabFa} icon={'fa-solid fa-utensils'} />
        )}
        onPress={handleBreakPress}
        style={styles.breakFab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  recordList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  intervalList: {
    justifyContent: 'center',
  },
  totalIntervalContainer: {
    padding: 16,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalIntervalText: {
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recordFab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  resetFab: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
    backgroundColor: 'red',
  },
  breakFab: {
    position: 'absolute',
    margin: 16,
    right: 65,
    bottom: 0,
    backgroundColor: 'orange',
  },
  fabFa: {
    marginLeft: 5,
    marginTop: 5,
  },
  separator: {
    height: 2,
    backgroundColor: '#aaaaaa',
    marginVertical: 16,
  },
});

export default App;
