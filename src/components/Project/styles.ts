import styled from 'styled-components'
import { color } from '../../styles'
import fundo from '../../assets/images/2863497.jpg'

export const Container = styled.div`
  color: #000;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 40px;
  margin: 40px 0px;
  border: solid 2px white;
`
export const Header = styled.div`
  h2 {
    font-size: 60px;
  }
  span {
    font-size: 24px;
    padding: 50px;
  }
`

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  color: white;
  align-content: center;
  margin-top: 40px;
`
export const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0a8aa2;
  border-radius: 5px;
  padding: 12px;

  h3 {
    font-size: 28px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    text-align: center;
    margin-bottom: 50px;
  }
  p {
    font-size: 18px;
    border-radius: 5px;
    height: 200px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Button = styled.button`
  background-color: #fab104;
  color: white;
  border: none;
  padding: 20px 30px;
  border-radius: 5px;
  cursor: pointer;
  margin: 40px 0;
  &:hover {
    background-color: #0a8aa2;
  }
`
export const ToggleButtonSection = styled.div`
  text-align: center;
`
export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: white;
    text-align: center;
    margin-top: 12px;
    &:hover {
      color: #fab104;
      transition: 0.5s ease;
    }
  }
`
