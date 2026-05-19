# Deployment Guide for Your Portfolio

Congratulations! Your highly modern portfolio is ready. You can deploy it for free using any of the following platforms.

---

## 🚀 Deployment with Vercel (Recommended)

Vercel is the fastest and easiest way to host your React projects.

### Option 1: Using GitHub (Best for updates)
1.  **Push your code to GitHub**:
    - Create a new repository on [GitHub](https://github.com).
    - Run these commands in your project folder:
      ```bash
      git init
      git add .
      git commit -m "Initial commit"
      git remote add origin YOUR_GITHUB_REPO_URL
      git push -u origin main
      ```
2.  **Deploy to Vercel**:
    - Go to [vercel.com](https://vercel.com) and log in with GitHub.
    - Click **"Add New"** > **"Project"**.
    - Import your new repository.
    - Click **"Deploy"**. Vercel will automatically detect Vite settings.
3.  **Live Link**: Vercel will generate a URL like `https://priyanshi-portfolio.vercel.app`.

### Option 2: Using Vercel CLI (Quickest)
1.  Open your terminal and run:
    ```bash
    npx vercel
    ```
2.  Follow the prompts (Log in if needed).
3.  Vercel will build and deploy your site immediately.

---

## 🌐 Deployment with Netlify

1.  **Build your project**:
    ```bash
    npm run build
    ```
    *(If the build fails in your local environment due to Vite version issues, use the GitHub integration below).*
2.  **Using GitHub Integration**:
    - Go to [Netlify](https://www.netlify.com).
    - Choose **"Import from Git"**.
    - Connect your GitHub repository.
    - Netlify will build and provide a live URL.

---

## 🔄 How to Update Your Site Later

1.  **Using GitHub (Recommended)**:
    - Simply make changes to your code locally.
    - Run `git add .`, `git commit -m "Updated skills"`, and `git push`.
    - Vercel/Netlify will see the push and **automatically redeploy** your site. 
2.  **Using CLI**:
    - Run `npx vercel --prod` or `npx netlify deploy --prod`.

---

## 🛠️ Local Development

To run the site locally for testing:
```bash
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.
