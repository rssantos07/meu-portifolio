import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 95vh;
  color: #fff;
  background-size: cover;
  border: solid 2px white;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.8);
  @media (max-width: 767px) {
    height: auto;
  }
`
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px;

  h2 {
    font-size: 60px;
    font-weight: bold;
  }
  h3 {
    font-size: 80px;
    font-weight: bold;
    color: #ff4d00;
  }
  img {
    width: 200px;
    object-fit: fill;
    border-radius: 50%;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 40px;
      margin-bottom: 20px;
    }
  }
`

export const Text = styled.div`
  font-size: 18px;
  margin: 0 40px 0 80px;
  @media (max-width: 767px) {
    margin: 12px;
    padding: 2px 5px;
    p {
      font-size: 14px;
      margin-bottom: 20px;
      width: 100%;
    }
  }
`
