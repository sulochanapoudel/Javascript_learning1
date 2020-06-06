

let counter= (arr) =>{
  return arr.length
}

let filterById = (arr,id)=>{
  return arr.find((post)=> post.id=== id)
}

let filterByUserId=(arr, userId) =>{
  return arr.filter((post)=>post.userId===userId)
}

let getAllPostTitle=(arr)=>{
  return arr.map((post)=>{
    return post.title
  })
}

let getAllPostTitleOfUser =(arr,userId)=>{
  let selectedPost= filterByUserId(userId);
  return selectedPost.filter((post)=>{
    return post.title
  })
}

let getPostOfTitle = (arr, title)=>{
  let selectedPost = arr.find((post)=>post.title=== title)
  if(selectedPost){
    return selectedPost.body
  }
  return null
}

module.exports = {
counter: counter,
filterById: filterById,
filterByUserId: filterByUserId,
getAllPostTitle: getAllPostTitle,
getAllPostTitleOfUser: getAllPostTitleOfUser,
getPostOfTitle: getPostOfTitle
}