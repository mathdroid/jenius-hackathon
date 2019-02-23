import React from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ListHeader from './ListHeader';
import ListRow from './ListRow';

const RootView = styled(ScrollView)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #000;
`;

const StyledText = styled(Text)`
  color: #fff;
`;

const BudgetCard = styled(LinearGradient)`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  margin: 72px 0 16px;
  padding: 16px;
  border-radius: 8px;
`;

const BudgetCardGrid = styled(View)`
  flex: 1 1 auto;
  margin-bottom: ${props => (props.last ? 0 : 16)};
`;

const BudgetCardGridInner = styled(View)`
  margin-bottom: ${props => (props.last ? 0 : 8)};
`;

const BudgetCardMonthText = styled(Text)`
  margin-bottom: 18px;
  color: #fff;
  font-size: 32px;
  font-weight: 500;
`;

const BudgetCardPrimaryText = styled(Text)`
  color: #00f281;
  font-size: ${props => (props.larger ? 24 : 18)};
  font-weight: 500;
`;

const MonthPickerToggle = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  right: -8px;
  width: 48px;
  height: 48px;
`;

const BudgetList = styled(FlatList)`
  margin-bottom: 16px;
`;

const FloatingButtonHolder = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  background-color: magenta;
  z-index: 5;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.25);
`;

export default function FinanceBudgetScreen() {
  return (
    <RootView>
      <FloatingButtonHolder onPress={() => null}>
        <Icon name="md-add" color="#FFF" size={32} />
      </FloatingButtonHolder>
      <BudgetCard colors={['#2234ce', '#00d28a']} start={[0, 0.5]} end={[1, 0.5]}>
        <BudgetCardGrid>
          <MonthPickerToggle>
            <Icon name="md-more" color="#FFF" size={32} />
          </MonthPickerToggle>
          <BudgetCardMonthText>Maret 2019</BudgetCardMonthText>
          <StyledText>Untuk Dianggarkan</StyledText>
          <BudgetCardPrimaryText larger>9,000,000</BudgetCardPrimaryText>
        </BudgetCardGrid>
        <BudgetCardGrid last>
          <BudgetCardGridInner>
            <StyledText>Pengeluaran Lebih Bulan Lalu</StyledText>
            <BudgetCardPrimaryText>225,000</BudgetCardPrimaryText>
          </BudgetCardGridInner>
          <BudgetCardGridInner last>
            <StyledText>Uang Lebih Untuk Bulan Depan</StyledText>
            <BudgetCardPrimaryText>1,355,000</BudgetCardPrimaryText>
          </BudgetCardGridInner>
        </BudgetCardGrid>
      </BudgetCard>
      <BudgetList
        ListHeaderComponent={<ListHeader color="magenta" title="Pengeluaran" />}
        data={[
          { key: 'Makanan', budgeted: 2000000, spent: 0, balance: 2000000 },
          { key: 'General', budgeted: 500000, spent: 0, balance: 1500000 },
          { key: 'Tagihan', budgeted: 400000, spent: 0, balance: 1000000 },
          { key: 'Tagihan Fleksibel', budgeted: 0, spent: 0, balance: 0 },
        ]}
        renderItem={({ item }) => <ListRow item={item} />}
      />
      <BudgetList
        ListHeaderComponent={
          <ListHeader isIncome color="#9b45ff" title="Simpanan &amp; Investasi" />
        }
        data={[{ key: 'Deposito', income: 2000000 }, { key: 'Reksadana', income: 1500000 }]}
        renderItem={({ item }) => <ListRow isIncome item={item} />}
      />
      <BudgetList
        ListHeaderComponent={<ListHeader isIncome color="#00d28a" title="Pendapatan" />}
        data={[{ key: 'Gaji', income: 2000000 }, { key: 'Hasil Usaha', income: 2000000 }]}
        renderItem={({ item }) => <ListRow isIncome item={item} />}
      />
    </RootView>
  );
}
