import {
  Container,
  Button,
  Header,
  Section,
  Article,
  ToggleButtonSection,
  Links,
  Info
} from './styles'
import { useGetUsersQuery } from '../../services/api'

import pythonIcon from '../../assets/images/python_button_icon_151925.png'
import dartIcon from '../../assets/images/dart_button_icon_151933.png'
import javaIcon from '../../assets/images/javascript_horizontal_logo_icon_170553.png'
import vueIcon from '../../assets/images/vue_button_icon_151943.png'
import htmlIcon from '../../assets/images/html_button_icon_151929.png'
import typeIcon from '../../assets/images/file_type_typescript_official_icon_130107.png'
import cssIcon from '../../assets/images/css_button_icon_151935.png'
import { useState } from 'react'

interface Repositorio {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  updated_at: string
  homepage: string
}
const Project = () => {
  const { data: git, error, isLoading } = useGetUsersQuery('')
  const [showAll, setShowAll] = useState(false)

  if (isLoading) return <div>carregando ...</div>
  if (error) return <div>ocorreu um erro</div>

  const sortedRepos = git.slice().sort((a: Repositorio, b: Repositorio) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  })

  const languageIcon = (language: string) => {
    switch (language) {
      case 'Python':
        return <img src={pythonIcon} alt="Python" />
      case 'HTML':
        return <img src={htmlIcon} alt="Html" />
      case 'TypeScript':
        return <img src={typeIcon} alt="TypeScript" />
      case 'Vue':
        return <img src={vueIcon} alt="Vue.js" />
      case 'JavaScript':
        return <img src={javaIcon} alt="Vue.js" />
      case 'SCSS':
        return <img src={cssIcon} alt="Html" />
      case 'Dart':
        return <img src={dartIcon} alt="Html" />
      default:
        return null
    }
  }

  const truncateName = (name: string, maxLength: number) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + '...'
    }
    return name
  }

  function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <Container id="projetos">
      <Header>
        <h2>Projetos</h2>
        <h1>GitHub Repositories</h1>
        <span>
          Estou empolgado em compartilhar alguns dos projetos que realizei
          durante minha jornada de aprendizado na área de tecnologia. Cada um
          deles reflete não apenas o conhecimento adquirido, mas também a
          dedicação e o esforço que coloquei para transformar ideias em
          realidade. Vamos explorar juntos essas criações que representam o que
          aprendi e as habilidades que desenvolvi ao longo do caminho!
        </span>
      </Header>

      <Section>
        {sortedRepos
          .slice(0, showAll ? sortedRepos.length : 9)
          .map((repo: Repositorio) => (
            <Article key={repo.id}>
              <h3>{truncateName(capitalizeFirstLetter(repo.name), 18)}</h3>
              <p>{repo.description}</p>
              <Info>
                <time>
                  atualização:
                  {new Date(repo.updated_at).toLocaleDateString('pt-BR')}
                </time>
                <span>{languageIcon(repo.language)}</span>
              </Info>
              <Links>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  Veja o Repositório
                </a>
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noreferrer">
                    Visite o site
                  </a>
                )}
              </Links>
            </Article>
          ))}
      </Section>
      <ToggleButtonSection>
        {!showAll && sortedRepos.length > 9 && (
          <Button onClick={() => setShowAll(true)}>Mostrar mais...</Button>
        )}
        {showAll && sortedRepos.length > 9 && (
          <Button onClick={() => setShowAll(false)}>Mostrar menos</Button>
        )}
      </ToggleButtonSection>
    </Container>
  )
}

export default Project
