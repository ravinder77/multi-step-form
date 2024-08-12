import bgSidebarDesktop from '../assets/images/bg-sidebar-desktop.svg';
import PersonalDetails from './PersonalDetails';
import Steps from './Steps';

function MultiStepForm() {

    const [currentStep, setCurrentStep] = useState(1);  


    const steps = [
        { stepNumber:1, title: 'Step 1', content: 'Your Info' },
        {stepNumber:2, title: 'Step 2', content: 'Select Plan' },
        { stepNumber:3,title: 'Step 3', content: 'Add Ons' },
        {stepNumber:4, title: 'Step 4', content: 'Summary' },
        // Add more steps as needed
    ];

    




    return (
        <section className="pt-10 text-white">
        
            <div className="w-[940px] h-[600px] bg-white mx-auto  rounded-lg p-4 flex relative gap-40">
           
            <div >
                    <img src={bgSidebarDesktop} alt="desktop sidebar background " className='object-cover absolute z-0' />
                    
                    <div className='z-10 relative mt-6 ml-12'>
                        {steps.map((step, index) => (
                            <Steps key={index} stepNumber={step.stepNumber} title={step.title} content={step.content} />
                        ))}
                    </div>

            </div>

            <div className='text-black'>
                   <PersonalDetails />
            </div>

          </div>
            
        </section>
      
    )
}

export default MultiStepForm
