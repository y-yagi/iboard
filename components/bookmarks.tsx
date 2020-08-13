import Bookmark from "../types/bookmark";
import { useCollection, deleteDocument } from "@nandorojo/swr-firestore";

const Bookmarks = () => {
  const { data, error } = useCollection<Bookmark>(`bookmarks`, {
    orderBy: ["createdAt", "asc"],
  });
  if (error) return <p>Error!</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h3 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Bookmarks
      </h3>
      <div className="grid">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((bookmark) => (
              <tr key={bookmark.id}>
                <td>
                  <a href={bookmark.url} target="_blank">
                    {bookmark.title}
                  </a>
                </td>
                <td>
                  <button
                    className="btn btn-red"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this item?"
                        )
                      )
                        deleteDocument(`bookmarks/${bookmark.id}`);
                    }}
                  >
                    Destroy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Bookmarks;
