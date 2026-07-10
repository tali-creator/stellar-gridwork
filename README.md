# Gridwork

**A generalizable DePIN micro-payment rewards layer, built on Stellar (Soroban).**

Gridwork lets any physical infrastructure network — IoT sensors, mesh and bandwidth nodes, weather stations, community solar, edge compute — register devices, prove real-world contribution, and get paid in real time. No minimum payout threshold. No batching delay. No native token required to receive rewards.

> Status: 🚧 Early development. Contracts, backend, and frontend are scaffolded and under active build. Not audited. Do not use on mainnet with real funds.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Stellar](https://img.shields.io/badge/network-Stellar%20Soroban-6b46c1)](https://developers.stellar.org)
[![Stellar Wave](https://img.shields.io/badge/Stellar%20Wave-participating-brightgreen)](https://drips.network/wave/stellar)

---

## Table of Contents

- [The Problem](#the-problem)
- [What Gridwork Is](#what-gridwork-is)
- [Why This Matters for Stellar](#why-this-matters-for-stellar)
- [How It Compares](#how-it-compares)
- [How It Works](#how-it-works)
- [Architecture](#architecture)
- [Repo Structure](#repo-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Smart Contracts (Soroban / Rust)](#smart-contracts-soroban--rust)
  - [Backend (Rust)](#backend-rust)
  - [Frontend (Next.js / TypeScript)](#frontend-nextjs--typescript)
- [Usage Example](#usage-example)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)
- [Resources](#resources)

---

## The Problem

DePIN (Decentralized Physical Infrastructure Networks) has proven itself as one of crypto's few categories with genuine, non-speculative usage — Helium's wireless coverage, Hivemapper's mapping data, and dozens of others pay real operators for real, verifiable contribution. But almost every existing DePIN protocol is:

- **Vertical-specific.** A wireless network, a mapping network, a compute network — each is its own chain, its own token, its own SDK. A team building a new device category (say, air-quality sensors or community EV chargers) has to build the entire reward-and-verification stack from scratch.
- **Native-token-denominated.** Operators are paid in a token whose value is disconnected from the service they provided, which means their income is a speculative bet before it's ever a paycheck.
- **Disconnected from fiat.** Cashing out usually means bridging to a CEX. There's no built-in path from "I earned tokens for my sensor's uptime" to "I have spendable money."

Stellar, meanwhile, has spent a decade solving payments, stablecoin issuance, and fiat on/off-ramping — and has essentially no DePIN presence. That's the gap Gridwork fills.

## What Gridwork Is

Gridwork is a protocol and developer SDK, native to Soroban, that lets **any** physical infrastructure network:

1. **Register devices on-chain** — a device gets an identity and is associated with an operator wallet and a device-category schema (bandwidth, sensor reading, compute-cycle, energy unit, etc.).
2. **Submit proof of contribution** — devices (or their gateway/aggregator) submit signed contribution proofs (bytes served, data points collected, compute delivered, kWh generated) which are checked against the category's verification rules.
3. **Get paid per unit, continuously** — verified contribution streams a reward in USDC or EURC directly to the operator's wallet. No minimum threshold, no batching delay, no manual claim step.

Any team building a physical infrastructure network on Stellar plugs into Gridwork instead of writing their own device registry, verification pipeline, and payment-streaming logic from scratch.

## Why This Matters for Stellar

- **New, non-speculative transaction volume.** DePIN activity is rooted in real-world usage (bandwidth served, sensors reporting), not trading — a different demand driver than Stellar's current DeFi/RWA-heavy activity.
- **A genuinely missing category.** Stellar has stablecoins, tokenized treasuries, lending, and escrow infrastructure — but nothing DePIN-native today. Gridwork is a first mover in an open lane.
- **The inverse of every other DePIN chain's problem.** Peaq, IoTeX, and Helium all had to bolt payments and stablecoin rails onto a DePIN-first chain. Stellar already has payments, stablecoins, and 500k+ fiat/crypto anchors solved — Gridwork just needs to add the DePIN layer on top.
- **Micro-payment economics that fit the use case.** Stellar's sub-5-second finality and near-zero fees are arguably a better fit for high-frequency, small-value device payouts than general-purpose L1s or L2s.

## How It Compares

| | **Helium** | **Peaq Network** | **IoTeX** | **Gridwork (Stellar)** |
|---|---|---|---|---|
| Scope | Single vertical (wireless/IoT coverage) | Generalized "machine economy" L1 | IoT-focused L1 | Generalized DePIN layer atop a payments-native chain |
| Settlement asset | HNT / MOBILE (native tokens) | PEAQ (native token) | IOTX (native token) | USDC / EURC (stablecoins) |
| Chain | Solana (app-specific tokens) | Own L1, Polkadot parachain, EVM-compatible | Own L1 | Stellar (Soroban smart contracts) |
| Cash-out path | Bridge/CEX required | Bridge/CEX required | Bridge/CEX required | Stellar's existing anchor network (fiat on/off-ramp built in) |
| Dev integration | Purpose-built hotspot firmware | SDK, ~5–15 lines of code to register a device | Chain-level integration | SDK-first, register a device with a Soroban contract call |
| Existing DeFi/stablecoin/RWA rails | Minimal | Built after the fact | Minimal | Already mature (Blend, Soroswap, MGUSD, tokenized treasuries) |

Gridwork's bet: it's easier to add a DePIN layer to a chain that already has payments solved than to add payments to a chain that was built DePIN-first.

## How It Works

```
Device / Gateway                Gridwork Protocol (Soroban)              Operator
──────────────────              ────────────────────────────             ──────────
1. Register device  ──────────▶  Device Registry contract
                                  (device ID, category, operator wallet)

2. Submit contribution ────────▶  Verification contract
   proof (signed)                 (checks proof against category rules,
                                   e.g. oracle-attested uptime/bandwidth/
                                   sensor reading)

3.                                Reward Streaming contract
                                  (computes payout per verified unit) ───▶ USDC/EURC
                                                                           streamed to
                                                                           operator wallet
```

- **Device Registry** — on-chain record of device ID ↔ operator wallet ↔ device category. Categories are schemas that define what "a unit of contribution" means for that device type.
- **Verification layer** — pluggable per category. Early categories will lean on oracle-attested data (e.g. via Reflector or another Stellar-compatible oracle) plus signature checks from the device/gateway; more categories can be added as separate verification modules without touching the core registry or payment logic.
- **Reward Streaming** — converts verified contribution units into a continuous USDC/EURC stream to the operator, using Soroban's low-fee, fast-finality execution to make per-unit micro-payments economically viable.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                       Frontend (Next.js)                 │
│   Operator dashboard · device registration UI ·          │
│   contribution/earnings explorer · category browser      │
└───────────────────────────┬───────────────────────────────┘
                             │ REST/gRPC
┌───────────────────────────▼───────────────────────────────┐
│                        Backend (Rust)                     │
│   Device/gateway ingestion API · signature verification · │
│   oracle integration · indexer for on-chain events        │
└───────────────────────────┬───────────────────────────────┘
                             │ Soroban invocations
┌───────────────────────────▼───────────────────────────────┐
│                Smart Contracts (Soroban / Rust)            │
│   DeviceRegistry · VerificationModule(s) · RewardStream ·  │
│   CategoryRegistry · ConfigManager                         │
└─────────────────────────────────────────────────────────┘
```

## Repo Structure

```
gridwork/
├── frontend/          # Next.js + TypeScript + Tailwind — operator dashboard & device console
├── backend/           # Rust — ingestion API, verification service, indexer
├── contracts/         # Soroban / Rust — on-chain protocol logic
├── docs/              # architecture notes, category schemas, ADRs
└── README.md
```

*(Adjust folder names above to match the actual repo layout once finalized.)*

## Tech Stack

| Layer | Stack |
|---|---|
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Backend | Rust |
| Smart Contracts | Soroban SDK, Rust, compiled to WASM |
| Network | Stellar (Testnet for development, Mainnet for production) |
| Settlement Assets | USDC, EURC (Stellar Asset Contracts) |

## Getting Started

### Prerequisites

- **Node.js** v20+ and a package manager (`pnpm` recommended)
- **Rust** (stable toolchain) — install via [rustup](https://rustup.rs)
- **wasm32-unknown-unknown** target: `rustup target add wasm32-unknown-unknown`
- **Stellar CLI** (formerly Soroban CLI) — [install instructions](https://developers.stellar.org/docs/tools/developer-tools/cli/install-cli)
- A funded Stellar **Testnet** account for local deployment/testing

### Smart Contracts (Soroban / Rust)

```bash
cd contracts

# Build the contract to WASM
stellar contract build

# Run tests
cargo test

# Create a testnet identity (one-time)
stellar keys generate --global alice --network testnet

# Deploy to testnet
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/gridwork.wasm \
  --source alice \
  --network testnet
```

### Backend (Rust)

```bash
cd backend

# Copy env template and fill in RPC URL, contract IDs, oracle config
cp .env.example .env

# Build and run
cargo run
```

### Frontend (Next.js / TypeScript)

```bash
cd frontend

# Install dependencies
pnpm install

# Copy env template and fill in backend API URL, contract IDs, network passphrase
cp .env.example .env.local

# Run the dev server
pnpm dev
```

Visit `http://localhost:3000` to open the operator dashboard.

## Usage Example

Registering a device against a deployed contract (illustrative — exact method names will match the contract interface as it's implemented):

```bash
stellar contract invoke \
  --id <GRIDWORK_CONTRACT_ID> \
  --source alice \
  --network testnet \
  -- \
  register_device \
  --device_id "sensor-001" \
  --category "weather" \
  --operator <OPERATOR_ADDRESS>
```

## Roadmap

- [ ] Finalize Device Registry contract + category schema design
- [ ] Ship first verification module (single device category, oracle-attested)
- [ ] Reward Streaming contract — USDC/EURC micro-payments per verified unit
- [ ] Backend ingestion API + indexer
- [ ] Operator dashboard (registration, live earnings, device health)
- [ ] Testnet deployment + first external device category integration
- [ ] Security review / audit prep
- [ ] Mainnet launch

*(This roadmap will evolve — see [Issues](../../issues) for current, granular work items, including ones scoped for Stellar Wave contributors.)*

## Contributing

Gridwork is being built in the open and is part of the **Stellar Wave** program via [Drips](https://drips.network/wave/stellar) — external contributors can pick up scoped issues during Wave cycles and earn USDC for merged PRs.

To contribute:

1. Fork the repo and clone your fork.
2. Check [open issues](../../issues) — issues tagged for a Wave cycle are scoped and sized (complexity noted in the issue).
3. Comment to claim an issue before starting work.
4. Follow the branch convention: branch from `develop`, name your branch `feat/short-description` or `fix/short-description`.
5. Open a PR against `develop` with a clear description of what changed and why.
6. A maintainer will review; once approved, it merges into `develop`, and tested changes are promoted to `main`.

Please keep PRs scoped to a single issue — smaller, focused PRs are reviewed and merged faster, which matters if you're contributing during an active Wave cycle.

## Security

This project has not been audited. Do not deploy to Stellar Mainnet with real funds. If you discover a security issue, please open a private report rather than a public issue (add contact details here once available).

## License

MIT — see [LICENSE](./LICENSE).

## Resources

- [Stellar Developer Docs](https://developers.stellar.org)
- [Soroban Documentation](https://developers.stellar.org/docs/build/smart-contracts)
- [Stellar Wave (Drips)](https://drips.network/wave/stellar)
- [Stellar Community Fund](https://communityfund.stellar.org)
