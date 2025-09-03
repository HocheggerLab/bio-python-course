# Slide Renaming Guide

## Quick Reference: How to Rename a Slide

### Step 1: Rename the File
```bash
# Example: Renaming Slide05.tsx to Slide05PythonHistory.tsx
cd data/lectures/lecture1
mv Slide05.tsx Slide05PythonHistory.tsx
```

### Step 2: Update the Function Name in the File
Open the renamed file and update the export function:

**Before:**
```typescript
export function Slide05() {
```

**After:**
```typescript
export function Slide05PythonHistory() {
```

### Step 3: Update index.ts
In `data/lectures/lecture1/index.ts`, update the export line:

**Before:**
```typescript
export { Slide05 } from './Slide05'
```

**After:**
```typescript
export { Slide05PythonHistory } from './Slide05PythonHistory'
```

### Step 4: Update lecture1-slides.tsx
In `data/lectures/lecture1-slides.tsx`, update two places:

**Import section - Before:**
```typescript
import {
  Slide05,
  // other slides...
} from './lecture1'
```

**Import section - After:**
```typescript
import {
  Slide05PythonHistory,
  // other slides...
} from './lecture1'
```

**Component reference - Before:**
```typescript
{
  title: "The Story of Python",
  contentType: "center",
  component: Slide05
},
```

**Component reference - After:**
```typescript
{
  title: "The Story of Python", 
  contentType: "center",
  component: Slide05PythonHistory
},
```

### Step 5: Test
```bash
npm run build
```

If successful, you're done! If there are TypeScript errors, check you updated all references correctly.

---

## Pro Tips

- Keep the `Slide##` prefix to maintain order
- Use descriptive names like `Slide05PythonHistory` instead of just `Slide05`
- Always test with `npm run build` after changes
- Use git to track your changes: `git add -A && git commit -m "rename: Slide05 to Slide05PythonHistory"`

## Common Errors

**Error: Cannot find module**
- Check you updated the import in `lecture1-slides.tsx`
- Check you updated the export in `index.ts`

**Error: Component not found** 
- Check you updated the component reference in the slides array
- Make sure the function name matches exactly

---

*This manual process ensures you have full control over slide naming without script complexity.*