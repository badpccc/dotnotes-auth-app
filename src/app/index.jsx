import Login from "@/app/(auth)/login";
import { initDB } from "@/database/notesDB";

export default function Index() {
  initDB();
  
  return <Login />;
}