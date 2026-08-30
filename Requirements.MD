# Software Requirements Specification (SRS)

## SaaS Development Agency Website

This document defines the frontend functional, technical, design, content, and quality requirements for a modular, conversion-focused agency website for a company that designs and builds SaaS products.

The website must communicate trust, technical depth, and delivery capability while guiding qualified prospects toward a discovery call or project inquiry.

This SRS is for the frontend application only. The frontend must be built in Next.js. Backend services, database persistence, business logic, email/CRM integrations, authentication APIs, rate limiting, and server-side submission handling will be implemented separately in Laravel.

---

## 1. Project Goals

### 1.1 Primary Objectives

- Present the agency as a specialist SaaS product development partner.
- Convert qualified visitors into discovery call leads through a clear, low-friction inquiry flow.
- Showcase real or representative SaaS case studies with measurable outcomes.
- Explain the agency's strategy, design, engineering, and deployment capabilities in a credible way.
- Support both English and Bangla content for broader market reach.
- Provide a maintainable frontend architecture that can grow with new pages, case studies, services, and marketing campaigns.

### 1.2 Success Metrics

- Discovery/contact form completion rate.
- CTA click-through rate from the home page and service pages.
- Portfolio/case study engagement depth.
- Page load performance on mobile and desktop.
- Search visibility for SaaS development, MVP development, and related agency keywords.
- Error-free form submissions and successful lead capture.

---

## 2. Target Audience

### 2.1 Primary Users

- Startup founders validating or building a SaaS MVP.
- Funded startups looking to scale an existing product.
- Small and mid-sized businesses moving from manual operations to SaaS platforms.
- Non-technical founders who need a product and engineering partner.
- Technical teams needing UI/UX, frontend, backend, DevOps, or product delivery support.

### 2.2 User Intent

Visitors should be able to quickly answer:

- What kind of SaaS products does the agency build?
- Can this agency handle strategy, design, engineering, and deployment?
- What proof exists that the agency can deliver?
- What is the process and expected engagement model?
- How do I contact the agency and share my project details?

---

## 3. Frontend Scope, Technical Stack & Architecture

The frontend application must be built with a modern, maintainable Next.js stack. It must integrate cleanly with a separate Laravel backend through documented API endpoints.

### 3.1 Scope Boundary

Frontend responsibilities:

- Render all public-facing pages and responsive layouts.
- Manage client-side navigation, localized routes, and SEO metadata.
- Provide accessible interactive components.
- Manage discovery form UI, step state, client-side validation, loading states, and success/error feedback.
- Submit validated form data to Laravel API endpoints.
- Consume portfolio, service, testimonial, technology, and configuration data from static frontend content or Laravel APIs, depending on the final implementation decision.
- Display backend validation errors returned by Laravel in a user-friendly way.

Laravel backend responsibilities:

- Store and process submitted discovery form data.
- Provide API endpoints required by the frontend.
- Send email, CRM, Slack, calendar, or other integration notifications.
- Handle server-side validation, spam protection, rate limiting, and security controls.
- Manage database models, persistence, and backend business logic.
- Provide authentication or protected APIs if future admin or CMS functionality is added.

### 3.2 Required Frontend Stack

- **Framework:** Next.js with App Router.
- **Rendering:** React Server Components where appropriate for performance and SEO.
- **Language:** TypeScript.
- **Styling:** Tailwind CSS.
- **Component System:** shadcn/ui components built on Radix UI primitives.
- **Internationalization:** Next.js-compatible i18n setup, such as `next-intl`, supporting English and Bangla.
- **State Management:** Redux Toolkit for global UI state, multi-step form state, and client-side workflow state.
- **Forms:** React Hook Form.
- **Validation:** Zod schemas integrated with React Hook Form.
- **Icons:** Lucide React.
- **Notifications:** React-Toastify or an equivalent toast system already compatible with the chosen UI architecture.
- **Backend Integration:** REST or JSON API communication with the Laravel backend.

