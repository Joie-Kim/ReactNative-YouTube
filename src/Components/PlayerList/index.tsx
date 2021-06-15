import React, {useState} from 'react';
import {useRef} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import Player from '~/Components/PlayerList/Player';

const Container = Styled.View``;

const VIDEO_ID_LIST: Array<string> = [
  'dQqVlUda25c',
  '3xGsf1G-yUw',
  'jdNH62P5Jmg',
  'I9_d_iek_yY',
  'S7a3GPMAj4s',
  'Z2D8Flzvr1w',
  'OD7vG2AZQf4',
  '1lvv5bCuw34',
  'NQkGqO60HI8',
  'kKBmPY9M0c0',
];

const PlayerList = () => {
  const [playIndex, setPlayIndex] = useState<number>(0);

  // Player가 80정도 보이면, 화면에 표시 되었다고 판단
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 80});
  // 화면에 표시된 아이템이 변경되면 onViewableItemsChanged가 호출되고,
  // onViewRef로 현재 표시된 여러 아이템 중, 첫번째 아이템의 index를 저장
  const onViewRef = useRef(({viewableItems}: any) => {
    if (viewableItems && viewableItems[0]) {
      const index = viewableItems[0].index;
      if (typeof index === 'number') {
        setPlayIndex(index);
      }
    } else {
      setPlayIndex(-1);
    }
  });

  return (
    <Container>
      <FlatList
        data={VIDEO_ID_LIST}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item, index}) => (
          <Player videoId={item} isPlayable={index === playIndex} />
        )}
      />
    </Container>
  );
};

export default PlayerList;
