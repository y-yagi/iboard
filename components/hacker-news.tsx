import useSWR from 'swr'

const STORY_API = 'https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$key"&limitToFirst=20'
const fetcher = (url : string) => fetch(url).then(r => r.json())

const HackerNews= () => {
  const { data, error } = useSWR(STORY_API, fetcher)
  if (error) return <p>failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h3 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        HackerNews
      </h3>
      <div className="grid">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {data.forEach((id) => (
              <tr key={id}>
                <td><p>{id}</p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HackerNews;