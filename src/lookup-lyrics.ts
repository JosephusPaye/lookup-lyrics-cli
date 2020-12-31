import { getLyrics, LookupLyrics } from '@josephuspaye/lookup-lyrics';
import k from 'kleur';

export async function lookupLyrics(song: string, artist: string) {
  console.log(`Looking up "${song}" by "${artist}"...\n`);

  let lyrics: LookupLyrics.LyricsResult;

  try {
    lyrics = await getLyrics(song, artist);
  } catch (err) {
    let message = `An error occurred: ${err.message}`;

    if (err.type === 'NOT_FOUND') {
      message = `Song not found. Check the song and artist name and try again, or try a web search.`;
    } else if (err.type === 'EXTRACTION_FAILED') {
      message = `Unable to find lyrics for "${song}". Try again later.`;
    } else if (err.type === 'SOURCE_REQUEST_FAILED') {
      message = 'Unable to get lyrics from online source. Try again later.';
    }

    console.error(k.red(message));

    process.exit(1);
  }

  console.log(k.green(lyrics.song));

  if (lyrics.artist) {
    console.log('Artist:', k.cyan(lyrics.artist.trim()));
  }

  if (lyrics.album) {
    console.log('Album: ', k.cyan(lyrics.album.trim()));
  }

  // Highlight section headings in green
  lyrics.lines = lyrics.lines.replace(/(\[.+\])/g, function (match: string) {
    return k.green(match);
  });

  console.log('\n' + lyrics.lines);

  console.log('\n' + lyrics.attribution);
}
