# wanted-pre-onboarding-front-end

원티드 사전과제

## 🎈 구현 기능

### 로그인 / 회원가입

- / 경로에 로그인/회원가입 기능 개발

- 이메일 및 비밀번호 유효성 검사 기능

  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화

- 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동

  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답
  - 응답받은 JWT는 로컬 스토리지에 저장

- 로그인 여부에 따른 리다이렉트 처리를 구현
  - 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트

### ToDo

- `/todo`경로에 접속하면 투두 리스트의 목록 확인 가능
- 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시
- 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가

- 투두 리스트의 수정, 삭제 기능을 구현
  - 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정
  - 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소
  - 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제

### 요청

- Sing Up

  - URL: `/auth/signup`
  - Method: `POST`
  - Headers:
    - Content-Type: `application/json`
  - Body:
    - email: string
    - password: string

- Sing In

  - URL: `/auth/signin`
  - Method: `POST`
  - Headers:
    - Content-Type: `application/json`
  - Body:
    - email: string
    - password: string

- createToDo

  - URL: `/todos`
  - Method: `POST`
  - Headers:
    - Authorization: `Bearer access_token`
    - Content-Type: `application/json`
  - Body:
    - todo: string

- getTodos

  - URL: `/todos`
  - Method: `GET`
  - Headers:
    - Authorization: `Bearer access_token`

- updateTodo

  - URL: `/todos/:id`

  - Method: `PUT`
  - Headers:
    - Authorization: `Bearer access_token`
    - Content-Type: `application/json`
  - Body:
    - todo: string
    - isCompleted: boolean

- deleteToDo

  - URL: `/todos/:id`
  - Method: `DELETE`
  - Headers:
  - Authorization: `Bearer access_token`
