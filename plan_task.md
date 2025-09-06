# Plan to Fix Failed Fetch Issues

## Information Gathered
- The main issue is in `src/app/admin/dosen/edit/[id]/page.tsx` where fetch requests are made to `/api/dosen/${id}` using database ID
- The API only has routes for NIDN (`/api/dosen/[nidn]/route.ts`), causing fetch failures
- Similar issues may exist in other parts of the application
- Error handling for fetch requests is basic and doesn't cover all failure scenarios

## Plan
1. **Create missing API route**: `/api/dosen/[id]/route.ts` to handle database ID lookups
2. **Audit other fetch calls**: Check for similar issues in other components/pages
3. **Improve error handling**: Add better error handling for network failures and API errors
4. **Test fixes**: Verify that fetch requests work correctly

## Dependent Files to Edit
- `src/app/api/dosen/[id]/route.ts` (new file)
- `src/app/admin/dosen/edit/[id]/page.tsx` (improve error handling)
- Other files with fetch calls (to be identified)

## Followup Steps
- Test the API routes
- Verify frontend fetch calls work
- Check browser console for any remaining errors