### 3.3 Frontend Architectural Requirements

- Use the Next.js `app` directory structure.
- Use route-level metadata for SEO.
- Keep reusable UI components inside a dedicated components directory.
- Keep feature-specific components grouped by domain where practical.
- Use typed constants or structured data files for services, portfolio items, testimonials, tech stacks, FAQs, and process steps.
- Avoid hard-coded repeated content inside page components when the content is reused elsewhere.
- Prefer server components for static marketing content.
- Use client components only where interactivity, local state, form handling, animation, or browser APIs are required.
- Keep Laravel API client logic isolated from presentation components.
- Do not implement database models, email delivery, CRM automation, or backend business logic in the Next.js frontend.
- Use typed request and response contracts for Laravel API integration.
- Store Laravel API base URLs and public integration configuration in environment variables.

### 3.4 Suggested Folder Structure

```txt
app/
  [locale]/
    page.tsx
    services/page.tsx
    portfolio/page.tsx
    portfolio/[slug]/page.tsx
    process/page.tsx
    about/page.tsx
    contact/page.tsx
    confirmation/page.tsx
components/
  ui/
  layout/
  sections/
  forms/
  portfolio/
  services/
lib/
  api/
  constants/
  schemas/
  store/
  utils/
content/
  en/
  bn/
public/
```

---

## 4. Dynamic Theming & Design System

The visual layer must be driven by centralized theme variables so global colors, typography, spacing, borders, and radius values can be updated consistently. The frontend must support both light mode and dark mode.

### 4.1 Theme Requirements

- Define all core colors as CSS variables.
- Map CSS variables into Tailwind and shadcn/ui theme tokens.
- Use semantic tokens such as `background`, `foreground`, `card`, `primary`, `muted`, `border`, and `destructive`.
- Provide complete light and dark color palettes using the same semantic token names.
- Light mode must be the default unless the user's saved preference or system preference indicates dark mode.
- Dark mode must use the `class` strategy, such as applying a `.dark` class to the root HTML element.
- Theme preference must persist across page reloads and route changes.
- The frontend should respect the user's system color-scheme preference on first visit.
- Theme switching must not cause layout shift or flash unreadable content.
- Avoid one-off colors inside components unless they represent data visualization or status states.
- Maintain accessible contrast for text, buttons, form controls, and navigation states.
- Use a maximum border radius of `8px` for cards and core UI containers unless shadcn/ui defaults require otherwise.
- All components, including forms, cards, navigation, tabs, filters, sliders, and toasts, must be visually polished in both light and dark modes.

### 4.2 Theme Toggle Requirements

- Include a theme toggle in the global header.
- The toggle must allow users to switch between light mode and dark mode.
- The toggle may optionally include a system preference option.
- Use an accessible button, switch, or dropdown control with a clear accessible label.
- Use Lucide icons such as `Sun`, `Moon`, or `Monitor` where appropriate.
- The current theme state must be visually clear.

### 4.3 Example `globals.css` Theme Structure

```css
@theme {
  --color-background: var(--bg-main);
  --color-foreground: var(--text-main);

  --color-card: var(--bg-card);
  --color-card-foreground: var(--text-card);

  --color-primary: var(--brand-primary);
  --color-primary-foreground: var(--brand-primary-fg);

  --color-muted: var(--bg-muted);
  --color-muted-foreground: var(--text-muted);

  --color-border: var(--border-subtle);
  --color-input: var(--border-input);
}

:root {
  color-scheme: light;

  --bg-main: #faf8f5;
  --text-main: #1e293b;

  --bg-card: #ffffff;
  --text-card: #1e293b;

  --brand-primary: #2563eb;
  --brand-primary-fg: #ffffff;

  --bg-muted: #f1f5f9;
  --text-muted: #64748b;

  --border-subtle: #e2e8f0;
  --border-input: #cbd5e1;

  --success: #16a34a;
  --warning: #f59e0b;
  --destructive: #dc2626;

  --radius-md: 8px;
}

.dark {
  color-scheme: dark;

  --bg-main: #0f172a;
  --text-main: #f8fafc;

  --bg-card: #111827;
  --text-card: #f8fafc;

  --brand-primary: #60a5fa;
  --brand-primary-fg: #0f172a;

  --bg-muted: #1e293b;
  --text-muted: #cbd5e1;

  --border-subtle: #334155;
  --border-input: #475569;

  --success: #22c55e;
  --warning: #fbbf24;
  --destructive: #f87171;
}
```

