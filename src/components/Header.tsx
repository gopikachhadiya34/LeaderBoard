import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/Colors';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../screens/Home/styles';

const Header = ({ searchQuery, setSearchQuery, handleSearch }: any) => (
    <View style={styles.headerView}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color={colors.gray_100} />
        <TextInput
          placeholder="Search here.."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={colors.gray_200}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity style={styles.searchButtonView} onPress={handleSearch}>
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>
    </View>
  );

  export default Header;