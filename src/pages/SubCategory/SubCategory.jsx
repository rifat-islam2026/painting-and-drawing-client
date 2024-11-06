import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from '../CategoryCard/CategoryCard';

function SubCategory() {
    const craftItems = useLoaderData();
    console.log(craftItems)
  return (
      <div className='py-7'>
          <Tabs>
              <h1 className="text-3xl text-center font-bold text-gary-500 py-3 px-5">
                  Painting and Drawing Techniques
              </h1>
              <p className='max-w-2xl mx-auto text-center text-gray-500 mb-5 px-5'>Explore a variety of painting and drawing categories, each with unique techniques and tools. From traditional oil paintings to contemporary digital sketches, find the perfect medium that resonates with your creative vision. Whether you're a beginner or a seasoned artist, dive into styles and tutorials designed to help you develop and refine your unique artistic voice.</p>
              <div className="flex items-center justify-center">
                
                  <TabList>
                      <Tab>Landscape Painting</Tab>
                      <Tab>Portrait Drawing</Tab>
                      <Tab>Watercolour Painting</Tab>
                      <Tab>Oil Painting</Tab>
                      <Tab>Charcoal Sketching</Tab>
                      <Tab>Cartoon Drawing</Tab>
                  </TabList>
             </div>

              <TabPanel>
                  <div className='grid grid-cols-1 gap-8 mt-8 md:px-0 px-5 xl:mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                      {
                          craftItems.filter(i => i.category ==='Landscape Painting').map(item => <CategoryCard key={item._id} item={item} />)
                      } 
                  </div>
              </TabPanel>
              <TabPanel>
                  <div className='grid grid-cols-1 gap-8 mt-8 md:px-0 px-5 xl:mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                      {
                          craftItems.filter(i => i.category === 'Portrait Drawing').map(item => <CategoryCard key={item._id} item={item} />)
                      }
                  </div>
              </TabPanel>
              <TabPanel>
                  <div className='grid grid-cols-1 gap-8 mt-8 md:px-0 px-5 xl:mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                      {
                          craftItems.filter(i => i.category === 'Watercolour Painting').map(item => <CategoryCard key={item._id} item={item} />)
                      }
                  </div>
              </TabPanel>
              <TabPanel>
                  <div className='grid grid-cols-1 gap-8 mt-8 md:px-0 px-5 xl:mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                      {
                          craftItems.filter(i => i.category === 'Oil Painting').map(item => <CategoryCard key={item._id} item={item} />)
                      }
                  </div>
              </TabPanel>
              <TabPanel>
                  <div className='grid grid-cols-1 gap-8 mt-8 md:px-0 px-5 xl:mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                      {
                          craftItems.filter(i => i.category === 'Charcoal Sketching').map(item => <CategoryCard key={item._id} item={item} />)
                      }
                  </div>
              </TabPanel>
              <TabPanel>
                  <div className='grid grid-cols-1 gap-8 mt-8 md:px-0 px-5 xl:mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                      {
                          craftItems.filter(i => i.category === 'Cartoon Drawing').map(item => <CategoryCard key={item._id} item={item} />)
                      }
                  </div>
              </TabPanel>
          </Tabs>
      </div>
  )
}

export default SubCategory
