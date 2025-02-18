import { getSongByName } from "@/app/(server)/api";

export default async function SongsPage({params}: Params) {
    // const { params } = props;
    const { songName } = params;
    const song = await getSongByName(songName);


    return <>
        <h1>{song.header}</h1>
    </>
}