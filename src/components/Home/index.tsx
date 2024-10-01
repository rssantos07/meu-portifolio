import { Apresentation, Container, Link } from './styles'
import { Bar } from '../../styles'

const Home = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container className="slide-in">
      <Apresentation>
        <div>
          <h3>Rodrigo </h3>
          <h2>Santos</h2>
          <Bar></Bar>
          <Link>
            <a href="https://www.linkedin.com/in/rssantos07/" target="blank">
              Linkedin
            </a>
            <a href="#sobre">Sobre Mim</a>
            <a href="#projetos">Projetos</a>
          </Link>
        </div>

        <h1>Portifólio {currentYear}</h1>
      </Apresentation>

      {/* <img src={background} alt="img" /> */}
    </Container>
  )
}

export default Home
