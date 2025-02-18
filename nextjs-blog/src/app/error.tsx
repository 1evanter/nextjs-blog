"use client"
import { ERRORS } from './errors';

export default function HomePageError({ error }: { error: Error }) {
  if (error.message === ERRORS.NOT_FOUND) {
    return <>Songs not found</>;
  }
  return <> Something went wrong</>;
}