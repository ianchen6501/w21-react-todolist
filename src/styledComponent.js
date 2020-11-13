import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import {MEDIA_QUERY_ES, MEDIA_QUERY_SM, MEDIA_QUERY_MD, MEDIA_QUERY_LG, MEDIA_QUERY_XL} from './constants'


const Nav = styled.nav`
height: 12vh;
min-height: 80px;
background: ${props => props.theme.colors.main_yellow};
color: white;
font-size: 4rem;
vertical-align: middle;
display: flex;
justify-content: center;
align-items: center;
`

const TodoWrapper = styled.div`
position: relative;
left: 50%;
width: 90%;
transform: translate(-50%, 0%);
margin-top: 30px;


${MEDIA_QUERY_MD} {
  width: 50%;
}
`

const TodoTitle = styled.div`
color: white;
font-size: 20px;
`

const TodoInput = styled.div`
display: flex;
justify-content: center;
`

const Input = styled.input`
color: ${props => props.theme.colors.main_blue};
height: 3rem;
width: 100%;
border: solid ${props => props.theme.colors.main_brown} 2px;
font-size: 2.2rem;
  &::placeholder {
    color: ${props => props.theme.colors.main_lightgray};
  }
`

const UpdateInput = styled.input`
color: ${props => props.theme.colors.main_blue};
height: 3rem;
width: 60%;
border: solid ${props => props.theme.colors.main_brown} 2px;
font-size: 2.2rem;
  &::placeholder {
    color: ${props => props.theme.colors.main_lightgray};
  }
`

const Button = styled.button`
padding: 8px 10px ;
font-size: 1.2rem;
background-color: ${props => props.theme.colors.main_lightgray};

& {
  margin: 0px 30px;
  border: solid 0px;
}
`

const TodoContent = styled.ul`
  & {
    padding: 0px;
  }
`

const TodoItemBody = styled.li`
height: 4rem;
margin-top: 20px;
display: flex;
justify-content: space-between;
background: ${props => props.isDone? props.theme.colors.main_brown : props.theme.colors.main_lightbrown};
align-items: center;
padding: 30px;
  & div + div, input + div {
    display: flex;
    align-items: center;
  }
`

const TodoText = styled.div`
width: 60%;
color: ${props => props.theme.colors.main_blue};
font-size: 30px;
text-decoration:none;
margin-left: 2rem;
display: inline-block;
white-space: normal;
word-wrap:break-word;
${props => props.isDone && `text-decoration: line-through`};
`

const InputCheckbox = styled.input`
  height: 35px;
  width: 35px;

  &:checked {
    background: red;
  }
`
const Select = styled.select`
  height: 35px;
  font-size: 20px;
  border: solid ${props => props.theme.colors.main_brown} 2px;
  color: ${props => props.theme.colors.main_lightgray};
  margin-bottom: 50px;
`

export { Nav, TodoWrapper, TodoTitle, TodoInput, Input, UpdateInput, Button, TodoContent, TodoItemBody, TodoText, InputCheckbox, Select}