'use client'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ForWho from '@/components/ForWho';
import PracticeLesson from '@/components/PracticeLesson';
import Price from '@/components/Price';
import Articles from '@/components/Articles';
import Faq from '@/components/Faq';
import Indicators from '@/components/Indicators';
import Ending from '@/components/Ending';
import Footer from '@/components/Footer';
import Doubts from '@/components/Doubts';
import Reviews from '@/components/Reviews';
import { useEffect, useState } from 'react';
import axios from 'axios';

type DataType = {
  id: number;
  name: string;
}

export default function Home() {
  const [data, setData] = useState([])

  const fetchData = async () => {

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log('fetched')
      setData(response.data);
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  };



  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      console.log(response)
      fetchData()
    } catch (err) {
      console.error(err)
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return <div>Loading</div>

  return (
    <div className='flex flex-col'>
      <Header />
      <Hero />

      {
        data.map((user: DataType) => {
          return <div key={user.id}>{user.name} <button onClick={() => handleDelete(user.id)}> Delete</button></div>
        })
      }
      <div id='about'>
        <About />
      </div>
      <div id='for-who'>
        <ForWho />
      </div>
      <Doubts />
      <div id='practice-lesson'>
        <PracticeLesson />
      </div>
      <Reviews />
      <div id='price'>
        <Price />
      </div>
      <Articles />
      <div id='faq'>
        <Faq />
      </div>
      <Indicators />
      <Ending />
      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
}
