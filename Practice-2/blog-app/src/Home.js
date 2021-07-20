import BlogList from "./blogList";
import useFetch from "./useFetch";

// for faking getting data from the server
// npx json-server --watch data/db.json --port 8000

// simple functional component
const Home = () => {
  // : is used to rename the object to whatever name we want
  const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
  // the second argument is a dependency array which implies that
  // useEffect runs only if the data inside the second argument array changes

  // const deleteBlog = (id) => {
  //   let newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  return (
    <div className="home">
      {
        error && <div>{error}</div>
      }
      {
        isPending && <div>Loading...</div>
      }
      {
        // checks if the blogs value is a truthy value, only then renders it
        blogs && <BlogList blogs = {blogs} title = "All Blogs!"/>
      }
      {/* <BlogList blogs = {blogs.filter((blog) => blog.author === "blah blah")} title = "Blah Blah's Blogs!" deleteBlog={deleteBlog}/> */}
    </div>
  );
};

export default Home;
