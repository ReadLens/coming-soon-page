# ReadLens Coming Soon Page

A waitlist portal for the ReadLens platform. Built with Next.js 14, TypeScript, and Framer Motion, featuring a "buttery" smooth scrolling experience and perfect brand alignment.

## 🚀 Overview

This repository contains the standalone "Coming Soon" and Waitlist page for ReadLens. It is designed to be a performant landing page that captures early adopter interest while maintaining the core brand identity of the ReadLens ecosystem.

### Key Features
- **Buttery Smooth Scroll**: Powered by [Lenis](https://github.com/darkroomengineering/lenis) for a high-end, kinetic scrolling feel.
- **Brand Consistency**: Uses the same typography (`Sherika` and `Inter`), color palette, and component specifications as the main ReadLens platform.
- **Micro-interactions**: Subtle entrance animations and focus states built with `Framer Motion`.
- **Responsive Design**: Optimized for everything from mobile devices to high-resolution desktops.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd coming-soon-page
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Project Structure

```text
/app
  /components     # Modularized UI components
    Input.tsx     # Standardized brand input fields
    Button.tsx    # Multi-variant button system
    WaitlistForm.tsx # Conversion-optimized form logic
    SmoothScroll.tsx # Lenis implementation wrapper
  /lib            # Shared constants and data
    waitlist-data.ts # Book data and statistics
  layout.tsx      # Root layout with font and scroll providers
  page.tsx        # Main waitlist portal page
  globals.css     # Design system tokens and global styles
/public
  /fonts          # Brand fonts (Sherika, Inter)
  /img            # High-quality visual assets
  favicon.ico     # Brand-synced favicon
```

---

## 🎨 Design System

The project strictly follows the ReadLens Design System.

### Typography
- **Headings**: Sherika (Bold/ExtraBold)
- **Body**: Inter

### Inputs & Buttons
- **Input Corners**: `6px` border radius (`rounded-md`).
- **Focus Rings**: `2px` solid green (`var(--green-normal)`) with a `2px` offset.
- **Buttons**: Consistent with the `readlens-web` component library.

---

## 🔧 Core Components

### Input Component
Located in `app/components/Input.tsx`. Supports variants like `default`, `error`, and `success`. Syncs perfectly with the header styles of the main platform.

### SmoothScroll
Located in `app/components/SmoothScroll.tsx`. A client-side wrapper that initialization Lenis for the entire application.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.


