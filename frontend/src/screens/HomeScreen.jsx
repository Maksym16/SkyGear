import React from 'react';
import HomeScreenCarousel from '../components/HeroCarousel';
import Enterprize from '../components/Enterprize';
import LogoGallery from '../components/LogoGallery';
import Carousel from '../components/Carousel';
import Specialization from '../components/Specialization';
import { useGetTopProductsQuery } from '../slices/productApiSlice';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return (
    <div>
      <HomeScreenCarousel />
      <Enterprize />

      {!isLoading && (
        <Carousel
          items={[...products, ...products]}
          title={'The best selers'}
        />
      )}
      <Specialization />
      <LogoGallery />
    </div>
  );
};

export default HomeScreen;
