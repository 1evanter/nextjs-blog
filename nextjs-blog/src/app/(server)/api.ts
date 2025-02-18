import { ERRORS } from '../errors';
import songs from './db.json'
import { delayed } from './delay'

export function getAllSongs() {
    return delayed(songs)
}

export function getSongByName(songName: string) {
    const song = songs.find(x => x.name === songName);

    if (!song) {
        throw new Error(ERRORS.NOT_FOUND);
    }

    return delayed(song);
}