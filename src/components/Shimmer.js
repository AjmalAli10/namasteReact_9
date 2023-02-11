import "../styles/Shimmer.css";
const Shimmer = ()=>{
    return(
        <div className="shimmer-list">
            {
                Array(10)
                .fill("")
                .map((card, index)=>(
                        <div key={index+1} className="shimmer-card">
                        </div>
                ))
            }
        </div>
    )
};
export default Shimmer;