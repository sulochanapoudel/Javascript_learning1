const axios = require("axios");
const {
  counter,
  filterById,
  filterByUserId,
  getAllPostTitle,
  getAllPostTitleOfUser,
  getPostOfTitle,
} = require("./arrayUtility/utility");

let test = async () => {
  let req = await axios.get("https://jsonplaceholder.typicode.com/posts");
  let allPost = req.data;
  //console.log(filterById(allPost,4))
  //console.log(counter(allPost))
  console.log(filterById(allPost, 5));
  console.log(filterByUserId(allPost,3))
};

test();
