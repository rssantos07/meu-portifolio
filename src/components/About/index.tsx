import { Container, Title, Text } from './styles'
import { Bar } from '../../styles'
import { useGetUsersQuery } from '../../services/api'

const About = () => {
  const { data: git, error, isLoading } = useGetUsersQuery('')
  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Ocorreu um erro ao carregar os dados.</div>

  return (
    <Container id="sobre">
      <Title>
        <h2>Sobre mim</h2>
        <img src={git[0].owner.avatar_url} alt="Avatar" />
      </Title>
      <Bar></Bar>
      <Text>
        <p>
          Sou um desenvolvedor Full-Stack Python, graduado em engenharia de
          telecomunicações em transição de carreira para a área de tecnologia.
          Possuo conhecimentos em React, React Native, VueJS e Flutter, bem como
          habilidades em desenvolvimento web, HTML, CSS, JavaScript + Jquery e
          Bootstrap formado no Curso EBAC Profissão Full-Stack Python.
        </p>
        <p>
          Além das minhas habilidades em desenvolvimento front-end, tenho
          conhecimento em infraestrutura de TI. Como engenheiro, tive
          experiência com sistemas de rede e comunicação, o que me proporciona
          uma compreensão ampla da infraestrutura de TI.
        </p>
        <p>
          Minha postura responsável e dinâmica me permite atuar em diversos
          tipos de projetos, e sou um profissional dedicado a fornecer
          resultados de alta qualidade. Além disso, tenho excelentes habilidades
          interpessoais e estou sempre disposto a aprender e contribuir para o
          sucesso da equipe. Estou animado para continuar crescendo na área de
          tecnologia e enfrentar novos desafios.
        </p>
        <p>Habilidades:</p>
        <ul>
          <li>Python</li>
          <li>Desenvolvimento e testes com Django, Postgres e APIs</li>
          <li>Criação de microsserviços</li>
          <li>Docker</li>
          <li>CircleCI</li>
          <li>Implantação de softwares com abordagem DevOps</li>
          <li>SQL</li>
          <li>Kubernetes</li>
        </ul>
      </Text>
    </Container>
  )
}

export default About
