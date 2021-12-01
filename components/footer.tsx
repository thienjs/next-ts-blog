import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import ThemeSwitch from './themeswitch'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <ThemeSwitch/>
      </Container>
    </footer>
  )
}

export default Footer
