import type { Subsektor } from "@/lib/content";

/**
 * Ilustrasi adegan malam: langit, gunung Pasuruan, sawah, figur orang, dan
 * rumpun Sedap Malam yang menyala. Satu SVG per subsektor — layer latar sama,
 * yang berbeda hanya adegan depan (fungsi `ADEGAN`).
 */

const NIGHT = "#0a1712";
const HILL = "#12241c";
const RIDGE = "#1d4d39";
const GLOW = "#ffab6c";
const WARM = "#f2700f";
const PETAL = "#fdf6ec";

/** Rumpun sedap malam: batang + kuntum bintang putih yang menyala. */
function Rumpun({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 0 C -2 -18, 1 -34, 0 -48" stroke={RIDGE} strokeWidth={2.4} fill="none" />
      <path d="M0 -8 C -8 -14, -12 -22, -13 -30" stroke={RIDGE} strokeWidth={1.6} fill="none" />
      <path d="M0 -14 C 8 -20, 12 -28, 14 -34" stroke={RIDGE} strokeWidth={1.6} fill="none" />
      {[
        [0, -50, 5],
        [-4, -40, 4],
        [5, -33, 3.6],
        [-13, -31, 3.2],
        [14, -35, 3.2],
      ].map(([bx, by, r], i) => (
        <g key={i} transform={`translate(${bx} ${by})`}>
          <circle r={r * 2.6} fill={PETAL} opacity={0.1} />
          {[0, 60, 120, 240, 300].map((a) => (
            <ellipse
              key={a}
              rx={r * 0.4}
              ry={r}
              cy={-r * 0.7}
              fill={PETAL}
              opacity={0.92}
              transform={`rotate(${a})`}
            />
          ))}
          <circle r={r * 0.35} fill={GLOW} />
        </g>
      ))}
    </g>
  );
}

/** Silhouette orang sederhana. */
function Orang({ x, y, s = 1, fill = NIGHT }: { x: number; y: number; s?: number; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={fill}>
      <circle cy={-38} r={7.5} />
      <path d="M-9 0 C -10 -26, 10 -26, 9 0 Z" />
    </g>
  );
}

/** Barang yang dipegang figur di adegan kolaborasi. */
function Bawaan({ jenis }: { jenis: "gitar" | "kain" | "buku" | "mangkuk" | "kamera" }) {
  switch (jenis) {
    case "gitar":
      return (
        <g fill={NIGHT}>
          <ellipse cx={12} cy={-16} rx={9} ry={7} />
          <path d="M18 -20 L 30 -34" stroke={NIGHT} strokeWidth={2.6} strokeLinecap="round" />
        </g>
      );
    case "kain":
      return (
        <path
          d="M-14 -22 C -2 -30, 10 -14, 22 -22 L22 -8 C 10 0, -2 -16, -14 -8 Z"
          fill={RIDGE}
          opacity={0.85}
        />
      );
    case "buku":
      return (
        <g>
          <path d="M2 -20 L 16 -25 L 16 -13 L 2 -8 Z" fill={NIGHT} />
          <path d="M2 -20 L 16 -25" stroke={PETAL} strokeWidth={1.4} opacity={0.7} />
        </g>
      );
    case "mangkuk":
      return (
        <g>
          <path d="M4 -20 a 9 7 0 0 0 18 0 Z" fill={NIGHT} />
          <path d="M9 -24 c -3 -5, 3 -8, 0 -13" stroke={PETAL} strokeWidth={1.2} fill="none" opacity={0.3} />
        </g>
      );
    case "kamera":
      return (
        <g fill={NIGHT}>
          <rect x={4} y={-26} width={18} height={12} rx={2.5} />
          <circle cx={13} cy={-20} r={3.4} fill={GLOW} opacity={0.55} />
        </g>
      );
  }
}

export type SceneVariant = Subsektor | "Filosofi" | "Kolaborasi";

