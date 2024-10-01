import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 90vh;
  color: black;
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  border: solid 2px white;
  border-radius: 24px;
  margin: 40px 0px;
`
export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;

  h3 {
    margin-left: 90px;
    font-size: 50px;
  }
  h2 {
    font-size: 150px;
    margin-top: -100px;
    margin-bottom: -10px;
  }

  p {
    font-size: 40px;
    font-weight: bold;
  }
`

export const Link = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  a {
    font-size: 24px;
    text-decoration: none;
    color: black;
  }
`
