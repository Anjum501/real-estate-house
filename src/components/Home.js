// src/components/Home.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const buttonclicked = () => {
    
    // alert('Btn clicked');
    // nevigate('/login');
    // Link
}


const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div class="carousel w-full mt-4">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="./image/images (1).jpeg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="./image/images (2).jpeg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="./image/images.jpeg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<div className='grid grid-cols-2 mb-4'>
    
<div class="card w-96 bg-base-100 shadow-xl m-auto">
  <figure class="px-10 pt-10">
    <img src="./image/images (1).jpeg" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">freedom house</h2>
    <p>you can feel the place for your refreshment</p>
    <div class="card-actions">
    <Link to="/login" className="mx-2 btn"> Buy Now</Link>
      {/* <button onClick={navigate('/login')} class="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
</div>

<div class="card w-96 bg-base-100 shadow-xl m-auto">
  <figure class="px-10 pt-10">
    <img src="./image/images (2).jpeg" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">busy house</h2>
    <p>its the busy area you can get anything here</p>
    <div class="card-actions">
      
      <Link to="/login" className="mx-2 btn"> Buy Now</Link>
      {/* <button class="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
</div>

<div class="card w-96 bg-base-100 shadow-xl m-auto">
  <figure class="px-10 pt-10">
    <img src="./image/images.jpeg" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">apartment</h2>
    <p>you can buy a apartment for your living</p>
    <div class="card-actions">

    <Link to="/login" className="mx-2 btn"> Buy Now</Link>
    

      {/* <button class="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
</div>

<div class="card w-96 bg-base-100 shadow-xl m-auto">
  <figure class="px-10 pt-10">
    <img src="./image/10655789-58833o.webp" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">business apartment</h2>
    <p>if you pay can buy a house for your business</p>
    <div class="card-actions">
      {/* <button class="btn btn-primary">Buy now</button> */}
      <Link to="/login" className="mx-2 btn"> Buy Now</Link>

    </div>
  </div>
</div>

</div>
        
        
        
         </div>
  );
};

export default Home;
