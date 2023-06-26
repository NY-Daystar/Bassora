import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {format} from 'date-fns';
import {Record, RecordType} from '../types';

interface RecordItemProps {
  record: Record;
}

const RecordItem: React.FC<RecordItemProps> = ({record}) => {
  const backgroundColor =
    record.type === RecordType.BREAK ? 'orange' : '#f2f2f2';

  return (
    <View style={[styles.recordContainer, {backgroundColor}]}>
      <Text style={styles.recordText}>
        {format(record.date, 'yyyy-MM-dd, HH:mm:ss')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  recordContainer: {
    padding: 8,
    marginBottom: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
  },
  recordText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
});

export default RecordItem;
