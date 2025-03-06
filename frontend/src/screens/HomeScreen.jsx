import React from 'react';
import HomeScreenCarousel from '../components/HeroCarousel';
import Enterprize from '../components/Enterprize';
import LogoGallery from '../components/LogoGallery';
import Carousel from '../components/Carousel';
import Specialization from '../components/Specialization';
import { useGetTopProductsQuery } from '../slices/productApiSlice';
import LinkButton from '../components/LinkButton';


const HomeScreen = () => {
  const { data: products, isLoading } = useGetTopProductsQuery();

  return (
    <div>
      <HomeScreenCarousel />
      <div className="shop-all-section py-5 py-lg-11 px-1 px-lg-0">
        <h2 className="header-white">Like drones? Take a closer look</h2>
        <LinkButton link={'/page/1'} text="shop all" variant={'black'}/>
      </div>
      {!isLoading && (
        <Carousel
          items={[...products, ...products]}
          title={'The best selers'}
        />
      )}
      <Enterprize />
      
      <LogoGallery />
      <Specialization />
  
    </div>
  );
};

export default HomeScreen;
