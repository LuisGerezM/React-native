/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import styled, { DefaultTheme } from 'styled-components/native';


const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

interface StylesProps {
  color?: string;
}

const Title = styled.Text<StylesProps>`
  font-size: ${props => props.theme.fontSizes.large};
  color: black;
  font-weight: ${props => props.theme.fontWeights.heavy};
  ${props => (props.color ? `color: ${props.color}` : 'color: gray')}
`;

const SubTitle = styled.Text<StylesProps>`
  font-size: ${props => props.theme.fontSizes.medium};
  color: black;
  font-weight: ${props => props.theme.fontWeights.bold};
  ${props => (props.color ? `color: ${props.color}` : 'color: gray')}
`;

const Paragraph = styled.Text<StylesProps>`
  font-size: ${props => props.theme.fontSizes.small};
  color: black;
  font-weight: ${props => props.theme.fontWeights.light};
  ${props => (props.color ? `color: ${props.color}` : 'color: gray')}
`;

const MyButton = styled.TouchableOpacity`
  display: flex;
  width: 80%;
  background-color: red;
  padding: 5px 10px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export function View1(): JSX.Element {
  const handlePress = () => {
    console.log('clickkk');
  };
  return (
    <Container>
      <Title color="black">Titulo</Title>
      <SubTitle>Subtitulo</SubTitle>
      <MyButton onPress={handlePress}>
        <Paragraph color="white">Botoncito</Paragraph>
      </MyButton>
    </Container>
  );
}