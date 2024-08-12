function Steps({stepNumber, title ,content}) {
    return (
        <div className="flex items-center gap-6 mt-4">
            <div className="border border-white h-[25px] w-[25px] relative p-4 rounded-[50%] ">
                <p className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ">{stepNumber }</p>

                
            </div>
            <div className="flex flex-col items-start">
                <h6 className="text-xs text-neutral-300 uppercase font-light">{title}</h6>
                <p className="font-bold text-sm uppercase">{ content}</p>
            </div>
        </div>
    )
}

export default Steps
