import slider1 from '/src/assets/slider1.jpg';
import slider2 from '/src/assets/slider2.jpg';
import slider3 from '/src/assets/slider3.jpg';
import slider4 from '/src/assets/slider4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

function Banner() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
         <div className='relative'>
            <img src={slider1} />
          </div>
          <div className='absolute flex flex-col top-0 left-0 w-full justify-center items-center h-screen'>
            <div className='flex flex-col items-center text-center space-y-2 md:w-3/5 w-full mx-auto bg-gray-200 bg-opacity-30 text-white p-7 rounded-lg'>
              <h1 className='md:text-4xl sm:text-2xl font-bold'>Mastering Light and Shadow in Realistic Art</h1>
              <p>Light and shadow are essential in creating depth and realism. Learn techniques for shading and highlights in both painting and drawing to give your art a three-dimensional feel. Explore methods like glazing in oil painting or cross-hatching in pencil drawings to bring your subjects to life.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={slider2} />
          </div>
          <div className='absolute flex flex-col top-0 left-0 w-full justify-center items-center h-screen'>
            <div className='flex flex-col items-center text-center space-y-2 md:w-3/5 w-full mx-auto bg-gray-200 bg-opacity-30 text-white p-7 rounded-lg'>
              <h1 className='md:text-4xl sm:text-2xl font-bold'>Exploring Color Theory for Painters</h1>
              <p>Understanding color theory is crucial for painters looking to create mood, harmony, or contrast in their work. Dive into primary, secondary, and complementary colors, and learn how to mix and match hues to evoke different emotions. Perfect for both beginners and advanced artists, these principles can transform your palette.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={slider3} />
          </div>
          <div className='absolute flex flex-col top-0 left-0 w-full justify-center items-center h-screen'>
            <div className='flex flex-col items-center text-center space-y-2 md:w-3/5 w-full mx-auto bg-gray-200 bg-opacity-30 text-white p-7 rounded-lg'>
              <h1 className='md:text-4xl sm:text-2xl font-bold'>Techniques for Textured Drawings</h1>
              <p>Achieving texture in drawing can make subjects look more realistic and engaging. From rough surfaces like tree bark to soft ones like fur, learn to use materials like graphite, charcoal, and pastels to convey a variety of textures. Discover techniques like stippling, hatching, and blending for amazing results.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={slider4} />
          </div>
          <div className='absolute flex flex-col top-0 left-0 w-full justify-center items-center h-screen'>
            <div className='flex flex-col items-center text-center space-y-2 md:w-3/5 w-full mx-auto bg-gray-200 bg-opacity-30 text-white p-7 rounded-lg'>
              <h1 className='md:text-4xl sm:text-2xl font-bold'>The Evolution of Watercolor Painting</h1>
              <p>Watercolor painting has a rich history, evolving from traditional landscapes to contemporary abstract art. Explore the journey of watercolor through time, learn about famous watercolor artists, and gain insights into techniques like wet-on-wet and dry brush to master this delicate, versatile medium.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner