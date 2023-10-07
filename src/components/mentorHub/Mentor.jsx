import React, { useState } from 'react';
import { MdOutlineFavoriteBorder } from "react-icons/md"; 
import WorkingModal from '../shared/WorkingModal';
const Mentor = ({mentor}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=' shadow-md p-6 rounded-lg'>
        {
            isOpen && <WorkingModal isOpen={isOpen} setIsOpen={setIsOpen} />
        }
            <div className='flex items-center space-x-2'>
                <img src={mentor.img} className='w-10 h-10 rounded-full' alt="" />
                <div>
                    <h4 className='font-bold'>{mentor.name}</h4>
                    <h5 className='text-neutral-700'>{mentor.designation}</h5>
                </div>
                
            </div>
            <div>
                   <div className='flex items-center space-x-1 my-2'>
                   <h3>Expertise</h3>
                   <div className='h-[1px] w-full bg-neutral-200'></div>
                   </div>

                    <div className='flex items-center space-x-2 flex-wrap'>
                        {mentor.tags.map(tag => <h3 key={tag} className='bg-secondary rounded-full font-semibold text-primary px-2 m-1'>{tag}</h3>)}
                    </div>

                </div>

                <div className='flex justify-between items-center space-x-5 mt-10 border-t pt-5'>
                    <button onClick={()=>setIsOpen(true)} className='bg-primary rounded-full flex items-center justify-center w-1/3 text-white py-2'> <MdOutlineFavoriteBorder size={25}/></button>
                    <button onClick={()=>setIsOpen(true)} className='bg-primary rounded-full w-2/3 flex items-center justify-center text-white py-2 font-bold'>Connect now</button>
                </div>
        </div>
    );
};

export default Mentor;