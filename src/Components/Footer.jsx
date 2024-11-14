import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#969191] px-20 text-white flex justify-between'>
        <div className='p-4 w-[800px]'>
            <h1 className='text-[24px]'>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iusto doloribus qui nobis deleniti quasi illo tenetur delectus dolorum cupiditate ad impedit autem alias amet nulla iste eum, odio reiciendis, assumenda veniam aliquid expedita in!</p>
        </div>
        <div className='p-4'>
            <h1 className='text-[24px]'>Contact Us</h1>
            <p>Email: <br /> 124@example.com</p>
            <p>Phone: <br /> 124-456-7890</p>
        </div>
        <div className='p-4 w-[400px]'>
            <h1 className='text-[24px]'>Follow Us</h1>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
        </div>
        <div className='p-4 '>
            <h1 className='text-[24px]'>Subscribe</h1>
            <p>Enter your email address to subscribe</p>
            <input type="email" placeholder="Email Address"/>
            <button>Subscribe</button>
        </div>
        <div className='p-4'>
            <h1 className='text-[24px]'>Terms & Conditions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, reiciendis, deleniti quo vero illum ex, rerum, quidem autem. Quas, recusandae, minus quo quia expedita eveniet.</p>
        </div>
    </footer>
  )
}

