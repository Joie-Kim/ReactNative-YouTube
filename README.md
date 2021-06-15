# RnTube

|                                                                      Auth Screen                                                                      |                                                                      Feed Screen                                                                      |
| :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="300" alt="Rntube_authScreen" src="https://user-images.githubusercontent.com/61102301/122068780-a7447b80-ce2f-11eb-8b3e-9c97762715fd.png"> | <img width="300" alt="Rntube_feedScreen" src="https://user-images.githubusercontent.com/61102301/122068805-aad80280-ce2f-11eb-9198-0a8d7ae2f1db.png"> |

## 💡 About

### Subject

- React Naitve를 사용해 모바일 환경에서 다음 기능들을 구현하는 것
  - Firebase를 활용한 회원가입, 로그인, 로그아웃 기능
  - YouTube API를 활용한 동영상 재생 기능

### Features

1. <b>회원 관리 기능</b>

   `Firebase의 Authentication 기능을 사용했습니다.`
   `Context API를 사용해 전역적으로 관리했습니다.`

   - Email 계정 만들기
   - Email 계정으로 로그인
   - 로그아웃

2. <b>YouTube 동영상 재생 기능</b>

   `로그인한 사용자가 있을 경우, 해당 화면을 보여줬습니다.`

   - 특정 id에 맞는 동영상 정보(동영상 제목, 채널 이름)와 재생 화면을 <u>YouTube API</u>를 사용해 불러왔습니다.
   - <u>FlatList</u>로 동영상 목록을 만들었습니다.
   - 화면에 보이는 동영상 목록 중, <u>가장 위에 있는 동영상이 자동으로 재생</u>되도록 했습니다.

<br>

## 🧑‍💻 Skills

- React Native
- Firebase (Authentication)
- Styled-component

<br>

## 🚗 How to run

- 로컬에서 구동시키고 싶다면 아래와 같이 하세요.
- **npm** 대신 **yarn**을 사용할 수 있습니다.
- **android** 시뮬레이터에서 실행할 경우, **API_KEY**가 필요할 수 있습니다.

```bash
# Install the dependancies
npm install

# Start the project
npm start
```
