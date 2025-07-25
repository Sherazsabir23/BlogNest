const registerUser = async (form) => {
  const response = await fetch("http://localhost:3000/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
    credentials: "include", // ✅ IMPORTANT!
  });
  const data = await response.json();
  return data;
};

const loginUser = async (form) => {
  const response = await fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
    credentials:"include"
  });
  const data = await response.json();
  return data;
};

const logoutUser = async () => {
  const response = await fetch("http://localhost:3000/api/users/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // ✅ Already correct
  });
  const data = await response.json();
  return data;
};

const getUserProfile = async () => {
  const response = await fetch("http://localhost:3000/api/users/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // ✅ Already correct
  });
  const data = await response.json();
  return data;
};

const userDetails = async () => {
  const response = await fetch("http://localhost:3000/api/users/me", {
    method: "GET",
    headers: {
      "Content-type":"application/json",
    },

    
    credentials:"include",
  });

  
  const data = await response.json();
  return data;
};

const adminChecker = async ()=>{
    const response = await fetch ("http://localhost:3000/api/users/admin",{
        method:"GET",
        headers:{
           "Content-Type" : "application/json",

        },
        credentials:"include",
    })
  if (!response.ok) {
    throw new Error("Not authorized");
  }

    const data = await response.json();
    return data;
}

const verifyOtp = async ({email,otp})=>{
  const response = await fetch("http://localhost:3000/api/users/verify",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    
    body:JSON.stringify({email,otp})
  })

  
  const data = await response.json();  
  return data;       
}
const resendOtp = async (email) => {
  const response = await fetch("http://localhost:3000/api/users/resend-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email })
  });

  const data = await response.json();
  return data;
};

const deleteUser = async(id) =>{
  const response = await fetch(`http://localhost:3000/api/users/delete-user/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type": "application/json",
    }
  })
    const data = await response.json();

    return data;
}

const allUsers = async()=>{
  const response = await fetch("http://localhost:3000/api/users/allUsers",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
    }
  })
  const data = await response.json();
  return data;
}

const forgotPassword = async(email)=>{
  const response = await fetch("http://localhost:3000/api/users/forgotPassword",{
method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  credentials:"include",
  body:JSON.stringify({email:email})
  })

  const data = await response.json();
  return data;

}

const resetPassword = async(token,newPassword)=>{
  const response = await fetch(`http://localhost:3000/api/users/resetPassword/${token}`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({newPassword:newPassword}),
    credentials:"include"
  })

  const data = await response.json();
  return data;
}
export default { registerUser, loginUser, logoutUser, getUserProfile,userDetails,adminChecker,verifyOtp,resendOtp,deleteUser,allUsers ,forgotPassword,resetPassword};
