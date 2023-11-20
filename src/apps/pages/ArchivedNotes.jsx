import { useEffect, useState } from "react";
import CardList from "../components/Card/CardList";
import SearchForm from "../components/Form/SearchForm";
import Layout from "../components/Layout";
import { getArchivedNotes } from "../utils/local-data";
import CardEmpty from "../components/Card/CardEmpty";
import { useSearchParams } from "react-router-dom";

const ArchivedNotes = () => {
  const [notes, setNotes] = useState(getArchivedNotes());
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get("search") || "";
    if (searchValue.trim() !== "") {
      const filteredNotes = getArchivedNotes().filter((note) =>
        note.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setNotes(filteredNotes);
    } else {
      setNotes(getArchivedNotes());
    }
  }, [searchParams]);

  return (
    <Layout>
      <h1 className="font-extrabold text-2xl">Catatan Arsip</h1>
      <SearchForm
        searchParams={searchParams.get("search")}
        setSearchParams={setSearchParams}
      />
      {notes.length > 0 && <CardList notes={notes} />}
      {notes.length === 0 && <CardEmpty />}
    </Layout>
  );
};

export default ArchivedNotes;
