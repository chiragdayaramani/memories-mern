export default (posts = [], action) => {
  // if(action.type == 'CREATE'){
  //     return ...
  // }

  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
