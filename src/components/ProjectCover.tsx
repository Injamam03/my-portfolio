import Image from "next/image";

const LAYOUT = [
  { rotate: "-rotate-6", z: "z-10" },
  { rotate: "rotate-0", z: "z-20" },
  { rotate: "rotate-6", z: "z-10" },
];

export default function ProjectCover({
  index,
  screenshots,
  bannerGradient,
}: {
  index: number;
  screenshots: string[];
  bannerGradient: string;
}) {
  return (
    <div className={`relative flex h-52 items-end justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br ${bannerGradient} pt-6`}>
      <span className="absolute left-4 top-4 z-30 rounded-md border border-white/20 bg-black/30 px-2 py-0.5 font-[family-name:var(--font-mono)] text-xs text-white backdrop-blur">
        {String(index).padStart(2, "0")}
      </span>

      <div className="flex items-end">
        {screenshots.slice(0, 3).map((src, i) => {
          const pos = LAYOUT[i] ?? LAYOUT[1];
          return (
            <div
              key={src}
              className={`relative h-48 w-24 shrink-0 overflow-hidden rounded-t-xl border-4 border-b-0 border-neutral-900 bg-neutral-900 shadow-xl ${pos.rotate} ${pos.z}`}
              style={{ marginLeft: i === 0 ? 0 : "-1.25rem" }}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover object-top" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
