# Public Folder Guide

This guide explains how to use the `public` folder to manage your website's images and assets.

## Folder Structure

```
public/
├── projects/          # Project thumbnail images
├── gallery/          # Gallery images
└── assets/           # General assets (logos, icons, backgrounds)
```

## How to Add Images

### 1. Upload Images to the Public Folder
- Download the project from v0
- Navigate to the `public` folder
- Add your images to the appropriate subfolder:
  - **projects/** - Use for project thumbnails on the homepage
  - **gallery/** - Use for gallery page images
  - **assets/** - Use for logos, icons, and background images

### 2. Use Images in Code

#### For Project Thumbnails
Edit `components/project-thumbnails.tsx` and update the image path:

```typescript
const projects: Project[] = [
  {
    id: "1",
    title: "Project Name",
    category: "Category",
    industry: "INDUSTRY",
    image: "/projects/your-image.jpg",  // Use local path
    slug: "project-slug",
  },
  // ... more projects
];
```

#### For Other Images
In any React component or page:

```tsx
import Image from 'next/image';

export default function MyComponent() {
  return (
    <Image
      src="/projects/image-name.jpg"
      alt="Description"
      width={800}
      height={600}
    />
  );
}
```

## Image Guidelines

- **Formats**: JPG, PNG, WebP, AVIF
- **Quality**: High quality recommended for better appearance
- **Size**: Keep file sizes optimized (under 1MB for thumbnails)
- **Naming**: Use descriptive names like `lozinr-project.jpg` instead of `image1.jpg`

## File Path Examples

```
/projects/lozinr-thumbnail.jpg       → Displays in project carousel
/gallery/work-sample-01.jpg          → Displays in gallery
/assets/company-logo.png             → Use as logo/brand image
```

## Deploy Your Changes

1. After adding images to the public folder
2. Download/sync your project to GitHub (if using Git)
3. Push changes to your repository
4. Deploy to Vercel - images will be automatically served

## Benefits of Using Local Images

✓ Faster loading times (no external CDN delay)
✓ Full control over your assets
✓ No dependency on external storage services
✓ Easy to manage and organize
✓ Better for SEO and performance

---

**Note**: The `public` folder is automatically served as static assets in Next.js. Any files placed here will be accessible via their relative path (e.g., `/projects/image.jpg`).
