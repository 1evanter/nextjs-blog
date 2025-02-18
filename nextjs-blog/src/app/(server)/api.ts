import songs from './db.json'
import { delayed } from './delay'

export function getAllSongs() {
    return delayed(songs)
}