---

## 5. Sitemap & Core Pages

### 5.1 Required Routes

- `/` - Home page.
- `/services` - Services overview and detailed capabilities.
- `/portfolio` - Filterable case study archive.
- `/portfolio/[slug]` - Individual case study detail page.
- `/process` - Delivery process and engagement model.
- `/about` - Agency positioning, values, team, and operating principles.
- `/contact` - Multi-step discovery form.
- `/confirmation` - Post-submission confirmation page.
- `/privacy` - Privacy policy.
- `/terms` - Terms or service information if required.

### 5.2 Optional Future Routes

- `/blog` - SEO and thought leadership content.
- `/blog/[slug]` - Article detail pages.
- `/careers` - Hiring page.
- `/pricing` - Engagement models or package ranges if the agency wants transparent pricing.

---

## 6. Page Requirements

### 6.1 Home Page

The home page must immediately establish what the agency does, who it helps, and what action visitors should take next.

Required sections:

- **Hero Section**
  - Clear value proposition focused on SaaS product development.
  - Example headline: `We turn complex ideas into scalable, production-ready SaaS products`.
  - Supporting copy explaining strategy, design, engineering, and deployment capabilities.
  - Primary CTA linking to `/contact`.
  - Secondary CTA linking to `/portfolio` or `/services`.

- **Social Proof Banner**
  - Grayscale client/startup logo strip or text-based proof if logos are unavailable.
  - Must remain responsive and readable on mobile.

- **Capabilities Snapshot**
  - Three to six concise capability cards.
  - Suggested categories: Product Strategy, UI/UX Systems, Full-Stack Engineering, SaaS Architecture, DevOps, Growth Iteration.

- **Featured Case Study**
  - One prominent case study with challenge, solution, and outcome summary.
  - Include metrics where available, such as launch timeline, user growth, conversion lift, infrastructure improvement, or revenue impact.

- **Process Preview**
  - Four-step summary of the agency delivery process.
  - Steps should explain discovery, design, build, launch, and iteration.

- **Tech Stack Preview**
  - Visual list of key technologies used by the agency.
  - Must be grouped by frontend, Laravel backend, database, infrastructure, and integrations.
  - Backend and database items are displayed as content only unless the frontend consumes related Laravel API data.

- **Testimonials**
  - Client reviews or founder quotes.
  - Each testimonial should include name, role, company, and project context where available.

- **Final CTA**
  - Strong conversion block inviting visitors to book a discovery call or submit project details.

### 6.2 Portfolio / Case Studies Page (`/portfolio`)

The portfolio page must help visitors evaluate the agency's experience and relevance to their project.

Required features:

- Filterable case study grid.
- Filters by sector, service type, product stage, or technology.
- Case study cards with title, category, short summary, key metric, and CTA.
- Empty state when no results match filters.
- Responsive grid layout.

Suggested portfolio categories:

- FinTech.
- B2B SaaS.
- DevTools.
- HealthTech.
- EdTech.
- Marketplace.
- Internal Operations Platform.
- AI-enabled SaaS.

### 6.3 Case Study Detail Page (`/portfolio/[slug]`)

Each case study detail page must tell a credible product story.

Required sections:

- **Overview**
  - Client/product name.
  - Industry.
  - Engagement type.
  - Timeline.
  - Services provided.

- **The Challenge**
  - User pain points.
  - Business constraints.
  - Technical bottlenecks.
  - Market or operational pressure.

