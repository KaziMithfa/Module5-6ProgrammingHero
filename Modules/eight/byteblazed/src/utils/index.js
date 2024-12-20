import toast from "react-hot-toast";
export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }

  return blogs;
};

// save

export const saveBlog = (blog) => {
  let blogs = getBlogs();

  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    return toast.error("Already bookmarked");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog bookmarked successfully");
};

// delete

export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remianing = blogs.filter((b) => b.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remianing));
  toast.success("Blog removed from the bookmarks");
};
