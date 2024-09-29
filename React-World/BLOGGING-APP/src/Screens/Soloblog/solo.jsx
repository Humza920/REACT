import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import Cards from "../../components/Cards";

function SingleBlog() {
  const getData = JSON.parse(localStorage.getItem("userSingleBlog"));
  const uid = getData[0].uid;

  const [userBlog, setUserBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserBlog = localStorage.getItem("userBlog");
    if (storedUserBlog) {
      setUserBlog(JSON.parse(storedUserBlog));
      setLoading(false);
    } else {
      getSingleUserBlog();
    }
  }, []);

  const getSingleUserBlog = async () => {
    const q = query(collection(db, "userblogs"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const blogData = [];
    querySnapshot.forEach((doc) => {
      blogData.push(doc.data());
    });
    setUserBlog(blogData);
    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-center p-6 bg-gray-50 min-h-screen">
        {/* User Profile Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/4 mb-6 md:mb-0">
          <div className="flex justify-center mb-4">
            <img
              className="h-32 w-32 object-cover rounded-lg border-4 border-blue-500"
              src="https://images.unsplash.com/photo-1727299028177-ab72188797d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D"
              alt="User Profile"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Humza
          </h2>
          <p className="text-gray-600 text-center">
            humza.rehman.779@gmail.com
          </p>
        </div>

        {/* User Posts Section */}
        <div className="flex flex-col w-full md:w-3/4 md:ml-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            User Posts
          </h3>

          {loading ? (
            <h1>Loading...</h1>
          ) : userBlog.length !== 0 ? (
            userBlog.map((item, index) => {
              return (
                <Cards
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  username={item.userName}
                />
              );
            })
          ) : (
            <h1>No post found...</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