- **The Solution**
  - Product strategy decisions.
  - UX and interface approach.
  - Architecture choices.
  - Implementation highlights.

- **Architecture & Tech Stack**
  - Visual badges or grouped list of technologies.
  - Explain why major technologies were selected.

- **Key Features Built**
  - Product-specific feature list.
  - Examples: authentication, dashboards, billing, admin tools, reporting, notifications, integrations, multi-tenant workspaces.

- **The Outcome**
  - Quantified or qualified results.
  - Examples: faster launch, reduced manual work, improved conversion, increased reliability, improved onboarding, increased MRR.

- **CTA**
  - Contextual CTA inviting visitors with similar challenges to contact the agency.

### 6.4 Services Page (`/services`)

The services page must explain what the agency can deliver in detail.

Required sections:

- **Product Strategy & Discovery**
  - Product scope definition.
  - User journey mapping.
  - MVP planning.
  - Technical feasibility review.
  - Competitive and product audits.

- **UI/UX Design Systems**
  - Wireframes.
  - High-fidelity mockups.
  - Responsive design.
  - Design systems.
  - Component libraries using Radix UI, shadcn/ui, and Tailwind CSS.

- **Full-Stack SaaS Development**
  - Frontend applications.
  - Laravel APIs and backend services.
  - Authentication and authorization.
  - Multi-tenant architecture.
  - Database modeling.
  - Third-party integrations.

- **Billing & Subscription Systems**
  - Pricing tiers.
  - Subscription lifecycle.
  - Stripe or equivalent payment integration handled by the Laravel backend.
  - Webhooks.
  - Invoices and plan management.

- **DevOps & Deployment**
  - CI/CD pipelines.
  - Containerization with Docker where appropriate.
  - Environment configuration.
  - Monitoring and logging.
  - Production deployment workflows.

- **Post-Launch Iteration**
  - Analytics review.
  - Bug fixing.
  - Feature prioritization.
  - Performance improvements.
  - Roadmap planning.

### 6.5 Process Page (`/process`)

The process page must reduce buyer uncertainty by explaining how projects move from idea to launch.

Required stages:

1. **Discovery & Fit**
   - Understand business goals, target users, technical constraints, timeline, and budget.
2. **Product Blueprint**
   - Define scope, roadmap, feature priorities, user flows, and architecture direction.
3. **Design & Prototype**
   - Produce wireframes, visual design, component systems, and interactive prototypes.
4. **Build & Integrate**
   - Implement the Next.js frontend and integrate it with Laravel APIs, databases, integrations, and admin workflows handled by the backend team.
5. **QA & Launch**
   - Test functionality, accessibility, performance, forms, responsive layouts, and deployment readiness.
6. **Measure & Improve**
   - Track product usage, prioritize improvements, and iterate after launch.

### 6.6 About Page (`/about`)

The about page must support trust and credibility.

Required content:

- Agency mission.
- SaaS specialization statement.
- Team or founder background.
- Development values.
- Quality standards.
- Collaboration principles.
- Optional timeline or milestone section.
- CTA linking to `/contact`.

### 6.7 Contact / Discovery Form (`/contact`)

The contact page must include a multi-step discovery form optimized for qualified lead capture.

Required fields:

- Full name.
- Business email.
- Company or product name.
- Website or product URL, optional.
- Project type.
- Current product stage.
- Required services.
- Budget range.
- Desired timeline.
- Project context.
- Preferred contact method.

Required form steps:

1. **Contact Details**
   - Name, email, company, website.
2. **Project Profile**
   - Project type, stage, services needed.
3. **Budget & Timeline**
   - Budget range, preferred start date, launch urgency.
4. **Project Context**
   - Problem statement, goals, existing assets, relevant links.
5. **Review & Submit**
   - Summary of provided answers before final submission.

Validation rules:

