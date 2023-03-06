import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
const SpacerView = styled.View`
  ${({variant}) => variant};
`;
const getVariant = (position, size) => {
  const property = positionVariant[position];
  return `${property}:${size}px`;
};
const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};
const ChildContainer = styled.View`
  flex-direction: ${({flexDirection}) => flexDirection};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
  flex-wrap: ${({flexWrap}) => flexWrap};
`;
export const Row = ({
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  children,
  flexWrap = 'nowrap',
}) => {
  return (
    <ChildContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      flexDirection={'row'}>
      {children}
    </ChildContainer>
  );
};
export const Column = ({
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  children,
  style,
  flexWrap = 'nowrap',
}) => {
  return (
    <ChildContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      flexDirection={'column'}
      style={style}>
      {children}
    </ChildContainer>
  );
};

export const Spacer = ({position, size, children}) => {
  const variant = getVariant(position, size);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

export const CustomCard = ({children}) => {
  return <View style={styles.customCard}>{children}</View>;
};

const styles = StyleSheet.create({
  customCard: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
    elevation: 1,
  },
});
