const allPosts = async () => {
  const response = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();
  return data;
};

const myPosts = async () => {
  const response = await fetch("http://localhost:3000/api/posts/myposts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();
  return data;
};

const createPost = async (postData) => {
  const formData = new FormData();
  formData.append("title", postData.title);
  formData.append("content", postData.content);
   if (postData.image instanceof File) {
    formData.append("image", postData.image);
  }

  const response = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    credentials: "include",
    body: formData,
  });

  const data = await response.json();
  return data;
};

const getPostById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();
  return data;
};

const updatePost = async (id, postData) => {
  const formData = new FormData();
  formData.append("title", postData.title);
  formData.append("content", postData.content);
  formData.append("image", postData.image);
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    method: "PUT",
    credentials: "include",
    body: formData,
  });
  const data = await response.json();
  return data;
};

const deletePost = async (id) => {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", 
  });

  const data = await response.json();
  return data;
};



const latestPosts = async() =>{
  const response = await fetch("http://localhost:3000/api/posts/latest",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    },
    credentials:"include"
  })

  const data = await response.json();

  return data;
}

const searchPosts = async(query) =>{
  const response = await fetch(`http://localhost:3000/api/posts/search?query=${query}`,{
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
  allPosts,
  myPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  searchPosts,
  latestPosts
};