const ADEGAN: Record<SceneVariant, React.ReactNode> = {
  // Latar Filosofi: satu orang menatap rumpun raksasa — "satu akar, ruang tenang".
  Filosofi: (
    <g>
      <circle cx={300} cy={170} r={82} fill={GLOW} opacity={0.07} />
      <Rumpun x={300} y={244} s={2.1} />
      <Rumpun x={214} y={230} s={0.85} />
      <Rumpun x={372} y={236} s={1.1} />
      <Orang x={132} y={226} s={1.25} />
      <Rumpun x={68} y={240} s={1.15} />
      <Rumpun x={24} y={232} s={0.7} />
    </g>
  ),

  // Latar Kolaborasi: lima pelaku subsektor berdiri di ladang yang sama.
  Kolaborasi: (
    <g>
      {[
        { x: 62, s: 1.0, y: 228, bawa: "gitar" as const },
        { x: 132, s: 1.1, y: 232, bawa: "kain" as const },
        { x: 204, s: 1.0, y: 228, bawa: "buku" as const },
        { x: 274, s: 1.08, y: 232, bawa: "mangkuk" as const },
        { x: 344, s: 0.98, y: 228, bawa: "kamera" as const },
      ].map((f) => (
        <g key={f.x} transform={`translate(${f.x} ${f.y}) scale(${f.s})`}>
          <Orang x={0} y={0} />
          <Bawaan jenis={f.bawa} />
        </g>
      ))}
      <Rumpun x={98} y={244} s={0.8} />
      <Rumpun x={170} y={248} s={0.9} />
      <Rumpun x={240} y={244} s={0.78} />
      <Rumpun x={310} y={248} s={0.88} />
      <Rumpun x={20} y={246} s={0.7} />
      <Rumpun x={382} y={244} s={0.75} />
    </g>
  ),

  // Pemusik duduk memetik gitar di pematang.
  Musik: (
    <g>
      <Rumpun x={318} y={214} s={1.15} />
      <g fill={NIGHT}>
        <circle cx={112} cy={168} r={8} />
        <path d="M100 208 C 98 182, 126 178, 128 208 Z" />
        <path d="M128 208 L 152 206 L 150 214 L 126 214 Z" />
      </g>
      <ellipse cx={140} cy={192} rx={15} ry={12} fill={NIGHT} />
      <ellipse cx={140} cy={192} rx={4} ry={3.4} fill={WARM} opacity={0.5} />
      <path d="M152 186 L 182 172" stroke={NIGHT} strokeWidth={3.5} strokeLinecap="round" />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M168 ${150 - i * 12} q 14 -8 26 -2`}
          stroke={GLOW}
          strokeWidth={1.4}
          fill="none"
          opacity={0.35 - i * 0.08}
        />
      ))}
      <Rumpun x={60} y={222} s={0.9} />
    </g>
  ),

  // Penari dengan selendang panjang yang melengkung seperti kelopak.
  "Seni Pertunjukan": (
    <g>
      <Rumpun x={44} y={218} s={1} />
      <g fill={NIGHT}>
        <circle cx={196} cy={128} r={8.5} />
        <path d="M188 202 C 184 168, 208 164, 204 202 Z" />
        <path d="M188 148 C 172 138, 160 120, 156 104" stroke={NIGHT} strokeWidth={4} fill="none" strokeLinecap="round" />
        <path d="M204 148 C 222 140, 236 124, 240 106" stroke={NIGHT} strokeWidth={4} fill="none" strokeLinecap="round" />
        <path d="M186 200 C 160 214, 232 214, 206 200 Z" />
      </g>
      <path
        d="M152 104 C 118 128, 130 172, 176 178"
        stroke={GLOW}
        strokeWidth={2.4}
        fill="none"
        opacity={0.6}
      />
      <path
        d="M244 104 C 282 130, 268 176, 218 180"
        stroke={WARM}
        strokeWidth={2.4}
        fill="none"
        opacity={0.55}
      />
      <Rumpun x={330} y={224} s={1.2} />
    </g>
  ),

  // Ibu & anak membaca di bawah lampu teplok.
  Literasi: (
    <g>
      <path d="M118 128 L118 152" stroke={NIGHT} strokeWidth={2.5} />
      <circle cx={118} cy={160} r={11} fill={WARM} opacity={0.28} />
      <circle cx={118} cy={160} r={5.5} fill={GLOW} />
      <circle cx={118} cy={160} r={26} fill={GLOW} opacity={0.09} />
      <Orang x={168} y={206} s={0.95} />
      <Orang x={206} y={210} s={0.62} />
      <g fill={NIGHT}>
        <path d="M172 182 L 190 174 L 190 190 Z" />
        <path d="M208 176 L 190 174 L 190 190 Z" />
      </g>
      <path d="M170 182 L 190 173 L 210 182" stroke={PETAL} strokeWidth={2} fill="none" opacity={0.75} />
      <Rumpun x={320} y={220} s={1.1} />
      <Rumpun x={62} y={226} s={0.8} />
    </g>
  ),

  // Perajin di depan bidang kain bermotif kelopak.
  Kriya: (
    <g>
      <rect x={214} y={140} width={104} height={72} rx={6} fill={NIGHT} opacity={0.85} />
      <rect x={214} y={140} width={104} height={72} rx={6} fill="none" stroke={GLOW} strokeWidth={1.6} opacity={0.5} />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <g key={`${r}${c}`} transform={`translate(${236 + c * 30} ${162 + r * 24})`}>
            {[0, 72, 144, 216, 288].map((a) => (
              <ellipse key={a} rx={1.8} ry={5} cy={-3.5} fill={PETAL} opacity={0.6} transform={`rotate(${a})`} />
            ))}
          </g>
        )),
      )}
      <Orang x={150} y={206} s={1} />
      <path d="M158 180 C 178 176, 194 172, 208 170" stroke={NIGHT} strokeWidth={3.5} fill="none" strokeLinecap="round" />
      <Rumpun x={66} y={222} s={1} />
    </g>
  ),

  // Gerobak jajan malam dengan uap hangat.
  Kuliner: (
    <g>
      <Rumpun x={54} y={220} s={0.95} />
      <g fill={NIGHT}>
        <rect x={196} y={172} width={104} height={38} rx={4} />
        <path d="M188 152 L 308 152 L 300 162 L 196 162 Z" />
        <rect x={200} y={152} width={4} height={22} />
        <rect x={292} y={152} width={4} height={22} />
      </g>
      <circle cx={248} cy={144} r={4.5} fill={GLOW} />
      <circle cx={248} cy={144} r={22} fill={GLOW} opacity={0.12} />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${226 + i * 22} 172 c -6 -10, 6 -16, 0 -26`}
          stroke={PETAL}
          strokeWidth={1.6}
          fill="none"
          opacity={0.3 - i * 0.06}
        />
      ))}
      <Orang x={162} y={208} s={0.95} />
      <Rumpun x={342} y={216} s={1.1} />
    </g>
  ),

  // Fotografer merekam bunga yang menyala.
  Lainnya: (
    <g>
      <Rumpun x={286} y={210} s={1.5} />
      <g stroke={NIGHT} strokeWidth={3} fill="none" strokeLinecap="round">
        <path d="M140 176 L 130 210" />
        <path d="M140 176 L 152 210" />
        <path d="M140 176 L 140 208" />
      </g>
      <rect x={128} y={160} width={26} height={16} rx={3} fill={NIGHT} />
      <circle cx={158} cy={168} r={5} fill={NIGHT} />
      <path d="M164 168 L 262 178" stroke={GLOW} strokeWidth={1.2} opacity={0.3} />
      <path d="M164 168 L 262 152" stroke={GLOW} strokeWidth={1.2} opacity={0.3} />
      <Orang x={104} y={210} s={0.9} />
      <Rumpun x={54} y={224} s={0.75} />
    </g>
  ),
};

