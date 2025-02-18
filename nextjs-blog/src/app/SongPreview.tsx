// так як обробники подій (onClick і тп) не працюють у серверних компонентах, ми виносимо цей компонент в окремий файл і додаємо 'use client'

"use client";

import { useEffect, useState } from "react";
import { ROUTING } from "./routing";
import { AppLink } from "./shared/components/app-link";

type SongPreviewProps = {
  name: string;
  header: string;
};

const getLikeKey = (songName: string) => `speak_now_album_like_${songName}`

export function SongPreview({ name, header }: SongPreviewProps) {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
   const likeKey = getLikeKey(name);
    const likeValue = localStorage.getItem(likeKey);
    setLiked(likeValue === 'like')
  }, [name])

  const like = () => {
    const likeKey = getLikeKey(name);
    localStorage.setItem(likeKey, 'like');
    setLiked(true);
  }
  
  
  return (
    <>
      <AppLink href={ROUTING.song(name)}>{header}</AppLink>
      <button type="button" onClick={like}>{liked ? "💜" : "like"}</button>
    </>
  );
}
