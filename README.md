# DesignSpace –A design and development Workspace


**DesignSpace** is a collaborative digital whiteboard application, built using cutting-edge web technologies. It supports real-time editing, intuitive UI interactions, and seamless team collaboration.

## 🧠 Overview

This project demonstrates how to build a production-grade collaborative whiteboard with support for real-time updates, keyboard shortcuts, dynamic UI elements, and scalable backend logic.

## 🔧 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Backend:** [Convex](https://www.convex.dev/)
- **Real-Time Collaboration:** [Liveblocks](https://liveblocks.io/)

## 📦 Getting Started

### ✅ Prerequisites

Make sure the following are installed:

- Node.js (>= 14.x)
- npm (Node Package Manager)

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SahilDhiman01/DesignSpace-A-design-and-development-Workspace.git
   cd DesignSpace-A-design-and-development-Workspace

2. **Install dependencies**
   ```bash
   npm install

3. Set up environment variables
   Create a .env.local file in the root directory and configure it using .env.example as a reference.

4. Clerk Setup (Authentication)
   Enable Organization in your Clerk settings.
   Add a JWT Template named convex.
   Ensure org_id and org_role are present in claims.
   Add the issuer to auth.config.js inside /convex.

 5. Prepare Convex backend
    npx convex dev

 6. Start development server
   npm run dev
   Visit http://localhost:3000 in your browser.
