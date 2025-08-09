# Next.js Meals App

A full-stack web application built with [Next.js](https://nextjs.org/) for sharing, viewing, and managing meal recipes. This project demonstrates modern React and Next.js features, file-based routing, server-side rendering, and image handling.

## Features

- **Browse Meals:** View a list of delicious meals with images, summaries, and details.
- **Share Meals:** Submit your own meal recipes with images, instructions, and creator info.
- **Community Page:** Connect with other users and see community content.
- **Image Uploads:** Upload images for your meals (see limitations below).
- **Error Handling & Loading States:** User-friendly error and loading screens.
- **Modern UI:** Responsive and clean design using CSS modules.

## Project Structure

```
app/                # Next.js app directory (routing, pages, layouts)
  meals/            # Meals listing, details, and sharing
  community/        # Community page
  ...
comonents/          # Reusable React components (meals, images, header, etc.)
lib/                # Server-side logic (database, actions)
assets/             # Static images and icons
public/             # Publicly served static files (including images)
meals.db            # SQLite database for meals
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Initialize the database:**
   ```bash
   node initdb.js
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Image Uploads & Limitations

- Images uploaded through the app are saved to the `public/images` folder.
- **In development**, new images are immediately available and can be displayed in the app.
- **In production**, only images present in `public/images` at build time are available. Any images uploaded after deployment will **not** be accessible, and will not display in the app.
- To support user-uploaded images in production, you must use an external image hosting service (such as AWS S3, Cloudinary, or similar) and store the image URLs in your database.
- For local development and testing, the current setup is sufficient.

**Summary:**
- For production-ready user uploads, integrate a cloud image host.
- For local/demo use, the current approach works, but has the above limitation.

## Technologies Used

- [Next.js](https://nextjs.org/) (App Router, SSR, API routes)
- [React](https://react.dev/)
- [SQLite](https://www.sqlite.org/index.html) (via better-sqlite3)
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [Slugify](https://www.npmjs.com/package/slugify), [xss](https://www.npmjs.com/package/xss) (for safe, clean data)

## Deployment

You can deploy this app easily on [Vercel](https://vercel.com/) or any platform that supports Next.js. **Note:** For user-uploaded images in production, you must use an external image host (see above).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is for educational purposes.
