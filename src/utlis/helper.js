export const filterData = (input, restuarantes)=>{
    console.log("input - ",input)
    console.log("resturaant data before filter method - ",restuarantes)
    const data = restuarantes?.filter((restuarant)=> (restuarant?.data?.name)?.toLowerCase()?.includes(input?.toLowerCase()) );
    return data
};