import { getAllSongs } from "./(server)/api";
import { ROUTING } from "./routing";
import { AppLink } from "./shared/components/app-link";

const SONGS_PER_PAGE = 2;

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
          <AppLink href={ROUTING.song(song.name)}>{song.header}</AppLink> 
          <p>{song.spotifyPlays}</p>
        </li>)}
      </ul>
      <AppLink href={nextPageUrl}>Next page</AppLink>
    </>
  );
}
