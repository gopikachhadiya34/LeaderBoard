import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {spacing} from '../../styles/GlobalSizes';
import {colors} from '../../theme/Colors';
import {UserData} from '../../constants/UserData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SortBottomSheet from '../../components/SortBottomSheet';
import LeaderboardRender from '../../components/LeaderBoardRender';
import Header from '../../components/Header';
import styles from './styles';
import {User} from './utils';
import {useDispatch, useSelector} from 'react-redux';
import {setLeaderboard} from '../../redux/Action/LeaderBoardAction';
import {LeaderboardAction} from '../../redux/Action/ActionType';
import {Dispatch} from 'redux';

type HomeScreenProps = {};

const allUsers: User[] = Object.values(UserData[0]).map(user => ({
  ...user,
  name: user.name.trim() === '' ? 'Unknown' : user.name,
}));

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useDispatch<Dispatch<LeaderboardAction>>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState(allUsers);
  const refRBSheet: any = useRef(null);
  const leaderboard = useSelector(
    (state: {leaderboard: User[]}) => state.leaderboard,
  );

  const sortedUsers = useMemo(
    () =>
      [...allUsers]
        .sort((a, b) => b.bananas - a.bananas)
        .map((user, index) => ({...user, rank: index + 1})),
    [],
  );

  useEffect(() => {
    // Set the initial leaderboard with ranks on first load
    dispatch(setLeaderboard(sortedUsers));
  }, [dispatch, sortedUsers]);

  const handleSearch = () => {
    Keyboard.dismiss();
    if (searchQuery.trim() === '') {
      resetLeaderboard();
      return;
    }
    // Check if searched user exists
    const searchedUser = sortedUsers.filter(user =>
      user?.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    console.log(searchedUser);
    if (!searchedUser || searchedUser.length === 0) {
      Alert.alert(
        'This user name does not exist!',
        'Please specify an existing user name!',
      );
      return;
    }
    // Get top 10 users
    const top10 = sortedUsers.slice(0, 10);
    // If the searched user is already in the top 10
    if (top10.find(user => user?.name === searchedUser[0]?.name)) {
      setFilteredData(top10);
      return;
    }
    // If the searched user is not in the top 10
    const updatedList = [...top10];
    const searchedUserWithRank = sortedUsers.find(
      user => user.name === searchedUser[0].name,
    );

    if (searchedUserWithRank) {
      updatedList[updatedList.length - 1] = searchedUserWithRank;
    }
    setFilteredData(updatedList);
  };

  const resetLeaderboard = () => {
    const sortedResetUsers = [...allUsers];
    setFilteredData(sortedResetUsers);
  };

  const handleSort = (criteria: 'name' | 'lowestRank') => {
    setSearchQuery('');
    if (criteria === 'name') {
      const sortedByName = [...leaderboard].sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      setFilteredData(sortedByName);
    } else if (criteria === 'lowestRank') {
      const sortedList = [...leaderboard].sort(
        (a, b) =>
          (b.rank || Number.MAX_SAFE_INTEGER) -
            (a.rank || Number.MAX_SAFE_INTEGER) || a.name.localeCompare(b.name),
      );
      setFilteredData(sortedList);
    }
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          searchQuery={searchQuery}
          setSearchQuery={(text: string) => {
            setSearchQuery(text);
            if (!text) resetLeaderboard();
          }}
          handleSearch={handleSearch}
        />
        <View
          style={[
            styles.row,
            styles.titleContainer,
            {backgroundColor: colors.white_100},
          ]}>
          <Text
            style={[
              styles.cell,
              styles.nameCell,
              styles.border,
              styles.boldText,
            ]}>
            Name
          </Text>
          <Text
            style={[
              styles.cell,
              styles.rankCell,
              styles.border,
              styles.boldText,
            ]}>
            Rank
          </Text>
          <Text
            style={[
              styles.cell,
              styles.bananasCell,
              styles.border,
              styles.boldText,
            ]}>
            Number of bananas
          </Text>
        </View>
        <View style={{marginHorizontal: spacing.md}}>
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={filteredData}
            keyExtractor={item => item.uid}
            onEndReachedThreshold={0.5}
            bounces={false}
            style={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <LeaderboardRender
                item={item}
                index={index}
                searchQuery={searchQuery}
              />
            )}
            ListEmptyComponent={
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No Data Found</Text>
              </View>
            }
          />
        </View>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => refRBSheet.current.open()}>
          <MaterialCommunityIcons name="sort" size={20} />
          <Text style={styles.sortText}>SORT</Text>
        </TouchableOpacity>
        <SortBottomSheet refRBSheet={refRBSheet} handleSort={handleSort} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
