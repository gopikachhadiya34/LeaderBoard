import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {hp} from '../styles/GlobalSizes';
import {Text, View} from 'react-native';
import styles from '../screens/Home/styles';
import { colors } from '../theme/Colors';

const SortBottomSheet = ({refRBSheet, handleSort}: any) => (
  <RBSheet
    ref={refRBSheet}
    height={hp(20)}
    draggable
    customStyles={{
      container: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white',
      },
      wrapper: {
        backgroundColor: 'transparent',
        shadowColor : colors.black,
        shadowOpacity : 0.2,
        shadowRadius : 4,
        elevation: 5,
      },
      draggableIcon: {
        backgroundColor: '#000',
      },
    }}>
    <View style={styles.sheetView}>
      <Text>SORT BY</Text>
      <View style={styles.sortBorder} />
      <Text style={styles.sortingListText} onPress={() => handleSort('name')}>
        Sort by name
      </Text>
      <Text
        style={styles.sortingListText}
        onPress={() => handleSort('lowestRank')}>
        Sort by lowest ranked user
      </Text>
    </View>
  </RBSheet>
);

export default SortBottomSheet;
