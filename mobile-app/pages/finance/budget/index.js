/* eslint-disable global-require */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ListHeader from './ListHeader';
import ListRow from './ListRow';
import FontLoader from '../../bandersnatch/components/font-loader';

const RootView = styled(ScrollView)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #000;
`;

const StyledText = styled(Text)`
  color: #fff;
  font-family: ${props =>
    props.bold ? 'inter-bold' : props.light ? 'inter-extralight' : 'inter-regular'};
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
  font-family: ${props =>
    props.bold ? 'inter-bold' : props.light ? 'inter-extralight' : 'inter-regular'};
  font-size: 32px;
`;

const BudgetCardPrimaryText = styled(Text)`
  color: #00f281;
  font-family: ${props =>
    props.bold ? 'inter-bold' : props.light ? 'inter-extralight' : 'inter-regular'};
  font-size: ${props => (props.larger ? 24 : 18)};
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

export default class FinanceBudgetScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      available: {
        food: 2000000,
        general: 500000,
        bills: 400000,
        flexible: 0,
      },
      spent: {
        food: 0,
        general: 0,
        bills: 0,
        flexible: 0,
      },
    };
  }

  render() {
    const { available, spent } = this.state;

    return (
      <FontLoader
        fonts={{
          'inter-bold': require('../../../assets/fonts/Inter-Bold.ttf'),
          'inter-regular': require('../../../assets/fonts/Inter-Regular.ttf'),
          'inter-extralight': require('../../../assets/fonts/Inter-ExtraLight-BETA.ttf'),
        }}
      >
        <RootView>
          <FloatingButtonHolder onPress={() => null}>
            <Icon name="md-add" color="#FFF" size={32} />
          </FloatingButtonHolder>
          <BudgetCard colors={['#2234ce', '#00d28a']} start={[0, 0.5]} end={[1, 0.5]}>
            <BudgetCardGrid>
              <MonthPickerToggle>
                <Icon name="md-more" color="#FFF" size={32} />
              </MonthPickerToggle>
              <BudgetCardMonthText bold>Februari 2019</BudgetCardMonthText>
              <StyledText>Untuk Dianggarkan</StyledText>
              <BudgetCardPrimaryText bold larger>
                9,000,000
              </BudgetCardPrimaryText>
            </BudgetCardGrid>
            <BudgetCardGrid last>
              <BudgetCardGridInner>
                <StyledText>Pengeluaran Lebih Bulan Lalu</StyledText>
                <BudgetCardPrimaryText bold>225,000</BudgetCardPrimaryText>
              </BudgetCardGridInner>
              <BudgetCardGridInner last>
                <StyledText>Uang Lebih Untuk Bulan Depan</StyledText>
                <BudgetCardPrimaryText bold>1,355,000</BudgetCardPrimaryText>
              </BudgetCardGridInner>
            </BudgetCardGrid>
          </BudgetCard>
          <BudgetList
            ListHeaderComponent={<ListHeader color="magenta" title="Pengeluaran" />}
            data={[
              {
                key: 'food',
                label: 'Makanan',
                budgeted: available.food,
                spent: spent.food,
                balance: available.food - spent.food,
              },
              {
                key: 'general',
                label: 'General',
                budgeted: available.general,
                spent: spent.general,
                balance: available.general - spent.general,
              },
              {
                key: 'bills',
                label: 'Tagihan',
                budgeted: available.bills,
                spent: spent.bills,
                balance: available.bills - spent.bills,
              },
              {
                key: 'flexible',
                label: 'Tagihan Fleksibel',
                budgeted: available.flexible,
                spent: spent.flexible,
                balance: available.flexible - spent.flexible,
              },
            ]}
            keyExtractor={item => item.key || item.label}
            renderItem={({ item }) => (
              <ListRow
                item={item}
                onRowChange={(value, key) =>
                  this.setState(prevState => ({
                    spent: {
                      ...prevState.spent,
                      [key]: value,
                    },
                  }))
                }
              />
            )}
          />
          <BudgetList
            ListHeaderComponent={
              <ListHeader isIncome color="#9b45ff" title="Simpanan &amp; Investasi" />
            }
            data={[{ label: 'Deposito', income: 2000000 }, { label: 'Reksadana', income: 1500000 }]}
            keyExtractor={item => item.key || item.label}
            renderItem={({ item }) => <ListRow isIncome item={item} />}
          />
          <BudgetList
            ListHeaderComponent={<ListHeader isIncome color="#00d28a" title="Pendapatan" />}
            data={[{ label: 'Gaji', income: 2000000 }, { label: 'Hasil Usaha', income: 2000000 }]}
            keyExtractor={item => item.key || item.label}
            renderItem={({ item }) => <ListRow isIncome item={item} />}
          />
        </RootView>
      </FontLoader>
    );
  }
}
