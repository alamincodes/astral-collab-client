import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import working from '../../assets/working.png'
const WorkingModal = ({isOpen,setIsOpen}) => {

    return (
        <>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={()=>setIsOpen(false)}>   
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
           
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                 
                  <div className='flex justify-center mb-5'>
                  <img src={working} className=' w-2/3' alt="" />
                  </div>   
            <Dialog.Title
                      as="h3"
                      className="text-lg text-center font-bold leading-6 text-gray-900"
                    >
                     Stay Tuned for AstralCollab's Revamp
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center text-neutral-700">
                      You've landed on the beta version of our website, where we're busy building something amazing just for you. While we're fine-tuning things, feel free to explore and let us know what you think.
                      </p>
                    </div>
  
                    <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-secondary px-8 font-bold py-2 text-sm  text-primary outline-none"
                        onClick={()=>setIsOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
};

export default WorkingModal;