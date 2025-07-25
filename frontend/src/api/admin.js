

async function totalUsers() {
  const response = await fetch("http://localhost:3000/api/admin/total-users",{
    method:"GET",
    headers:{
        "Content-Type" : "application/json",
    }
  })

  const data = await response.json();

  return data;
}



async function totalPosts() {
  const response = await fetch("http://localhost:3000/api/admin/total-posts",{
    method:"GET",
    headers:{
        "Content-Type" : "application/json",
    }
  })

  const data = await response.json();

  return data;
}



const filterData = async(range)=>{
  const response = await fetch(`http://localhost:3000/api/admin/filterData?range=${range}`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    },
    credentials:"include"
  })

  const data = await response.json();

  return data;
}



export default {
    totalUsers,
    totalPosts,
    filterData,
}