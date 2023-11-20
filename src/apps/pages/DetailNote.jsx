import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  showFormattedDate,
  unarchiveNote,
} from "../utils/local-data";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const DetailNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setArchived] = useState(false);
  const [createdAt, setCreatedAt] = useState("");

  const handleDelete = (id) => {
    return Swal.fire({
      icon: "warning",
      text: "Yakin Ingin Hapus Catatan?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id);
        navigate("/");
        Swal.fire({
          title: "Good job!",
          text: "Berhasil Hapus Catatan!",
          icon: "success",
        });
      }
    });
  };

  const handleArchive = (id) => {
    archiveNote(id);
    navigate("/arsip");
    Swal.fire({
      title: "Good job!",
      text: "Berhasil Mengarsipkan Catatan!",
      icon: "success",
    });
  };

  const handleUnarchive = (id) => {
    unarchiveNote(id);
    navigate("/");
    Swal.fire({
      title: "Good job!",
      text: "Berhasil Mengaktifkan Catatan!",
      icon: "success",
    });
  };

  useEffect(() => {
    const note = getNote(id);
    setTitle(note.title);
    setBody(note.body);
    setArchived(note.archived);
    setCreatedAt(note.createdAt);
  }, [id]);

  return (
    <Layout>
      <h1 className="font-extrabold text-2xl">Detail Catatan</h1>
      <div className="w-full bg-white rounded-md p-4 mt-3">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">
            {title}{" "}
            <span
              className={`text-xs font-normal text-white px-2 rounded-md ${
                archived ? "bg-red-400" : "bg-green-400"
              }`}
            >
              {archived ? "arsip" : "aktif"}
            </span>
          </h1>
          <span className="text-xs">{showFormattedDate(createdAt)}</span>
        </div>
        <ReactQuill value={body} readOnly={true} theme="bubble" />
        <div className="flex gap-2">
          <button
            onClick={() => handleArchive(id)}
            className="bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 transition-all ease-linear duration-100 text-white p-1 px-2 rounded-md"
            hidden={archived}
          >
            Arsipkan
          </button>
          <button
            onClick={() => handleUnarchive(id)}
            className="bg-blue-400 hover:bg-blue-300 active:bg-blue-500 transition-all ease-linear duration-100 text-white p-1 px-2 rounded-md"
            hidden={!archived}
          >
            Aktifkan
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="bg-red-400 hover:bg-red-300 active:bg-red-500 transition-all ease-linear duration-100 text-white p-1 px-2 rounded-md"
          >
            Hapus
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailNote;
