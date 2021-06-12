import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const Text = Styled.Text`
  font-size: 24px;
`;

const Auth = () => {
  return (
    <Container>
      <Text>Auth Screen!</Text>
    </Container>
  );
};

export default Auth;
