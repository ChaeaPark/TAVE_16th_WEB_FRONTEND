# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

**주제 : 리액트 상태와 배칭, 파이버**

**내용 :**

교재: 11장 - 리액트 상태와 배칭 돌아보기 ~ 12장 - 리액트를 구성하는 뿌리, 파이버 돌아보기

개발 과제:

- 주제: 나만의 TodoList 만들기
- 내용: 지금까지 배운 내용을 적용하여 TodoList를 만들어본다.
- 요구사항:
  1. 사용자의 입력을 받아 할일을 추가한다.
  2. 할일을 수정하거나 삭제할 수 있다.
  3. LocalStorage를 활용하여 할일을 저장하고 불러온다.
- 발표 형식: 개발에 적용한 핵심 내용 한 가지 / 코드 예시 / 활용 방안 혹은 사용 시 주의 사항 등
