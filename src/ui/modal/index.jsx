export default function Modal({ children, title, close }) {
  return (
    <div className='container mx-auto'>
      <div className='bg-gray-500 absolute inset-0 flex justify-center items-center'>
        <div className='mx-12 w-1/2 mx-auto'>
          <div className='space-y-3'>
            <div className='py-1 px-2 flex justify-between'>
              <div>
                {title && (
                  <h1 className='text-2xl md:text-5xl font-bold text-pink-400'>
                    {title}
                  </h1>
                )}
              </div>
              <div
                onClick={close}
                className='font-bold hover:text-pink-400'
              >
                X
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
