import { Navigator, Container, Card } from '@/components'
import { HeroContainer, Title, HeroSection, Tag, Layout } from './styles'

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
      <Layout>
        <Card src="https://images.pexels.com/photos/15188442/pexels-photo-15188442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Card src="https://images.pexels.com/photos/14417008/pexels-photo-14417008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Card src="https://images.pexels.com/photos/15517793/pexels-photo-15517793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Card src="https://images.pexels.com/photos/9437513/pexels-photo-9437513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Card src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Card src="https://images.pexels.com/photos/6621191/pexels-photo-6621191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </Layout>
    </Container>
  )
}

export default Home
