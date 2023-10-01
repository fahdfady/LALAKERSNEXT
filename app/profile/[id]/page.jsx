'use client'
import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
// import { getUserData } from "@/app/context/GetUserContext";
// import { docSnap } from "@/app/context/GetUserContext";
import { useParams } from 'next/navigation'
import { db } from "@/app/firebase";
import Image from "next/image";
import { useProtectedRoute } from "@/app/context/ProtectedRoute";

export default function Profile() {
  const params = useParams();
  const [userData, setUserData] = useState("");
  useProtectedRoute();

  if (!userData) {


    const docSnap = getDoc(doc(db, "users", params?.id)).then(docSnap => {
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        setUserData("No such document!")
      }
    });
  }
  else {
    console.log("حرااااااااااااااااااااام")
  }


  return (
    <section>
      {userData ? <div className="user-profile text-center max-w-6xl mx-auto flex flex-col justify-center items-center gap-6">

        <Image src={userData?.photo} width={120} height={120} alt="user" className="rounded-full" />

        <h1 className="md:text-4xl">{userData?.name}</h1>

        {/* <p className="md:text-2xl">A laker since <span>userData?.dataJoined</span></p> */}
      </div>
        : <></>
      }
    </section>
  )
}