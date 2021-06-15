import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useLayoutEffect} from 'react';
import Styled from 'styled-components/native';
import {UserContext} from '~/Context/User';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #141414;
`;
const StyleButton = Styled.TouchableOpacity`
  padding: 8px;
`;
const Icon = Styled.Image`
`;

type NavigationProp = StackNavigationProp<FeedNaviParmList, 'FeedScreen'>;

interface Props {
  navigation: NavigationProp;
}

const Feeds = ({navigation}: Props) => {
  const {logOut} = useContext<IUserContext>(UserContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <StyleButton
          onPress={() => {
            logOut();
          }}>
          <Icon source={require('~/Assets/Images/ic_logout.png')} />
        </StyleButton>
      ),
    });
  });
  return <Container />;
};

export default Feeds;
