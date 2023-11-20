import NoteForm from "../components/Form/NoteForm";
import Layout from "../components/Layout";

const AddNotes = () => {
  return (
    <Layout>
      <h1 className="font-extrabold text-2xl">Tambah Catatan</h1>
      <NoteForm />
    </Layout>
  );
};

export default AddNotes;
