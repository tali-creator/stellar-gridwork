// TODO: replace with the real repo URL before shipping
export const GITHUB_URL = "https://github.com/your-org/gridwork";
export const GITHUB_ISSUES_URL = `${GITHUB_URL}/issues`;
export const DOCS_URL = "https://developers.stellar.org/docs/build/smart-contracts";
export const WAVE_URL = "https://drips.network/wave/stellar";

export type ProblemPoint = {
  title: string;
  description: string;
};

export const problems: ProblemPoint[] = [
  {
    title: "Vertical-Specific",
    description:
      "A wireless network, a mapping network, a compute network — each is its own chain, its own token, its own SDK. A new device category means building the reward-and-verification stack from zero.",
  },
  {
    title: "Native-Token-Denominated",
    description:
      "Operators get paid in a token whose value has nothing to do with the service they provided. Their income is a speculative bet before it's ever a paycheck.",
  },
  {
    title: "Disconnected From Fiat",
    description:
      'Cashing out usually means bridging to a CEX first. There\u2019s no direct path from "my sensor stayed online" to money you can actually spend.',
  },
];

export type Step = {
  step: string;
  title: string;
  description: string;
  code: string;
};

export const steps: Step[] = [
  {
    step: "01",
    title: "Register the Device",
    description:
      "Give a device an on-chain identity tied to an operator wallet and a category schema — bandwidth, sensor reading, compute cycle, energy unit.",
    code: 'register_device \\\n  --device_id "sensor-001" \\\n  --category "weather" \\\n  --operator <OPERATOR_ADDRESS>',
  },
  {
    step: "02",
    title: "Submit Proof of Contribution",
    description:
      "The device or its gateway submits a signed contribution proof. The verification layer checks it against the category's rules using oracle-attested data.",
    code: 'submit_proof \\\n  --device_id "sensor-001" \\\n  --units 42 \\\n  --signature <SIG>',
  },
  {
    step: "03",
    title: "Get Paid, Continuously",
    description:
      "Verified contribution streams USDC or EURC straight to the operator's wallet. No minimum threshold, no batching delay, no manual claim.",
    code: ">> +0.0042 USDC streamed\n>> operator: GABC\u20267F2K",
  },
];

export type ComparisonRow = {
  label: string;
  helium: string;
  peaq: string;
  iotex: string;
  gridwork: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    label: "Scope",
    helium: "Single vertical (wireless/IoT)",
    peaq: "Generalized machine economy L1",
    iotex: "IoT-focused L1",
    gridwork: "Generalized DePIN layer on a payments-native chain",
  },
  {
    label: "Settlement asset",
    helium: "HNT / MOBILE",
    peaq: "PEAQ",
    iotex: "IOTX",
    gridwork: "USDC / EURC",
  },
  {
    label: "Chain",
    helium: "Solana",
    peaq: "Own L1, Polkadot parachain",
    iotex: "Own L1",
    gridwork: "Stellar (Soroban)",
  },
  {
    label: "Cash-out path",
    helium: "Bridge / CEX required",
    peaq: "Bridge / CEX required",
    iotex: "Bridge / CEX required",
    gridwork: "Stellar's anchor network — fiat on/off-ramp built in",
  },
  {
    label: "Dev integration",
    helium: "Purpose-built hotspot firmware",
    peaq: "SDK, ~5\u201315 lines to register a device",
    iotex: "Chain-level integration",
    gridwork: "SDK-first — one Soroban contract call",
  },
  {
    label: "DeFi / stablecoin rails",
    helium: "Minimal",
    peaq: "Built after the fact",
    iotex: "Minimal",
    gridwork: "Already mature — Blend, Soroswap, tokenized treasuries",
  },
];

export type WhyStellarPoint = {
  title: string;
  description: string;
};

export const whyStellar: WhyStellarPoint[] = [
  {
    title: "Non-Speculative Volume",
    description:
      "DePIN activity comes from real usage — bandwidth served, sensors reporting — not trading. It's a different demand driver than Stellar's current DeFi and RWA activity.",
  },
  {
    title: "A Genuinely Missing Category",
    description:
      "Stellar already has stablecoins, tokenized treasuries, lending, and escrow. It doesn't have a DePIN layer yet — Gridwork is a first mover in an open lane.",
  },
  {
    title: "The Inverse Problem",
    description:
      "Peaq, IoTeX, and Helium all had to bolt payments onto a DePIN-first chain. Stellar already has payments and 500,000+ fiat and crypto anchors solved.",
  },
  {
    title: "Built for Micro-Payments",
    description:
      "Sub-5-second finality and near-zero fees make high-frequency, small-value device payouts practical — a better fit than general-purpose L1s or L2s.",
  },
];

export type TechGroup = {
  layer: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  { layer: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { layer: "Backend", items: ["Rust"] },
  { layer: "Smart Contracts", items: ["Soroban SDK", "Rust", "WASM"] },
  { layer: "Network", items: ["Stellar Testnet", "Stellar Mainnet"] },
  { layer: "Settlement", items: ["USDC", "EURC"] },
];

export type RoadmapItem = {
  title: string;
  status: "in-progress" | "planned";
};

export const roadmap: RoadmapItem[] = [
  { title: "Finalize Device Registry contract and category schema design", status: "in-progress" },
  { title: "Ship first verification module (single device category, oracle-attested)", status: "planned" },
  { title: "Reward Streaming contract — USDC/EURC micro-payments per verified unit", status: "planned" },
  { title: "Backend ingestion API and indexer", status: "planned" },
  { title: "Operator dashboard — registration, live earnings, device health", status: "planned" },
  { title: "Testnet deployment and first external device category integration", status: "planned" },
  { title: "Security review and audit prep", status: "planned" },
  { title: "Mainnet launch", status: "planned" },
];

export type ArchitectureLayer = {
  name: string;
  detail: string;
  description: string;
};

export const architectureLayers: ArchitectureLayer[] = [
  {
    name: "Frontend",
    detail: "Next.js",
    description:
      "Operator dashboard, device registration UI, contribution and earnings explorer, category browser.",
  },
  {
    name: "Backend",
    detail: "Rust",
    description:
      "Device and gateway ingestion API, signature verification, oracle integration, indexer for on-chain events.",
  },
  {
    name: "Smart Contracts",
    detail: "Soroban / Rust",
    description: "DeviceRegistry, VerificationModule(s), RewardStream, CategoryRegistry, ConfigManager.",
  },
];

export type ResourceLink = {
  label: string;
  href: string;
};

export const resourceLinks: ResourceLink[] = [
  { label: "Stellar Developer Docs", href: "https://developers.stellar.org" },
  { label: "Soroban Documentation", href: "https://developers.stellar.org/docs/build/smart-contracts" },
  { label: "Stellar Wave (Drips)", href: "https://drips.network/wave/stellar" },
  { label: "Stellar Community Fund", href: "https://communityfund.stellar.org" },
];
