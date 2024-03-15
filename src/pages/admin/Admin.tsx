import AdminPage from "../../components/dashboard/AdminPage";
import Navbar from "../../components/navbar/Navbar";
import { listVoter } from "../../mocks/admin/voter";

export default function Admin() {
  return (
    <>
      <Navbar />
      <AdminPage listVoter={listVoter} />
    </>
  );
}
