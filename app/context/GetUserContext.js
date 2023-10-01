import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getUserData = async (userid) => {

    // if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    // } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    // }
    const docRef = await getDoc(doc(db, "users", 'userid'));
    docSnap = docRef;
    console.log(docSnap)

}

