import { useEffect, useState } from "react";
const useOnline = () =>{
    const [isOnline, setIsOnline] = useState(1)

    useEffect(()=>{
        console.log("useEffect useOnline Hook")
        function handleOnline(){
            setIsOnline(true);
            window.location.reload();
        }
        function handleOffline(){
            setIsOnline(false)
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return ()=>{
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline)
        }
        
    },[]);
    console.log("render from useOnline hook")
    return isOnline; //boolean
};
export default useOnline;

// console.log("useEffect useOnline Hook")
//         function handleOnline(){
//             setIsOnline(true)
//         }
//         function handleOffline(){
//             setIsOnline(false)
//         }
//         window.addEventListener('online', handleOnline);
//         window.addEventListener('offline', handleOffline);
//         return ()=>{
//             window.removeEventListener('online', handleOnline);
//             window.removeEventListener('offline', handleOffline)
//         }