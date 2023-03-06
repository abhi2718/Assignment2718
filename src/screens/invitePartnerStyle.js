import {StyleSheet,Dimensions} from 'react-native';
import styled from 'styled-components/native';
const { width, height } = Dimensions.get("screen");

export const HeadingText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #000000;
`;
export const LightText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;
export const WithdrawText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: #f94710;
`;
export const WithdrawConatiner = styled.View`
  width: 86px;
  height: 27px;
  border: 1px solid #fe3e32;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperView: {
    flex: 0.3,
    backgroundColor: 'green',
  },
  lowerView: {
    flex: 0.7,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  circleStyle: {
    width: 40,
    height: 40,
  },
  crossImageStyle: {
    width: 26,
    height: 26,
    },
    topImageStyle: {
        height: "100%",
        width:width,
  }
});
