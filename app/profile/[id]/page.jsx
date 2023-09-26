'use client'

import { collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
// import { getUserData } from "@/app/context/GetUserContext";
// import { docSnap } from "@/app/context/GetUserContext";
let docSnap = "";
export const getUserData = async () => {

  // if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  // } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  // }
  const docRef = await getDoc(doc(db, "users", 'fahd.fady212@gmail.com'));
  docSnap = docRef;
  console.log(docSnap)
}

export default function Profile() {
  const { user } = UserAuth();
  useEffect(() => {
    const checkAuthentication = () => {
      new Promise((resolve) => setTimeout(resolve, 50))
    }
    checkAuthentication()
  }, [user]);


  getUserData()
  console.log(docSnap)

  return (
    <section>
      <div className="user-profile text-center max-w-6xl mx-auto flex flex-col justify-center items-center">
        {/* <h1 className="md:text-5xl">{docSnap}</h1> */}
      </div>
    </section>
  )
}