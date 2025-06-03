# storyforge

A platform for creating, sharing, and discovering stories, possibly with AI-assisted writing tools. (Please update this with a more specific description of the app's purpose and core features.)

## Features
- Story creation and editing tools
- AI writing assistance (if applicable)
- Community features for sharing and feedback
- (List other key features)

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/igor-kan/storyforge.git
    cd storyforge
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server
To start the development server, run:
```bash
npm run dev
```
This will typically start the server on `http://localhost:3000` (or as specified by Vite).

## Technologies Used
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment (GitHub Pages)

You can deploy this project to GitHub Pages:

1. **Build the static site:**
    ```bash
    npm run build
    ```
2. **Install `gh-pages`:**
    ```bash
    npm install --save-dev gh-pages
    ```
3. **Update `package.json`:**
    Add `homepage` and `scripts` for deployment:
    ```json
    {
      "homepage": "https://igor-kan.github.io/storyforge",
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
      }
    }
    ```
    **Note:** The `deploy` script uses `dist` as the build directory, common for Vite projects.
4. **Deploy:**
    ```bash
    npm run deploy
    ```

## Custom Domain
You can connect a custom domain to your deployed project. Refer to your hosting provider's documentation for instructions.
