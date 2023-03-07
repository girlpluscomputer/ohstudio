import { Navigator, Container } from '@/components'
import { HeroContainer, Title, HeroSection, Tag } from './styles'

const Home = () => {
  return (
    <Container>
      <Navigator />
      <HeroContainer>
        <Title>
          A brand and product designer working with clients globally
        </Title>
        <HeroSection>
          <span>Expertise</span>
          <Tag>Branding</Tag>
          <Tag>Product</Tag>
          <Tag>Design System</Tag>
        </HeroSection>
      </HeroContainer>
    </Container>
  )
}

export default Home
