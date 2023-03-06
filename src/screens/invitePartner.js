import {View, Text, Image} from 'react-native';
import {
  styles,
  HeadingText,
  LightText,
  WithdrawText,
  WithdrawConatiner,
} from './invitePartnerStyle';
import {Row, Column, Spacer, CustomCard} from '../components/tools';
const recentInvites = [
  {
    id: '0',
    name: 'Kritika Vishnoi',
    contact: '+91 1215125125',
  },
  {
    id: '1',
    name: 'Aryan TIwari',
    contact: '+91 1215125125',
  },
];
export const InvitePartner = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <Image
          style={styles.topImageStyle}
          source={require('../assets/images/top.png')}
        />
      </View>
      <View style={styles.lowerView}>
        <HeadingText>Sent Invite</HeadingText>
        <Spacer position="top" size="16" />
        <CustomCard>
          <Row justifyContent="space-between" alignItems="center">
            <Row alignItems="center">
              <Image
                style={styles.circleStyle}
                source={require('../assets/images/circle.png')}
              />
              <Spacer position="right" size="12" />
              <Column>
                <HeadingText>Varun Jaiswal</HeadingText>
                <LightText>Partner</LightText>
              </Column>
            </Row>
            <WithdrawConatiner>
              <WithdrawText>Withdraw</WithdrawText>
            </WithdrawConatiner>
          </Row>
        </CustomCard>
        <Spacer position="top" size="30" />
        <Row justifyContent="space-between">
          <HeadingText>Received Invites</HeadingText>
          <WithdrawText>Reject all</WithdrawText>
        </Row>
        <Spacer position="top" size="20" />
        {recentInvites.map(invite => {
          return (
            <Spacer key={invite.id} position="bottom" size="12">
              <CustomCard>
                <Row justifyContent="space-between" alignItems="center">
                  <Row alignItems="center">
                    <Image
                      style={styles.circleStyle}
                      source={require('../assets/images/circle.png')}
                    />
                    <Spacer position="right" size="12" />
                    <Column>
                      <HeadingText>Varun Jaiswal</HeadingText>
                      <LightText>Partner</LightText>
                    </Column>
                  </Row>
                  <Row alignItems="center">
                    <Image
                      style={styles.crossImageStyle}
                      source={require('../assets/images/cross.png')}
                    />
                    <Spacer position="right" size="11" />
                    <Image
                      style={styles.crossImageStyle}
                      source={require('../assets/images/tick.png')}
                    />
                  </Row>
                </Row>
              </CustomCard>
            </Spacer>
          );
        })}
      </View>
    </View>
  );
};
