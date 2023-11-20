import { createBrowserRouter } from "react-router-dom";
import pages from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: pages.ActiveNotes,
  },
  {
    path: "/arsip",
    element: pages.ArchiveNotes,
  },
  {
    path: "/tambah-catatan",
    element: pages.AddNotes,
  },
  {
    path: "/detail-catatan/:id",
    element: pages.DetailNote,
  },
  {
    path: "*",
    element: pages.NotFoundPage,
  },
]);

export default router;