- **Full Name:** Required, minimum 2 characters.
- **Business Email:** Required and valid email format.
- **Company/Product Name:** Required, minimum 2 characters.
- **Project Type:** Required single select.
- **Services Needed:** Required multi-select with at least one option.
- **Budget Range:** Required select from predefined agency tiers.
- **Timeline:** Required select or date range.
- **Project Context:** Required textarea, minimum 20 characters.
- **Preferred Contact Method:** Required select.

Behavior requirements:

- Persist step data in Redux while the user moves between steps.
- Show inline validation errors.
- Prevent final submission until all required fields are valid.
- Show a loading state during submission.
- Show toast feedback for success and failure states.
- Route successful submissions to `/confirmation`.
- Preserve accessibility for keyboard and screen reader users.

### 6.8 Confirmation Page (`/confirmation`)

The confirmation page must reassure the user that their inquiry was received.

Required content:

- Thank-you message.
- Brief explanation of next steps.
- Expected response timeframe.
- Optional CTA to view portfolio or services.
- Optional calendar booking link if available.

---

## 7. Global Components

### 7.1 Header / Navigation

- Sticky or persistent header on desktop if it does not reduce usability.
- Mobile responsive menu.
- Links to Home, Services, Portfolio, Process, About, and Contact.
- Prominent CTA button for discovery call/contact.
- Language switcher for English and Bangla.
- Light/dark theme toggle.
- Active route indication.

### 7.2 Footer

- Agency summary.
- Navigation links.
- Service links.
- Contact information.
- Social links.
- Legal links.
- Copyright text.

### 7.3 Tech Stack Grid Matrix

- Group technologies by category.
- Allow filtering by category.
- Show short descriptions on hover, focus, or expandable mobile interaction.
- Must remain accessible on touch devices.

### 7.4 SaaS Feature Blueprint Showcase

Interactive tabbed section explaining common SaaS architecture features:

- Subscription Engine.
- Identity & Security.
- Role-Based Access Control.
- Multi-Tenant Workspaces.
- Analytics Dashboard.
- Admin Console.
- Notification System.
- API Integrations.

### 7.5 Client Review Slider

- Carousel or responsive list of testimonials.
- Include client name, role, company, quote, and relevant project result.
- Must support keyboard interaction if implemented as a carousel.
- Must not auto-advance too quickly or trap focus.

### 7.6 FAQ Section

Include frequently asked questions such as:

- How long does it take to build a SaaS MVP?
- Can the agency work with an existing product?
- Does the agency provide design and backend development?
- What technologies does the agency use?
- How does pricing work?
- What happens after launch?

---

## 8. Content Requirements

### 8.1 Tone & Messaging

- Clear, confident, and technically credible.
- Avoid vague marketing claims without supporting detail.
- Emphasize business outcomes as well as technical execution.
- Use simple language for non-technical founders while preserving depth for technical buyers.

### 8.2 Required Content Types

- Service descriptions.
- Case study summaries.
- Outcome metrics.
- Testimonials.
- Process steps.
- Technology descriptions.
- FAQs.
- Form labels and validation messages.
- SEO titles and meta descriptions.
- English and Bangla translation strings.

### 8.3 Localization

- English must be the default locale unless otherwise configured.
- Bangla must be available for core pages and form labels.
- The language switcher must preserve the current route when possible.
- Content should be stored in a structure that allows adding more languages later.
- Avoid embedding translatable text directly inside deeply nested reusable components.

---

## 9. UX & Visual Design Requirements

- Use a professional SaaS-focused visual style.
- Prioritize clarity, scanability, and conversion.
- Avoid overly decorative layouts that make the site feel like a generic landing page.
- Use consistent spacing, type scale, buttons, and section rhythm.
- Use Lucide icons for interface actions and capability labels.
- Use real screenshots, product-style mockups, or high-quality generated visuals where needed.
- Buttons must have clear hover, focus, active, and disabled states.
- Forms must be easy to complete on mobile.
- Cards should use `8px` radius or less unless a component standard requires otherwise.
- Text must not overflow, overlap, or become unreadable at mobile widths.
- Important CTAs must be visible without excessive scrolling on key pages.

