import ActiveNotes from "./ActiveNotes";
import AddNotes from "./AddNotes";
import ArchivedNotes from "./ArchivedNotes";
import DetailNote from "./DetailNote";
import NotFoundPage from "./NotFoundPage";

const pages = {
  ActiveNotes: <ActiveNotes />,
  ArchiveNotes: <ArchivedNotes />,
  AddNotes: <AddNotes />,
  DetailNote: <DetailNote />,
  NotFoundPage: <NotFoundPage />,
};

export default pages;
