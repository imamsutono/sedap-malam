/**
 * Embed YouTube biasa. Facade thumbnail-lalu-swap-ke-iframe sebelumnya bikin
 * player mati setelah play, dan `loading="lazy"` sudah menahan ongkos muat
 * sampai kartu mendekati viewport — jadi facade-nya tidak lagi dibayar.
 */
export function YouTubeEmbed({ id, judul }: { id: string; judul: string }) {
  return (
    <iframe
      className="aspect-video w-full rounded-xl bg-night-900 ring-1 ring-cream-300"
      src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
      title={judul}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
    />
  );
}
