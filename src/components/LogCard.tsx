type LogCardProps = {
  date: string;
  author: string;
  message: string;
};

export default function LogCard({ date, author, message }: LogCardProps) {
  return (
    <article className="mx-[10%] my-[3%] flex flex-col border border-border bg-site-surface shadow-md">
      <h3 className="w-full p-5 text-center text-base font-normal capitalize text-site-ink">
        {date}
      </h3>
      <div className="w-full border-t border-border px-10 py-16 text-center">
        <span className="text-site-ink">{author}</span>
        <br />
        <span className="text-site-ink-muted">•</span>
        <div className="mt-4 whitespace-pre-wrap wrap-break-word font-body text-sm leading-relaxed text-site-ink">
          {message}
        </div>
      </div>
    </article>
  );
}
