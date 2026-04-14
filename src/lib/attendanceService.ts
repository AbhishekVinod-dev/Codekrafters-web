import { db } from "./firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

/* ---------- MARK ATTENDANCE ---------- */
export async function markAttendance(memberId: string, date: string, present: boolean) {
  // remove old record for same day
  const q = query(
    collection(db, "attendance"),
    where("memberId", "==", memberId),
    where("date", "==", date)
  );

  const snapshot = await getDocs(q);

  for (const d of snapshot.docs) {
    await deleteDoc(doc(db, "attendance", d.id));
  }

  // add new record
  await addDoc(collection(db, "attendance"), {
    memberId,
    date,
    present,
  });
}
