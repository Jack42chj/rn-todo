# ⏱️ 집중력 향상을 위한 포모도로 기법 타이머

![description](https://github.com/Jack42chj/rn-todo/assets/86552441/12c8b6cf-9375-4bd5-9110-18d064369de7)

-   포모도로 기법은 Francesco Cirillo가 1980년대 후반, 그가 대학생이었던 시절에 개발한 것으로 25분간의 업무 시간과 그사이에 짧은 휴식을 두어 집중력을 극대화하는 기법입니다.
-   해당 기법을 활용한 타이머를 React Native로 만들어 집중력을 높이고 일의 효율성을 증가합니다.

## 🗓️ 기간(Period)

**2024.06.27 ~ 현재 진행중**

## 📚 기술 스택(Stacks)

### 🛣️ 개발 환경(Environment)

<div>
  <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### 💫 Config

<div>
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
  <img src="https://img.shields.io/badge/expo-000020?style=for-the-badge&logo=expo&logoColor=white">
</div>

### 🛠️ 개발 기술(Development)

<div>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=for-the-badge&logo=react&logoColor=white">
</div>

### 🪄 디자인(Design)

<div>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>

---

## 📂 디렉토리 구조(Directory Structure)

```bash
rn-todo
├─ .gitignore
├─ app
│  ├─ (tabs)
│  │  ├─ index.tsx
│  │  ├─ timer.tsx
│  │  └─ _layout.tsx
│  ├─ +html.tsx
│  └─ _layout..tsx
├─ app.json
├─ assets
│  ├─ fonts
│  └─ images
│     ├─ bg.jpg
│     ├─ favicon.png
│     └─ play.svg
├─ babel.config.js
├─ components
│  ├─ calendar
│  │  └─ calendarItem.tsx
│  ├─ headerSelect.tsx
│  ├─ timer
│  │  ├─ inputModal.tsx
│  │  ├─ prevBtn.tsx
│  │  └─ stopModal.tsx
│  ├─ timerBtn.tsx
│  └─ today
│     ├─ dateItem.tsx
│     ├─ taskContainer.tsx
│     └─ taskItem.tsx
├─ hooks
├─ interface
│  └─ interface.ts
├─ package.json
├─ README.md
├─ scripts
│  └─ reset-project.js
├─ tsconfig.json
├─ utils
│  ├─ getCurrentTime.ts
│  ├─ getRandomColor.ts
│  └─ getStartTime.ts
└─ yarn.lock
```

## 🌟 현재 구현 완료된 기능(Specification)

#### ⏲️ 타이머 기능

-   포모도로 기법으로 작업 설정 후 25분간 타이머 작동
-   타이머 시작, 일시정지, 정지 기능
-   이전에 진행했던 작업을 관리하는 '내 이전 작업` 로컬 스토리지를 활용해 관리

#### ☀️ 금일 작업 관리

-   25분을 완수한 작업들의 정보를 로컬 스토리지에 저장
-   홈 화면 Today에서 시작 시간, 종료 시간, 진행한 작업 확인 가능

## 🏖️ 미리보기 (Preview)

![preview1](https://github.com/Jack42chj/rn-todo/assets/86552441/59384415-d591-44c5-908f-3fc65e44450a)
![preview2](https://github.com/Jack42chj/rn-todo/assets/86552441/cf5d0604-6fbd-466e-9a1c-b6206b10c5c8)
