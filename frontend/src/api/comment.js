const getComment = async (id) => {
  const response = await fetch(`http://localhost:3000/api/comments/getcomment/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();
  return data;
};

const createComment = async (commentData) => {
  const response = await fetch("http://localhost:3000/api/comments/createcomment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData),
    credentials: "include",
  });
  const data = await response.json();
  return data;
};

const getAllUsersComments = async() =>{
  const response = await fetch("http://localhost:3000/api/comments/getAllUsersComments",{
    method:"GET",
    headers:{
      "Content-Type": "application/json",

    },
    credentials:"include"
  })
  const data = await response.json();
  return data;
}

const deleteComment = async(id)=>{
  const response = await fetch(`http://localhost:3000/api/comments/deleteComment/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    },
    credentials:"include"
  })
  const data = await response.json();
  return data;
};
export default {
  getComment,
  createComment,
  getAllUsersComments,
  deleteComment,
};
