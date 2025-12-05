const API_URL = import.meta.env.VITE_API_URL;
//read enviroment variables 
export async function fetchHello(){
  const res= await fetch (`${API_URL}/hello`);
  return res.json();
}