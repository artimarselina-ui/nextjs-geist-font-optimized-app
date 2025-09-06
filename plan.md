<think># Detailed Implementation Plan

This plan addresses the user request to enhance the admin dashboard by adding a **View** action button in the "Aksi" column for both Dosen and Tendik lists, and moving the detailed tabbed views (currently under Daftar Dosen and Daftar Tendik) to separate new pages. The dashboard will redirect to these new pages when the **View** button is clicked.

---

## 1. Overview of Changes

- **Add "View" button** in the "Aksi" column of the Dosen and Tendik tables on the main admin dashboard page (`src/app/admin/dashboard/page.tsx`).
- **Create new pages** for detailed tabbed views for Dosen and Tendik:
  - `src/app/admin/dashboard/dosen/[id]/page.tsx` — detailed tabs for a specific Dosen.
  - `src/app/admin/dashboard/tendik/[id]/page.tsx` — detailed tabs for a specific Tendik.
- **Move the existing tab UI and content** from the main dashboard page to these new pages.
- **Implement routing and navigation** from the dashboard to these new pages.
- **Ensure consistent styling and UX** with the existing dashboard.
- **Error handling** for invalid or missing IDs in the new pages.
- **Loading states** while fetching individual Dosen or Tendik data.
- **Preserve existing CRUD functionality** on the main dashboard page, but remove tabs from there.

---

## 2. File-by-File Changes

### 2.1 `src/app/admin/dashboard/page.tsx`

- **Modify the Dosen and Tendik tables:**
  - Add a **View** button in the "Aksi" column next to Edit and Delete.
  - The View button will navigate to `/admin/dashboard/dosen/[id]` or `/admin/dashboard/tendik/[id]` respectively.
- **Remove the tab UI and tab content** from this page.
- Keep the **Add**, **Edit**, and **Delete** buttons and functionality intact.
- Ensure the page remains performant and clean without the tab content.

### 2.2 `src/app/admin/dashboard/dosen/[id]/page.tsx`

- **New page component** to display detailed tabs for a single Dosen.
- Tabs to include:
  - 📊 Overview (basic info and summary)
  - 🏆 Penghargaan
  - 🔬 Penelitian
  - 🤝 Pengabdian
  - 📚 Publikasi Buku
  - 📄 Publikasi Jurnal
  - 💡 Riset HKI
  - 🔍 Riset Non HKI
- Fetch Dosen data by `id` (or `nidn` if that is the unique identifier).
- Show loading spinner or message while fetching.
- Show error message if Dosen not found.
- Each tab will show relevant data or placeholder text initially.
- Include a **Back to Dashboard** button/link to return to the main admin dashboard.
- Use Tailwind CSS for styling consistent with the main dashboard.
- Use clean typography, spacing, and layout for readability.
- Implement tab switching with state and accessible keyboard navigation.

### 2.3 `src/app/admin/dashboard/tendik/[id]/page.tsx`

- **New page component** to display detailed tabs for a single Tendik.
- Tabs to include:
  - 📋 Tugas Pokok
  - 💼 Pengalaman Kerja
  - 🎓 Pelatihan & Sertifikasi
  - 🔬 Penelitian
- Fetch Tendik data by `id` (or `nip` if that is the unique identifier).
- Show loading spinner or message while fetching.
- Show error message if Tendik not found.
- Each tab will show relevant data or placeholder text initially.
- Include a **Back to Dashboard** button/link.
- Use consistent styling and UX as in the Dosen detail page.
- Implement tab switching with state and accessible keyboard navigation.

---

## 3. Data Fetching and API Considerations

- Use existing API endpoints to fetch individual Dosen and Tendik data by ID.
- Handle API errors gracefully with user-friendly messages.
- Show loading indicators during data fetch.
- If needed, create or verify API routes for fetching single Dosen/Tendik by ID.

---

## 4. UI/UX Considerations

- The **View** button should be styled similarly to Edit/Delete buttons but distinct (e.g., blue color).
- Tabs should be horizontally aligned below the page header with clear active tab highlighting.
- Use consistent font (Roboto), colors (red for Dosen, blue for Tendik), and spacing.
- Provide keyboard accessibility for tab navigation.
- The detailed pages should have a clear page title and breadcrumb or back navigation.
- Ensure responsive design for smaller screens.

---

## 5. Error Handling and Edge Cases

- If the user navigates to a Dosen or Tendik detail page with an invalid or non-existent ID, show a clear error message and a link back to the dashboard.
- Disable buttons during loading states to prevent duplicate actions.
- Validate IDs from URL params before fetching.
- Handle network errors gracefully.

---

## 6. Summary of Files to Modify/Create

| File Path                                      | Description                                      |
|-----------------------------------------------|------------------------------------------------|
| `src/app/admin/dashboard/page.tsx`             | Modify main dashboard: add View button, remove tabs |
| `src/app/admin/dashboard/dosen/[id]/page.tsx` | New detailed Dosen page with tabs               |
| `src/app/admin/dashboard/tendik/[id]/page.tsx`| New detailed Tendik page with tabs              |

---

## 7. Next Steps

- Confirm if the unique identifiers for Dosen and Tendik are `id`, `nidn`, or `nip` to correctly implement routing and data fetching.
- Confirm if existing API endpoints support fetching single Dosen/Tendik by ID or if new endpoints are needed.
- After confirmation, proceed with implementation following the above plan.

---

This plan ensures a clean separation of concerns, improves UX by decluttering the main dashboard, and provides detailed views with tabbed navigation on dedicated pages. It follows best practices for React/Next.js routing, state management, and UI design with Tailwind CSS.

I will follow this plan thoroughly in my implementation and implement all the files in the plan.
