
export default function ButtonSimple( {handleFunction, text, loading}: ButtonProps) {
    return (
        <button onClick={handleFunction} className="relative z-[1] border border-[#333333e5] bg-[#202020e5] w-[40%] py-2 hover:w-[50%] justify-center hover:scale-1 transition-all duration-[.8s] group  overflow-hidden rounded-full flex space-x-2  items-center " style={{ filter: 'drop-shadow(0 0px 40px rgba(255, 255, 255, 0.1))' }}>
                    <div className='flex  rounded-big  justify-center items-center'>
                    {!loading && <span className="relative text-sm text-white font-bold">{text}</span>}
                   
                    {loading && <div
                    className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>}

                    </div>
        </button>
    );
}