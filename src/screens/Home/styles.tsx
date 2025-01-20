import {Platform, StyleSheet} from 'react-native';
import {font, hp, spacing} from '../../styles/GlobalSizes';
import {colors} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    marginHorizontal: spacing.base,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.base,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    backgroundColor: colors.white_100,
    width: '80%',
    borderRadius: 12,
    paddingHorizontal: spacing.semiSmall,
  },
  textInput: {
    padding: 0,
    fontSize: font.size.base,
    paddingLeft: spacing.small,
    color: colors.black,
  },
  searchButtonView: {
    backgroundColor: colors.purple,
    marginLeft: spacing.nano,
    borderRadius: 12,
    paddingVertical: spacing.md,
    padding: spacing.semiSmall,
  },
  border: {
    borderWidth: 1,
    borderColor: colors.gray_200,
  },
  searchText: {
    color: colors.white,
    fontWeight: '700',
  },
  titleContainer: {
    marginHorizontal: spacing.md,
    marginTop: spacing.base,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    padding: 10,
  },
  nameCell: {
    flex: 2,
    textAlign: 'left',
    paddingLeft: 16,
  },
  rankCell: {
    flex: 1,
    textAlign: 'center',
  },
  mediumText: {
    fontWeight: '500',
    color: colors.black,
  },
  bananasCell: {
    flex: 2,
    textAlign: 'center',
  },
  noDataContainer: {
    marginTop: hp(8),
  },
  noDataText: {
    fontSize: font.size.base,
    color: colors.gray_200,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: '800',
    color: colors.black,
  },
  flatListContainer: {
    marginBottom: Platform.OS === 'ios' ? hp(23) : hp(25),
  },
  sortButton: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 15 : 0,
    alignSelf: 'center',
    backgroundColor: colors.white_200,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.base,
    flexDirection: 'row',
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  sortText: {
    color: colors.black,
    fontWeight: '700',
    paddingLeft: spacing.small,
  },
  sortNameText: {
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.base,
    width: '80%',
    borderRadius: 8,
  },
  sortBorder: {
    borderBottomWidth: 1,
    borderColor: colors.white_200,
    marginVertical: spacing.nano,
  },
  sheetView: {
    marginHorizontal: spacing.base,
    marginTop: spacing.micro,
  },
  sortingListText: {
    color: colors.gray_200,
    fontWeight: '500',
    paddingTop: spacing.base,
  },
  highlightText: {
    color: colors.red,
    fontWeight: '700',
  },
});

export default styles;
