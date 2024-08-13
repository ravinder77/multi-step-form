import iconArcade from '../assets/images/icon-arcade.svg';
import iconAdvanced from '../assets/images/icon-advanced.svg';
import iconPro from '../assets/images/icon-pro.svg';
import { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';





function SelectPlan() {

    const {plan} = useContext(FormContext);



    const [monthly, setMonthly] = useState(true);
    const [yearly, setYearly] = useState(false);
    
    const [toggle, setToggle] = useState(false);    

    function isToggled() {
        setToggle(!toggle);
        console.log('toggled');
    }

    const monthlyOrYearly = () => { 
        
    }

    

    return (
        <section>
            <h1 className="font-bold text-4xl text-[#1e4677]">Select Your Plan</h1>
            <h3 className="text-gray-400 mt-2">You have the option of monthly or yearly billing.</h3>

            <div className='mt-10 flex flex-row gap-6 '>
                <div className="w-36 border border-gray-400 flex flex-col items-start justify-between gap-10 p-4 rounded-md cursor-pointer active:border-purple-700" >
                    <img src={iconArcade} alt="icon" />
                    <div>
                        <h3 className=' text-[#1e4677] font-medium'>Arcade</h3>
                        <p className='text-gray-400 font-medium text-sm'>&#36;9/mo</p>
                    </div>
                </div>
                <div className="w-36 border border-gray-400 flex flex-col items-start justify-between gap-10 p-4 rounded-md cursor-pointer" >
                    <img src={iconAdvanced} alt="icon" />
                    <div>
                        <h3 className=' text-[#1e4677] font-medium'>Advanced</h3>
                        <p className='text-gray-400 font-medium text-sm'>&#36;12/mo</p>
                    </div>
                </div>
                <div className="w-36 border border-gray-400 flex flex-col items-start justify-between gap-10 p-4 rounded-md cursor-pointer " >
                    <img src={iconPro} alt="icon" />
                    <div>
                        <h3 className=' text-[#1e4677] font-medium'>Pro</h3>
                        <p className='text-gray-400 font-medium text-sm'>&#36;15/mo</p>
                    </div>
                </div>
             
            </div>

            <div className='bg-gray-100 mt-10 rounded-lg flex items-center justify-center gap-4 py-3 text-center'>
                <p className='font-medium text-sm'>Monthly</p>
                <button
                    className='rounded-full bg-[#1e4677] w-10 h-5 relative inline-flex items-center'
                    onClick={isToggled}
                >
                    <span className={`w-4 h-4 inline-block bg-white rounded-full transform transition-transform duration-200 ${toggle ? 'translate-x-5' : 'translate-x-0'} `}></span>
                </button>
                <p className='font-medium text-sm'>Yearly</p>
            </div>

            <div className='flex items-center justify-between mt-20'>
                <button className='font-semibold text-[#1e4677]'>Go Back</button>
                <button className='bg-[#1e4677] text-white py-2 px-4 font-semibold rounded-lg'>Next Step</button>
            </div>


        </section>
    )
}

export default SelectPlan;
