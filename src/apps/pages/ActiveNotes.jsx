/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import CardList from "../components/Card/CardList";
import SearchForm from "../components/Form/SearchForm";
import Layout from "../components/Layout";
import { getActiveNotes } from "../utils/local-data";
import CardEmpty from "../components/Card/CardEmpty";
import { useSearchParams } from "react-router-dom";

const ActiveNotes = () => {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get("search") || "";
    if (searchValue.trim() !== "") {
      const filteredNotes = getActiveNotes().filter((note) =>
        note.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setNotes(filteredNotes);
    } else {
      setNotes(getActiveNotes());
    }
  }, [searchParams]);

  return (
    <Layout>
      <h1 className="font-extrabold text-2xl">Catatan Aktif</h1>
      <SearchForm
        searchParams={searchParams.get("search")}
        setSearchParams={setSearchParams}
      />
      {notes.length ? <CardList notes={notes} /> : <CardEmpty />}
    </Layout>
  );
};

export default ActiveNotes;
