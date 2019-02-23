import React from 'react';
import { Text, View, SectionList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const RootView = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px;
  background-color: #000;
`;

const StyledText = styled(Text)`
  color: #fff;
`;

const BudgetCard = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 16px 0;
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

export default function FinanceBudgetScreen() {
  return (
    <RootView>
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
      <SectionList
        renderItem={({ item, index, section }) => <StyledText key={index}>{item}</StyledText>}
        renderSectionHeader={({ section: { title } }) => (
          <StyledText style={{ fontWeight: 'bold' }}>{title}</StyledText>
        )}
        sections={[
          { title: 'Title1', data: ['item1', 'item2'] },
          { title: 'Title2', data: ['item3', 'item4'] },
          { title: 'Title3', data: ['item5', 'item6'] },
        ]}
        keyExtractor={(item, index) => item + index}
      />
    </RootView>
  );
}
