## React Register Form

### Run

##### Run the demo locally

- `yarn install`
- `yarn start`

##### Run tests

- `yarn test`

##### Tech & Tools

- React, react-router
- Typescript
- Styled-components, ant-design ui
- @testing-library/react, jest
- Webpack, babel, eslint, yarn, git

### Features

In this project, you can find:

##### Navigation

- [x] Click on burger icon navigates to menu
- [x] Click on back icon navigates to menu
- [x] Browser history call back

##### Inputs

- [x] Credit card field, cvc field and expire date field
- [x] Field validation (empty, invalid type)

#### Submit

- [x] Submit button disbaled until all fields has been filled
- [x] When submit, form input values would be showed at console log and pop-up modal
- [x] After submit, read-only registration record would be showed at page

#### Test

- [x] Basic test coverage on Menu and RegisterCardForm pages

#### Others

- [x] React project skeleton powered with typescript
- [x] Reusable layout components

#### Demo

Register card form
![RegisterCardForm](https://github.com/CaiYiLiang/recruit-react/blob/master/react-register-form/src/assets/demo-images/RegisterCardForm.png)

Field validation in register card form
![RegitserCardForm-FieldValidate](https://github.com/CaiYiLiang/recruit-react/blob/master/react-register-form/src/assets/demo-images/RegitserCardForm-FieldValidate.png)

Confirm modal in regitser card form
![RegitserCardForm-Modal](https://github.com/CaiYiLiang/recruit-react/blob/master/react-register-form/src/assets/demo-images/RegisterInfoConfrim.png)

Previous record of registration
![RegitserCardForm-record](https://github.com/CaiYiLiang/recruit-react/blob/master/react-register-form/src/assets/demo-images/previousRecord.png)

Navigation: menu page
![RegitserCardForm-Modal](https://github.com/CaiYiLiang/recruit-react/blob/master/react-register-form/src/assets/demo-images/MenuPage.png)

### Thoughts

- When it comes to state management in React, we can use redux, React-hook like useState and useRedux. While we should use them base on the situation, we should be more careful and avoid overusing redux.

- [x] Use redux when the state is shared by many components or pages
- [x] Use useState when the state is used inside one component or page
- [x] Use useHook when there is a complate state management inside one component or page, such as one state has dependecies on the other state.

This project was built with [Cherry Liang](https://caiyiliang.github.io/).