---

## 10. Functional Requirements

### 10.1 Lead Capture

- Users can submit a discovery inquiry through the multi-step contact form.
- Submitted data must be validated on the frontend before being sent to the Laravel API.
- Laravel validation errors must be mapped back to the relevant frontend fields when returned by the API.
- The system must provide clear success and failure feedback.
- Form state must survive navigation between steps.

### 10.2 Filtering

- Users can filter portfolio items.
- Users can filter technology items by category.
- Filters must be reflected visually and resettable.

### 10.3 Navigation

- All primary pages must be reachable from the header or footer.
- Mobile navigation must be keyboard accessible.
- Links must use Next.js routing.

### 10.4 Internationalization

- Users can switch between English and Bangla.
- Page content, navigation, buttons, and form messages must use localized strings.

---

## 11. Non-Functional Requirements

### 11.1 Performance

- Target Lighthouse performance score: 90 or higher on key pages.
- Use optimized images via Next.js image handling where applicable.
- Minimize client-side JavaScript for static content.
- Avoid unnecessary global state for static or local-only UI.
- Lazy-load heavy interactive sections where appropriate.

### 11.2 Accessibility

- Target WCAG 2.1 AA compliance.
- All interactive elements must be keyboard accessible.
- Use semantic HTML headings and landmarks.
- Form fields must have visible labels.
- Validation errors must be announced or associated with fields.
- Color contrast must meet accessibility standards.
- Carousels, tabs, dialogs, and menus must use accessible Radix UI or shadcn/ui primitives where possible.

### 11.3 SEO

- Each route must include unique title and meta description.
- Use semantic headings with a single primary `h1` per page.
- Include Open Graph metadata for shareable pages.
- Generate or define sitemap and robots configuration.
- Use structured data where relevant for organization, services, breadcrumbs, and articles if blog content is added.
- Case study pages must have descriptive slugs.

### 11.4 Security

- Validate form data on the frontend using Zod before submission.
- Sanitize or safely handle user-generated form input.
- Do not expose secrets in client-side code.
- Use environment variables for the Laravel API base URL, public analytics IDs, and other frontend-safe configuration.
- Do not place Laravel secrets, email service keys, payment secrets, webhook secrets, or CRM credentials in the frontend.
- Spam protection and rate limiting are Laravel backend responsibilities, but the frontend must display any related error responses clearly.

### 11.5 Reliability

- Form submission must handle network failures gracefully.
- Error messages must be useful and user-friendly.
- The site must render meaningful content even if optional dynamic data fails to load.
- Avoid runtime errors from missing optional content fields.

### 11.6 Maintainability

- Components must be typed with TypeScript.
- Shared content and configuration must be centralized.
- Reusable UI should be separated from page-specific sections.
- Avoid large monolithic page components.
- Keep naming consistent and descriptive.

---

## 12. Analytics & Tracking

The website should support privacy-conscious analytics.

Events to track:

- Primary CTA clicks.
- Secondary CTA clicks.
- Contact form start.
- Contact form step completion.
- Contact form submission success.
- Contact form submission failure.
- Portfolio filter usage.
- Case study CTA clicks.
- Language switch usage.

Analytics implementation must be configurable through environment variables and must not block page rendering.

---

## 13. Laravel API Integration

The Next.js frontend must communicate with the Laravel backend through a clearly defined API contract.

Frontend requirements:

- Use a centralized API client or fetch helper for Laravel requests.
- Keep endpoint paths, base URLs, and public API configuration outside presentational components.
- Handle loading, success, validation error, authorization error, rate limit error, and general failure states.
- Use typed request and response interfaces for form submission and any dynamic content.
- Avoid direct database access from the frontend.
- Avoid implementing backend business rules in frontend components except where needed for immediate UX validation.

Expected Laravel API responsibilities:

