export default function Loading({ isFullPage }: { isFullPage?: boolean }) {
  if (isFullPage) {
    return (
      // -- Solid background version --
      <div className='w-screen h-screen bg-my-indigo-80 text-white text-xl font-bold fixed top-0 left-0 flex justify-center items-center space-x-4'>
        <div className='w-12 h-12 rounded-full animate-spin border-8 border-solid border-white border-t-transparent'></div>
        <p>Loading...</p>
      </div>
      // -- Blur version --
      // <div className='w-screen h-screen fixed top-0 left-0 text-black text-xl font-bold flex justify-center'>
      //   <div className='flex items-center space-x-4 z-50'>
      //     <div className='w-12 h-12 rounded-full animate-spin border-8 border-solid border-black border-t-transparent'></div>
      //     <p>Loading...</p>
      //   </div>
      //   <div className='w-full h-full fixed backdrop-blur-sm'></div>
      // </div>
    )
  } else {
    return (
      <div className='text-black text-xl font-bold flex justify-center items-center space-x-4'>
        <div className='w-12 h-12 rounded-full animate-spin border-8 border-solid border-white border-t-transparent'></div>
        <p>Loading...</p>
      </div>
    )
  }
}
