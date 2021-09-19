## Project

Life Manager는 자기계발을 위해 자신이 자주 보고 싶은 동영상 링크를 저장해 플레이리스트를 보여주고, <br />
플레이 할 수 있는 url 링크 저장소 서비스입니다.<br />
이번 프로젝트는 TypeScript와 GraphQL, next.js을 공부하면서, 간단한 프로젝트를 하나 만들어 보아야겠다 다짐을 하며 시작하게 된 작업입니다.<br />
사용자가 회원가입을하고 로그인을 하면 youtube 등에서 자신에게 도움이 되는 동영상 등의 링크를 iframe url을 입력해 생성하면, 
streams 페이지에서 자신이 등록한 동영상을 다시 확인해볼 수 있습니다.<br />

<br />

#### 사용기술
- HTML5 / CSS3
- Typescript
- React
- GraphQL
- next.js
- Apollo
- Styled-components, material-ui

#### 구현기능
- 회원가입/로그인/로그아웃
- 동영상 stream CRUD 
- 랜딩페이지 scrollDown, scrollUp
- 반응형 웹

<hr />
<br />

### ⚡ 회원가입 & 로그인 & 로그아웃
![Animation3](https://user-images.githubusercontent.com/29578054/133893218-a4a32757-9287-4320-a831-01be5a22dbe7.gif)
<br />
**JWT 토큰**를 이용하여 브라우저 저장소(sessionStorage)에 전달하여<br />
토큰을 생성하고 비워주는 방식으로 로그아웃 기능을 구현하였고,<br />
**Bcrypt**를 이용해 패스워드를 비교하는 방식으로 로그인 기능을 구현하였습니다.<br />

### ⚡ 랜딩페이지
![Animation2-min](https://user-images.githubusercontent.com/29578054/133893233-cce2fb43-ea95-4c07-be1a-a7e60b72a367.gif)
<br />
랜딩 페이지 입니다.<br />

### ⚡ Streams 추가
![Animation4](https://user-images.githubusercontent.com/29578054/133893247-be99f946-962c-4671-82b8-90ea6e9aadb7.gif)
<br />
로그인 후에 Create 페이지로 이동하면, Title과 Description, iframe URL입력을 통해 동영상 stream을 추가할 수 있습니다. <br />
생성 후에는 next.js의 **useRouter**를 기능을 이용해 리스트를 볼 수 있는 Streams 페이지로 이동되도록 구현하였습니다.
<br />

### ⚡ Streams 수정 및 삭제
![Animation5](https://user-images.githubusercontent.com/29578054/133893256-90b9bde9-0164-4ad8-b3a3-fae49d5bdd6f.gif)
<br />
생성한 stream 내용을 수정하고 삭제할 수 있는 기능을 구현하였습니다.
<br />

### ⚡ Streams 페이지
![Animation6-min](https://user-images.githubusercontent.com/29578054/133893306-9fe35dda-9aa3-4a05-9d73-334ce745b442.gif)
<br />
로그인 후 Streams페이지로 이동하면, 이전에 등록한 동영상 목록이 확인 가능하며, 선택하여 동영상을 재생할 수 있습니다. 
<br />

### ⚡ Scroll 버튼
![Animation_7](https://user-images.githubusercontent.com/29578054/133929110-172ef20e-435a-44cc-9fbc-af23cf1eeee3.gif)
<br />
화살표 이미지(svg)에 애니메이션을 주어 스크롤 Down 버튼을 구현하였고, 
유저가 스크롤을 하면 최상단으로 이동할 수 있는 스크롤 Up 버튼을 구현하였습니다.
<br />

### ⚡ 헤더 스타일 변경
![Animation8](https://user-images.githubusercontent.com/29578054/133893449-ab43f924-cb77-4796-8b8c-493885e8a479.gif)
<br />
nextjs의 **useRouter**기능을 통해 헤더 스타일을 동적으로 구현하였습니다.
<br />

### ⚡ 반응형 웹
![캡처1](https://user-images.githubusercontent.com/29578054/133929252-ad7aaf3f-9782-4cde-907a-b490425db355.PNG)
<br />
![캡처2](https://user-images.githubusercontent.com/29578054/133929269-acc4dd23-1515-4f87-aafa-248e039fdbb4.PNG)
<br />
<br />
<br />
<br />
## 🌵 리뷰
이번 Life Manager 프로젝트에서는 GraphQL, Next.js로 진행함으로써 다양한 프레임워크와 라이브러리를 경험해볼 수 있었습니다.<br/>
이번 프로젝트에서는 Next.js와 같은 프레임워크를 도입할수록 제약사항이나 환경설정이 많아져 힘들었지만,<br />
나중에 규모가 큰 프로젝트를 진행할 경우 로직이 통일되어 효율적이겠다고 느낄 수 있었습니다.<br />
그리고 Next.js을 도입하는 과정에서 서버사이드 렌더링의 전체적인 흐름을 읽을 수 있었으며,<br />
TypeScript를 적용함으로써 코드를 읽기 쉽게 도와주고, 데이터에 타입을 명시해주어 안정적인 프로그래밍이 가능하도록 하는 경험을 얻을 수 있었습니다.<br />

