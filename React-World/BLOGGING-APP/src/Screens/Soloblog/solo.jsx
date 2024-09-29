import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import Cards from "../../components/Cards";

function Solo() {
  // Ensure getData is not null before accessing its elements
  const getData = JSON.parse(localStorage.getItem("userSingleBlog")) || [];
  const uid = getData.length > 0 ? getData[0].uid : null;

  const [userBlog, setUserBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserBlog = localStorage.getItem("userBlog");
    if (storedUserBlog) {
      setUserBlog(JSON.parse(storedUserBlog));
      setLoading(false);
    } else if (uid) {
      // Only fetch data if uid is available
      getSingleUserBlog();
    } else {
      setLoading(false); // Avoid indefinite loading when no data is available
    }
  }, [uid]);

  const getSingleUserBlog = async () => {
    try {
      const q = query(collection(db, "userblogs"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      const blogData = [];
      querySnapshot.forEach((doc) => {
        blogData.push(doc.data());
      });
      setUserBlog(blogData);
      localStorage.setItem("userBlog", JSON.stringify(blogData)); // Cache data in localStorage
    } catch (error) {
      console.error("Error fetching user blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-center p-6 bg-gray-50 min-h-screen">
        {/* User Posts Section */}
        <div className="flex flex-col w-full md:w-3/4 md:ml-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            User Posts
          </h3>

          {loading ? (
            <h1>Loading...</h1>
          ) : userBlog.length > 0 ? (
            userBlog.map((item, index) => (
              <Cards
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                date={item.date}
                username={item.userName}
              />
            ))
          ) : (
            <h1>No post found...</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Solo;
