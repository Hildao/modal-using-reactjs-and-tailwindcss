import { useState } from 'react';
import Modal from '../ui/modal';
import TextField from '../ui/text-field';
import Button from '../ui/button';

export default function Subscribe({}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <div className='md:w-1/2 mx-auto mt-16'>
      <p className='text-gray-700'>{email}</p>
      <Button block onClick={() => setOpen(true)}>
        Subscribe
      </Button>

      {open && (
        <Modal
          close={() => setOpen(false)}
          title='Fab Fashion Magazine'
        >
          <p className='font-medium md:font-normal text-xl md:text-2xl text-justify tracking-tight px-2 py-1 w-full'>
            Get our monthly magazine for the latest Fashion must have
            collections to add to your wardrobe, health and beauty
            tips to keep you looking hot all season.
          </p>

          <div>
            <TextField value={email} onChange={setEmail} />

            <Button
              block
              className='mt-2'
              onClick={() => setOpen(false)}
            >
              Subscribe
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
