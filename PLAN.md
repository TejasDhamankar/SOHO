# Soho Farms CRM Implementation Plan

## Scope

Build the requested visual-system correction plus a MongoDB-backed internal CRM for Soho Farms. Keep the public marketing layout and content intact except where form submit behavior is required.

## Assumptions

- The project uses Next.js App Router under `src/app`, so new routes will be created under `src/app/...`.
- The package manager is Bun (`packageManager` is `bun@1.2.15`), so dependency installation will use `bun add` instead of `npm install`.
- The supplied `.env.local` values are development placeholders and should remain uncommitted.
- The admin credentials are single-admin credentials from environment variables.
- NextAuth Credentials login can use the env password directly, with bcrypt support included for hashed values if the password is later replaced with a bcrypt hash.
- Form layouts should remain visually unchanged; only client-side submit logic/status messages will be added.
- Drag and drop will be implemented with `@hello-pangea/dnd` as requested.

## File Structure To Create/Modify

- [ ] `PLAN.md` - working implementation checklist.
- [ ] `.gitignore` - ensure `.env.local` is ignored.
- [ ] `.env.local` - local development env values.
- [ ] `.env.example` - committed env template with empty values.
- [ ] `package.json` / `bun.lock` - add CRM/auth/database/drag-drop dependencies.
- [ ] `src/app/globals.css` - exact Shyen-inspired color tokens, typography, hero/video layers, admin/CRM styles.
- [ ] `src/components/sections/Hero.tsx` - restore requested hero video class and add gradient overlay layer.
- [ ] `src/components/sections/FormsSection.tsx` - convert to client form submit logic and fetch API routes.
- [ ] `src/lib/db.ts` - MongoDB singleton connection helper.
- [ ] `src/lib/auth.ts` - NextAuth credentials configuration.
- [ ] `src/lib/leadValidation.ts` - shared lead payload validation and normalization.
- [ ] `src/models/Lead.ts` - Mongoose lead model.
- [ ] `src/types/crm.ts` - shared CRM lead/stage/form type definitions.
- [ ] `src/app/api/auth/[...nextauth]/route.ts` - NextAuth route handler.
- [ ] `src/app/api/leads/brochure/route.ts` - brochure submission endpoint.
- [ ] `src/app/api/leads/enquiry/route.ts` - enquiry submission endpoint.
- [ ] `src/app/api/leads/site-visit/route.ts` - site visit submission endpoint.
- [ ] `src/app/api/leads/priority-booking/route.ts` - priority booking submission endpoint.
- [ ] `src/app/api/crm/leads/route.ts` - protected CRM lead list endpoint.
- [ ] `src/app/api/crm/leads/[id]/route.ts` - protected CRM lead update/delete endpoint.
- [ ] `src/app/admin/login/page.tsx` - admin login page.
- [ ] `src/app/admin/crm/page.tsx` - protected CRM page.
- [ ] `src/components/crm/FilterBar.tsx` - CRM filters.
- [ ] `src/components/crm/KanbanBoard.tsx` - drag/drop board.
- [ ] `src/components/crm/KanbanColumn.tsx` - CRM stage column.
- [ ] `src/components/crm/LeadCard.tsx` - lead card.
- [ ] `src/components/crm/StatsBar.tsx` - CRM metric cards.
- [ ] `src/proxy.ts` - protect `/admin/*` except `/admin/login`.

## API Routes To Add

- [ ] `POST /api/leads/brochure`
- [ ] `POST /api/leads/enquiry`
- [ ] `POST /api/leads/site-visit`
- [ ] `POST /api/leads/priority-booking`
- [ ] `GET /api/crm/leads?stage=&formType=`
- [ ] `PATCH /api/crm/leads/[id]`
- [ ] `DELETE /api/crm/leads/[id]`
- [ ] `GET|POST /api/auth/[...nextauth]`

## Schema Design

Mongoose `Lead` schema:

- `name: string` required
- `mobile: string` required
- `email?: string`
- `city?: string`
- `budget?: string`
- `message?: string`
- `preferredDate?: string`
- `visitors?: number`
- `visitType?: string`
- `bookingAmount?: string`
- `plotSize?: string`
- `formType: 'brochure' | 'enquiry' | 'site-visit' | 'priority-booking'` required
- `stage: 'contacted' | 'pipeline' | 'closed'` default `contacted`
- `createdAt`, `updatedAt` timestamps

## Component Breakdown

- Public forms:
  - Keep existing four form cards.
  - Add controlled submit handling with `FormData`.
  - Show inline success/error status and disable submit while loading.

- Admin login:
  - Client component using `signIn('credentials')`.
  - Redirects to `/admin/crm` on success.
  - Inline invalid-credentials error.

- CRM dashboard:
  - Server page checks session and redirects if missing.
  - Client board fetches leads through protected API.
  - Stats bar derives counts from loaded leads.
  - Filter bar controls form type and stage filters.
  - Kanban board groups filtered leads by stage.
  - Lead card supports stage dropdown and delete.
  - Drag/drop updates stage via PATCH.

## Order Of Implementation

- [x] Create this `PLAN.md` before editing existing files.
- [x] Read relevant local Next.js docs for App Router routes, server/client components, forms, CSS, and fonts.
- [x] Install dependencies.
- [x] Add env files and gitignore entry.
- [x] Implement DB, model, auth, validation helpers.
- [x] Add auth and lead API routes.
- [x] Wire public forms to API endpoints.
- [x] Apply exact color/typography/hero video visual fixes.
- [x] Build admin login page.
- [x] Build CRM components and protected dashboard.
- [x] Add middleware protection.
- [ ] Run typecheck/build and resolve issues.
- [ ] Update this checklist as tasks complete.
- [x] Follow-up: make hero video visibly present under the gradient and redesign Project Highlights from flat list/cards into featured highlights plus compact pills.
- [x] Follow-up: replace deprecated Next 16 middleware file convention with `src/proxy.ts`.
- [x] Follow-up: remove the green hero gradient so the video is the visible hero background.
