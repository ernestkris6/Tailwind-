import React from 'react'


 const Features =()=> {
  return (
    <div className='container flex-col px-4 mx-auto mt-10 
    space-y-12 md:space-y-0 md:flex-row'>
        <div className='flex flex-col space-y-12 md:w-1/2'>
            <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
                What's different about Manage?
            </h2>
            <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                Manage provides all the functionality your team needs,
                without the complexity. Our software is tailor-made for modern digital 
                products teams.
            </p> 
        </div>
    </div>
    
  )
}

export default Features;