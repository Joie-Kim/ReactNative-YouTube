import React, {useState, useEffect, useRef} from 'react';
import {Text} from 'react-native';
import YouTube from 'react-native-youtube';
import Styled from 'styled-components/native';

import Config from 'react-native-config';
import axios from 'axios';

const Container = Styled.View`
  flex: 1;
  margin-bottom: 10px;
  width: 100%;
  height: 300px;
`;
const TitleContainer = Styled.View`
  margin-top: 5px;
  width: 100%;
  height: 20px;
`;

interface Props {
  videoId: string;
  isPlayable: boolean;
}

const Player = ({videoId, isPlayable}: Props) => {
  const [videoInfo, setVideoInfo] = useState<IVideoInfo>({
    id: '',
    title: '',
    chanelTitle: '',
  });

  const getVideoInfo = useRef(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${Config.YOUTUBE_API_KEY}&part=snippet`,
      )
      .then(res => {
        const videoObj = {
          id: videoId,
          title: res.data.items[0].snippet.title,
          chanelTitle: res.data.items[0].snippet.channelTitle,
          thumbNail: {uri: res.data.items[0].snippet.thumbnails.high.url},
        };
        console.log(videoObj);

        setVideoInfo(videoObj);
      })
      .catch(e => {
        console.log(e);
      });
  });

  useEffect(() => {
    getVideoInfo.current();
  }, [getVideoInfo]);

  return (
    <Container>
      <YouTube
        apiKey={Config.YOUTUBE_API_KEY} // for android
        origin="http://www.youtube.com" // to fix 'Video Unavailable' error
        videoId={videoId}
        play={isPlayable ? true : false}
        fullscreen={false}
        loop={false}
        onReady={() => console.log('onReady')}
        onChangeState={() => console.log('onChangeState')}
        onChangeQuality={() => console.log('onChangeQuality')}
        onError={e => console.log('onError: ', e.error)}
        style={{width: '100%', height: 250}}
      />
      <TitleContainer>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
          {videoInfo.title}
        </Text>
      </TitleContainer>
      <TitleContainer>
        <Text style={{fontSize: 16, color: 'white'}}>
          {videoInfo.chanelTitle}
        </Text>
      </TitleContainer>
    </Container>
  );
};

export default Player;
