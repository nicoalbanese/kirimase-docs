export function YoutubeVideo({ id, caption }: { id: string; caption: string }) {
  return (
    <div style={{ width: "100%", margin: "2rem 0" }}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p style={{ display: "inline-block", opacity: "60%" }}>{caption}</p>
    </div>
  );
}
