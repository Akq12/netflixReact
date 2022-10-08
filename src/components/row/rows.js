const Rows = ({ title, backdrop_path}) => {
    return (
      <div className="relative h-32 min-w-max ">
        <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt='  ' className="  h-full  w-full" />
         <div className='absolute transition duration-300 ease-linear align-middle inset-0 opacity-0 hover:opacity-70 w-full h-full bg-slate-400'>
   <h2 className=' absolute top-6  text-black left-4'>{title}</h2>
   <span className=' absolute top-0 left-2'>icon</span>
   </div>
       
      </div>
    );
  };
  export default Rows;