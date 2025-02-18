// так як обробники подій (onClick і тп) не працюють у серверних компонентах, ми виносимо цей компонент в окремий файл і додаємо 'use client'

"use client";

import { useState } from "react";
import { ROUTING } from "./routing";
import { AppLink } from "./shared/components/app-link";

type SongPreviewProps = {
  name: string;
  header: string;
};
export function SongPreview({ name, header }: SongPreviewProps) {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <AppLink href={ROUTING.song(name)}>{header}</AppLink>
      <button type="button" onClick={() => setLiked(true)}>{liked ? "💜" : "like"}</button>
    </>
  );
}
