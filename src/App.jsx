import {
  Navbar,
  Nav,
  Container,
  Carousel,
  Card,
  Row,
  Col,
  Button
} from 'react-bootstrap'

import './App.css'


// Navbar component
function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="nav-container">

        {/* Logo + Application name */}
        <div className="brand">
          <img
            src="/logo.png"
            alt="Tasty Moments logo"
            className="logo-image"
          />

          <Navbar.Brand href="#">
            Tasty Moments
          </Navbar.Brand>
        </div>


        {/* Navigation links */}
        <Nav className="nav-links">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#recipes">Recipes</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
 
          {/* Search + Login */}
          <div className="nav-actions">

            <Button variant="outline-light" >
              <img
                src="/search.png"
                alt="Search"
                className="search-icon"
              />
            </Button>

            <Button variant="outline-light">
              Login
            </Button>

          </div>

      </Container>
    </Navbar>
  )
}


// Hero component
function Hero() {
  return (
    <section id="home" className="hero">
      <Container>
        <h1>Tasty Moments</h1>
        <p>Delicious stories from around the world.</p>
      </Container>
    </section>
  )
}


// Carousel component
function RecipeCarousel() {
  return (
    <Container className="my-4">

      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
            alt="Pizza"
          />

          <Carousel.Caption>
            <h3>Delicious Pizza</h3>
            <p>Enjoy a tasty homemade pizza.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
            alt="Pasta"
          />

          <Carousel.Caption>
            <h3>Fresh Pasta</h3>
            <p>Simple and delicious pasta recipes.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
            alt="Burger"
          />

          <Carousel.Caption>
            <h3>Perfect Burger</h3>
            <p>A delicious burger for your next meal.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

    </Container>
  )
}


// Recipes component
function PopularRecipes() {
  return (
    <section id="recipes" className="recipes">

      <Container>

        <h2>Popular Recipes</h2>

        <Row>

          <Col md={4}>
            <Card className="recipe-card">

              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
              />

              <Card.Body>
                <Card.Title>Italian Pizza</Card.Title>

                <Card.Text>
                  A delicious pizza with tomato, cheese and fresh ingredients.
                </Card.Text>

                <Button variant="dark">
                  View Recipe
                </Button>
              </Card.Body>

            </Card>
          </Col>


          <Col md={4}>
            <Card className="recipe-card">

              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
              />

              <Card.Body>
                <Card.Title>Fresh Pasta</Card.Title>

                <Card.Text>
                  Easy and tasty pasta prepared with fresh ingredients.
                </Card.Text>

                <Button variant="dark">
                  View Recipe
                </Button>
              </Card.Body>

            </Card>
          </Col>


          <Col md={4}>
            <Card className="recipe-card">

              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              />

              <Card.Body>
                <Card.Title>Classic Burger</Card.Title>

                <Card.Text>
                  A classic burger with a juicy steak and fresh vegetables.
                </Card.Text>

                <Button variant="dark">
                  View Recipe
                </Button>
              </Card.Body>

            </Card>
          </Col>

        </Row>

      </Container>

    </section>
  )
}

// Footer component
function Footer() {
  return (
    <footer id="contact">

      <p>
        © 2026 Tasty Moments - All rights reserved.
      </p>

    </footer>
  )
}


// Main App component
function App() {
  return (
    <div>

      <NavigationBar />

      <Hero />

      <RecipeCarousel />

      <PopularRecipes />

      <Footer />

    </div>
  )
}


export default App
