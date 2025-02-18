import { getAllSongs } from "./(server)/api";
import { AppLink } from "./shared/components/app-link";
import { SongPreview } from "./SongPreview";

const SONGS_PER_PAGE = 6;

export default async function Home({ searchParams }: { searchParams: Record<string, string> }) {
  
  const page = Number.parseInt(searchParams['page'] ?? 1)
  const allSongs = await getAllSongs();
  const songs = allSongs.slice((page-1) * SONGS_PER_PAGE, page * SONGS_PER_PAGE)
  const nextPageUrl = {
    search: new URLSearchParams({
      page: (page + 1).toString(),
    }).toString(),
  };
  return (
    <>
      <h1>{"Speak Now (Taylor's Version) album"}</h1>
      <p>Page {page}</p>
      <ul>
        {songs.map(song => <li key={song.id}>
          <SongPreview name={song.name} header={song.header} />
          <p>{song.spotifyPlays}</p>
        </li>)}
      </ul>
      <AppLink href={nextPageUrl}>Next page</AppLink>
    </>
  );
}


