import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../theme/Colors';
import styles from '../screens/Home/styles';

const LeaderboardRender = ({item, index, searchQuery}: any) => {
  const isHighlighted = item.name.toLowerCase() === searchQuery.toLowerCase();
  const backgroundColor = index % 2 === 0 ? colors.white : colors.white_100;

  return (
    <View style={[styles.row, {backgroundColor}]}>
      <Text
        style={[
          styles.cell,
          styles.nameCell,
          styles.border,
          isHighlighted && styles.highlightText,
        ]}>
        {item.name}
      </Text>
      <Text style={[styles.cell, styles.rankCell, styles.border]}>
        {item.rank || item.stars}
      </Text>
      <Text style={[styles.cell, styles.bananasCell, styles.border]}>
        {item.bananas}
      </Text>
    </View>
  );
};

export default LeaderboardRender;