export function Scene({
  variant,
  className,
  /**
   * Latar section jauh lebih lebar dari viewBox, jadi crop-nya dijangkarkan ke
   * bawah supaya figur & rumpun tidak terpotong (kartu tetap crop tengah).
   */
  anchor = "middle",
}: {
  variant: SceneVariant;
  className?: string;
  anchor?: "middle" | "bottom";
}) {
  const id = variant.replace(/\s/g, "-");
  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio={anchor === "bottom" ? "xMidYMax slice" : "xMidYMid slice"}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`langit-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#071310" />
          <stop offset="0.5" stopColor="#12281f" />
          <stop offset="0.82" stopColor="#3d3722" />
          <stop offset="1" stopColor="#6b4a22" />
        </linearGradient>
      </defs>

      <rect width={400} height={260} fill={`url(#langit-${id})`} />

      {/* Bintang. */}
      {[
        [28, 26],
        [72, 52],
        [116, 18],
        [188, 40],
        [244, 22],
        [300, 58],
        [352, 30],
        [378, 74],
        [148, 66],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.6 : 1} fill={PETAL} opacity={0.55} />
      ))}

      {/* Bulan. */}
      <circle cx={324} cy={54} r={38} fill={GLOW} opacity={0.1} />
      <circle cx={324} cy={54} r={17} fill="#fff7ea" opacity={0.9} />

      {/* Gunung Penanggungan & Arjuno di kejauhan. */}
      <path d="M0 152 L58 104 L92 128 L146 78 L204 132 L248 108 L296 150 L344 116 L400 154 L400 200 L0 200 Z" fill={HILL} />
      <path d="M146 78 L166 96 L126 96 Z" fill={RIDGE} opacity={0.5} />

      {/* Kabut tipis di atas sawah. */}
      <rect y={150} width={400} height={22} fill={PETAL} opacity={0.05} />

      {/* Petak sawah / ladang bunga. */}
      <path d="M0 168 C 90 158, 300 158, 400 170 L400 260 L0 260 Z" fill="#0d1c16" />
      {[186, 200, 216, 234].map((y, i) => (
        <path
          key={y}
          d={`M0 ${y} C 120 ${y - 6}, 280 ${y - 6}, 400 ${y + 2}`}
          stroke={RIDGE}
          strokeWidth={1}
          fill="none"
          opacity={0.35 - i * 0.05}
        />
      ))}

      {/* Kunang-kunang. */}
      {[
        [88, 148],
        [212, 158],
        [268, 140],
        [356, 168],
        [36, 176],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.8} fill={GLOW} opacity={0.7} />
      ))}

      {ADEGAN[variant]}
    </svg>
  );
}
