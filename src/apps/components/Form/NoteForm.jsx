import { useEffect, useState } from "react";
import { addNote } from "../../utils/local-data";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      Swal.fire({
        title: "Oops!",
        text: "Form Tidak Boleh Kosong!",
        icon: "warning",
      });
      return;
    }

    try {
      const data = {
        title,
        body,
      };
      addNote(data);

      navigate("/");
      Swal.fire({
        title: "Good job!",
        text: "Berhasil Tambah Catatan!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Ada yang salah!",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    console.log(body);
  }, [body]);

  return (
    <form onSubmit={handleSubmit} className="w-full mt-3 flex flex-col gap-3">
      <div>
        <label className="block font-bold text-xl">Judul</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-linear duration-100"
          placeholder="Masukkan Judul Catatan..."
        />
      </div>
      <div>
        <label className="block font-bold text-xl">Isi Catatan</label>
        <ReactQuill
          className="w-full border rounded-lg p-2 outline-none focus:ring-2 bg-white focus:ring-blue-500 transition-all ease-linear duration-100"
          value={body}
          onChange={setBody}
          placeholder="Tuliskan isi catatan..."
          theme="snow"
          contentEditable
        />
      </div>
      <button className="p-2 bg-blue-500 w-full lg:w-44 hover:bg-blue-300 active:bg-blue-700 text-white rounded-md shadow-lg transition-all ease-linear duration-100">
        Tambah Catatan
      </button>
    </form>
  );
};

export default NoteForm;
