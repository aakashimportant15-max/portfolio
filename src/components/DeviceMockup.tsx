import Image from "next/image";

export type MockupImage = {
  src: string;
  available: boolean;
};

/**
 * CSS-only device frame (no images/assets). If the screenshot file is
 * missing (checked at build time), shows a neutral placeholder card.
 */
export default function DeviceMockup({
  device,
  title,
  images,
}: {
  device: "laptop" | "phone";
  title: string;
  images: MockupImage[];
}) {
  const first = images[0];

  if (device === "phone") {
    return (
      <div className="mx-auto w-[230px] rounded-[2rem] border border-line bg-muted-bg p-2.5 shadow-[var(--shadow)]">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-card">
          <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-line" aria-hidden />
          <div className="flex h-[420px] items-center justify-center p-4 pt-8">
            {first?.available ? (
              <Image
                src={first.src}
                alt={`${title} screenshot (mobile UI)`}
                width={420}
                height={780}
                className="h-full w-auto object-cover"
              />
            ) : (
              <PlaceholderCard title={title} />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* screen */}
      <div className="rounded-xl border border-line bg-muted-bg p-2 shadow-[var(--shadow)]">
        <div className="overflow-hidden rounded-lg border border-line bg-card">
          <div className="flex h-6 items-center gap-1.5 border-b border-line px-3" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
          </div>
          <div className="relative aspect-[16/10]">
            {first?.available ? (
              <Image
                src={first.src}
                alt={`${title} screenshot (web app)`}
                fill
                className="object-cover object-top"
              />
            ) : (
              <div className="flex h-full items-center justify-center p-4">
                <PlaceholderCard title={title} />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* base */}
      <div className="mx-auto h-3 w-[86%] rounded-b-xl border-x border-b border-line bg-muted-bg" aria-hidden />
      <div className="mx-auto h-1.5 w-[70%] rounded-b-lg bg-line/70" aria-hidden />
    </div>
  );
}

function PlaceholderCard({ title }: { title: string }) {
  return (
    <div className="flex w-full max-w-[280px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-muted-bg px-6 py-8 text-center">
      <div className="font-display text-sm font-semibold text-ink">{title}</div>
      <div className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">
        Screenshot coming soon
      </div>
    </div>
  );
}
