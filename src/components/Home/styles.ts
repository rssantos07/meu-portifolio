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
  @media (max-width: 767px) {
    max-width: 100%;
  }
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
  @media (max-width: 767px) {
    max-width: 100%;
    h3 {
      font-size: 35px;
      margin-bottom: 60px;
      margin-left: 45px;
    }
    h2 {
      font-size: 90px;
    }
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
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    font-size: 1rem;
    a {
      font-size: 24px;
      margin-bottom: 60px;
    }
  }
`
