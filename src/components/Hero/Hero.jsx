import { Carousel, Container, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => (
  <>
    <section className="Hero">
      <Carousel className="vh-100 w-100">
        <Carousel.Item>
          <img
            src="/assets/img/hero-carousel/hero-carousel-1.jpg"
            alt=""
            className="w-100 d-block vh-100"
          />
          <Carousel.Caption className="bg-white border-top-4 bg-opacity-75 bottom">
            <Container>
              <h2 className="Hero-Heading">Temporibus autem quibusdam</h2>
              <p className="Hero-description">
                Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt omnis iste natus error sit voluptatem accusantium.
              </p>
              <Button
                variant="primary"
                className="bg-my-primary border-0 order-md-1 btn-hover"
              >
                Read More
              </Button>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/assets/img/hero-carousel/hero-carousel-2.jpg"
            alt=""
            className="w-100 d-block vh-100"
          />
          <Carousel.Caption className="bg-white border-top-4 bg-opacity-75 bottom">
            <Container>
              <h2 className="Hero-Heading">Temporibus autem quibusdam</h2>
              <p className="Hero-description">
                Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt omnis iste natus error sit voluptatem accusantium.
              </p>
              <Button
                variant="primary"
                className="bg-my-primary border-0 order-md-1 btn-hover"
              >
                Read More
              </Button>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/assets/img/hero-carousel/hero-carousel-3.jpg"
            alt=""
            className="w-100 d-block vh-100"
          />
          <Carousel.Caption className="bg-white border-top-4 bg-opacity-75 bottom">
            <Container>
              <h2 className="Hero-Heading">Temporibus autem quibusdam</h2>
              <p className="Hero-description">
                Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt omnis iste natus error sit voluptatem accusantium.
              </p>
              <Button
                variant="primary"
                className="bg-my-primary border-0 order-md-1 btn-hover"
              >
                Read More
              </Button>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  </>
);

export default Hero;
