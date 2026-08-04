// Ei component ta portfolio er "signature element" -
// projects section e app gulo ke real phone er moddhe dekhabe,
// jeta ekjon Flutter developer er jonno sobcheye mananshoi.

export default function PhoneMockup({
  screenColor,
  appName,
}: {
  screenColor: string;
  appName: string;
}) {
  return (
    <div className="relative mx-auto h-[280px] w-[140px] shrink-0 rounded-[1.75rem] border-4 border-[var(--color-surface-2)] bg-[var(--color-surface-2)] shadow-2xl">
      {/* notch */}
      <div className="absolute left-1/2 top-0 z-10 h-4 w-16 -translate-x-1/2 rounded-b-lg bg-[var(--color-surface-2)]" />

      {/* screen */}
      <div
        className={`h-full w-full overflow-hidden rounded-[1.4rem] bg-gradient-to-b ${screenColor} flex items-end p-3`}
      >
        <span className="font-[family-name:var(--font-mono)] text-[10px] leading-tight text-[var(--color-text)]/80">
          {appName}
        </span>
      </div>
    </div>
  );
}
