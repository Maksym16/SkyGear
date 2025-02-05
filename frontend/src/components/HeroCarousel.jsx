import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productApiSlice';
import LinkButton from './LinkButton';

const HomeScreenCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-primary af-height-90 af-max-width'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid className="d-block w-100 h-100"/>
            <Carousel.Caption className="home-carousel-caption">
              <h2 className='text-black text-left text-uppercase '>
                {product.name} 
              </h2>
              <p className='text-black text-left'>
               ${product.price}
              </p>
              <LinkButton link={'/page/1'} text="shop now" />
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeScreenCarousel;