# Copilot Instructions for SobraMais Frontend

## Project Overview
- This is a Next.js (App Router) project using TypeScript and Tailwind CSS, bootstrapped with `create-next-app`.
- The architecture follows a Domain-Driven Design (DDD) approach, with clear separation between domain logic, application services, adapters, and UI components.

## Key Directories & Patterns
- `src/domain/` — Core business logic:
  - `entities/`: Business objects (e.g., `User.ts`)
  - `valueObjects/`: Immutable value types (not present yet, but referenced in docs)
  - `services/`: Domain services (not present yet, but referenced in docs)
- `src/application/` — Application layer:
  - `ports/input/`: Use case interfaces (e.g., `UserUseCase.ts`)
  - `ports/output/`: Repository interfaces (e.g., `UserRepository.ts`)
  - `useCases/`: Service implementations (e.g., `UserService.ts`)
- `src/adapters/secondary/api/`: API adapters for external communication (e.g., `UserApiAdapter.ts`)
- `src/components/` — UI components, with subfolders for layout and UI primitives.
- `src/app/` — Next.js app directory structure for routing and pages.

## Conventions & Practices
- **Strict separation of concerns:**
  - Domain logic must not depend on application, adapter, or UI code.
  - Adapters implement interfaces defined in `application/ports`.
- **TypeScript everywhere:** All business logic and UI code is written in TypeScript.
- **Tailwind CSS:** Used for styling; see `tailwind.config.js` and `globals.css`.
- **File naming:** Use camelCase for files and folders, except for React components (PascalCase).
- **No direct API calls in UI:** All external communication should go through adapters and services.

## Developer Workflows
- **Start dev server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Build:** `npm run build`
- **Lint:** `npm run lint` (uses `eslint.config.mjs`)
- **Type check:** `tsc --noEmit`
- **Add dependencies:** Use npm, yarn, pnpm, or bun as preferred.

## Integration Points
- **API communication:** Implemented in `src/adapters/secondary/api/`.
- **Domain logic:** All business rules in `src/domain/`.
- **UI:** Composed from `src/components/` and rendered via Next.js pages in `src/app/`.

## Examples
- To add a new business rule: create or update an entity/service in `src/domain/`, define interfaces in `application/ports`, implement in `useCases/`, and expose via an adapter if needed.
- To add a new page: create a folder in `src/app/` and add a `page.tsx` file.

## References
- See `src/domain/README.md` for DDD structure.
- See project root `README.md` for Next.js and dev workflow basics.

---
For questions about architecture or patterns, check the `src/domain/README.md` and `src/application/` structure for guidance.
