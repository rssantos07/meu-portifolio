import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import { Container, GlobalCss } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalCss />

        <Container>
          <Home />
          <About />
          <Project />
        </Container>
      </Provider>
    </div>
  )
}

export default App
