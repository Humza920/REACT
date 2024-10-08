import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from "../../firebase/config.js";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

function Register() {
  //react hook form material for handing form fields

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //Navigate

  const navigate = useNavigate();

  //Register user to firebase

  const RegisterUserToFirebase = (data) => {
    console.log(data);

    //create user with email password

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;

        //create a constant for a profile

        const profile = data.userProfile[0];

        // Reference for the storage

        const UserProfileStorageRef = ref(storage, data.userProfile[0].name);

        // Added user data to firestore

        const UserAddedtoFirestore = () => {
          //upload user profile to the storage

          uploadBytes(UserProfileStorageRef, profile)
            .then((snapshot) => {
              console.log("Uploaded a blob or file!");

              // function of getting download URL of uploaded image

              getDownloadURL(UserProfileStorageRef)
                .then((url) => {
                  console.log("URL ==>", url);

                  // set the getting URL and other data to the firestore

                  const setDataInFirebase = async () => {
                    const docRef = await addDoc(collection(db, "user"), {
                      userName: data.username,
                      email: data.email,
                      uid: user.uid,
                      profile: url,
                    });
                    console.log("Document written with ID: ", docRef.id);
                  };

                  setDataInFirebase();
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((err) => {
              console.log("File upload error ===>", err);
            });
        };
        UserAddedtoFirestore();

        //alert user sucess login

        alert("You have sucessfully Registered!");

        //navigate to the home page after sucess alert

        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;

        alert(errorMessage);
      });
  };

  return (
    <div className="shadow-2xl p-[30px] flex justify-center flex-col items-center bg-white border-4 w-[21rem] sm:w-[35rem] md:w-[35rem] lg:w-[35rem] m-[auto] mt-[17vh] rounded-2xl">
      <div>
        <h1 className="text-center font-sans font-bold text-2xl">REGISTER</h1>
      </div>
      <form onSubmit={handleSubmit(RegisterUserToFirebase)}>
        <label className="input input-bordered flex items-center gap-2 mt-5 w-[19rem] sm:w-[25rem] md:w-[25rem] lg:w-[25rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            {...register("username", { required: true })}
            placeholder="Username"
          />
        </label>
        {errors.username && (
          <span className="text-red-600">Username is required</span>
        )}

        <label className="input input-bordered flex items-center gap-2 mt-5 w-[19rem] sm:w-[25rem] md:w-[25rem] lg:w-[25rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            {...register("email", { required: true })}
            placeholder="Email"
          />
        </label>
        {errors.email && (
          <span className="text-red-600">Email is required</span>
        )}
        <label className="input input-bordered flex items-center gap-2 w-[19rem] mt-4 sm:w-[25rem] md:w-[25rem] lg:w-[25rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />
        </label>
        {errors.password && (
          <span className="text-red-600">Password is required</span>
        )}
        <input
          type="file"
          className="file-input file-input-bordered flex items-center w-[19rem] mt-4 sm:w-[25rem] md:w-[25rem] lg:w-[25rem]"
          {...register("userProfile")}
        />

        <div className="mt-3">
          <button
            type="submit"
            className="btn btn-warning w-[19rem] mt-4 sm:w-[25rem] md:w-[25rem] lg:w-[25rem]"
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