- Accept discovery form submissions.
- Return structured validation errors.
- Return success responses with a clear status and optional reference ID.
- Provide dynamic content endpoints if portfolio, services, testimonials, or settings are not stored statically in the frontend.
- Enforce backend validation, spam protection, rate limiting, and integration workflows.

Suggested discovery submission endpoint:

```txt
POST /api/discovery-inquiries
```

Suggested response shapes:

```ts
type DiscoverySuccessResponse = {
  status: "success";
  message: string;
  referenceId?: string;
};

type DiscoveryValidationErrorResponse = {
  status: "error";
  message: string;
  errors: Record<string, string[]>;
};
```

---

## 14. Form Submission & Integrations

The contact form should submit to a Laravel API endpoint. The Laravel backend may then connect to one or more of the following:

- Email notification service.
- CRM.
- Google Sheets or Airtable.
- Slack or Discord notification.
- Calendar booking flow.
- Custom Laravel backend API.

Minimum submission payload:

```ts
type DiscoveryFormPayload = {
  fullName: string;
  email: string;
  companyName: string;
  website?: string;
  projectType: string;
  productStage: string;
  servicesNeeded: string[];
  budgetRange: string;
  timeline: string;
  projectContext: string;
  preferredContactMethod: string;
  locale: "en" | "bn";
};
```

---

## 15. Testing Requirements

### 15.1 Unit and Component Testing

- Validate Zod schemas.
- Test form step state updates.
- Test filter logic.
- Test important utility functions.
- Test Laravel API client helpers with mocked responses.
- Test theme preference initialization and persistence where applicable.

### 15.2 Integration Testing

- Test complete contact form flow.
- Test successful and failed submission states.
- Test Laravel validation error mapping.
- Test route navigation.
- Test language switching.

### 15.3 Accessibility Testing

- Verify keyboard navigation.
- Verify visible focus states.
- Check form labels and validation messaging.
- Confirm color contrast in both light and dark modes.
- Confirm the theme toggle has an accessible label and keyboard support.

### 15.4 Responsive Testing

Test these viewport groups:

- Small mobile.
- Large mobile.
- Tablet.
- Laptop.
- Desktop.

---

## 16. Acceptance Criteria

The project is considered complete when:

- All required routes are implemented.
- The home page clearly explains the agency offer and includes strong CTAs.
- Services, portfolio, process, about, and contact pages are complete.
- The contact form supports all required steps, validation rules, and success/failure states.
- The contact form submits to the configured Laravel API endpoint.
- Laravel validation errors are displayed correctly in the frontend.
- English and Bangla localization is available for core pages and form content.
- The design system uses centralized theme variables.
- Light mode and dark mode are fully implemented.
- Theme preference persists across reloads and route changes.
- The global header includes an accessible theme toggle.
- The site is responsive across mobile, tablet, and desktop.
- Accessibility requirements are met for navigation, forms, buttons, tabs, dialogs, and sliders.
- SEO metadata exists for every required route.
- Portfolio filtering and technology filtering work correctly.
- No TypeScript errors exist.
- Linting passes.
- Core form, filtering, and localization tests pass.
- Production build completes successfully.

---

## 17. Out of Scope for Initial Release

The following items are optional unless explicitly requested:

- Full blog CMS.
- User accounts.
- Admin dashboard.
- Live chat.
- Frontend payment collection UI.
- Automated proposal generation.
- Advanced CRM automation.
- Real-time project estimation engine.
- Laravel backend implementation details beyond the API contract needed by the frontend.

---

## 18. Open Decisions

The following decisions should be finalized before development begins:

- Exact agency name and brand identity.
- Final color palette and typography.
- Whether portfolio items are real, anonymized, or fictionalized.
- Preferred form submission destination.
- Laravel API base URL and endpoint names.
- Calendar booking provider, if any.
- Analytics provider.
- Whether pricing ranges should be public.
- Required Bangla tone: formal, conversational, or mixed.
- Deployment platform.
