<h1 align="center">Ayush Kumar Sahu — Developer Portfolio</h1>

<p align="center">
  <strong>A modern, responsive, and high-performance portfolio showcasing my skills, projects, and experience</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

<p align="center">
  <a href="#demo">Demo</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#deployment">Deployment</a>
</p>

---

## Overview

This is my **personal developer portfolio**, built using **Next.js 16**, **React 19**, and **Tailwind CSS 4**.  
It follows modern best practices such as the **App Router**, **Server Components**, and **data-driven configuration**, making it fast, scalable, and easy to customize.

The portfolio highlights my **skills**, **projects**, **experience**, and provides a direct way to **contact me**.

---

## Demo

<p align="center">
  <img src="./public/image/screen.png" alt="Portfolio Screenshot" width="100%">
</p>

<p align="center">
  <strong>🚀 Live Demo:</strong> https://your-portfolio-link.com
</p>

---

## Features

- ✅ Built with **Next.js 16** & **React 19**
- ✅ Fully responsive design for all devices
- ✅ SEO-optimized using Next.js Metadata API
- ✅ Fast performance with Server Components
- ✅ Modern App Router architecture
- ✅ Easy customization via data files
- ✅ Contact form with Email & Telegram support
- ✅ Blog integration from **dev.to**
- ✅ Dark theme with smooth animations
- ✅ Docker support for containerized deployment
- ✅ Google Analytics / GTM ready

---

## Sections

| Section     | Description |
|------------|-------------|
| Hero       | Introduction and headline |
| About      | Personal summary |
| Experience | Work and internships |
| Skills     | Technical skill set |
| Projects   | Featured projects |
| Education  | Academic background |
| Blog       | Latest dev.to articles |
| Contact    | Email & Telegram form |

---

## Tech Stack

| Technology       | Purpose |
|------------------|--------|
| Next.js 16       | React framework |
| React 19         | UI library |
| Tailwind CSS 4   | Styling |
| SASS             | CSS preprocessing |
| Lottie           | Animations |
| Nodemailer       | Email service |
| Axios            | API requests |
| Docker           | Containerization |

---

## Installation

### Prerequisites

- Node.js **18.17+**
- Git
- pnpm (recommended) / npm / yarn

```bash
node --version
git --version
pnpm --version




---

## Getting Started :dart:

### 1. Fork and Clone the Repository

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/developer-portfolio.git
cd developer-portfolio
```

### 2. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env
```

Edit the `.env` file with your values (see [Usage](#usage-joystick) section).

### 4. Run the Development Server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 🐳 Docker Deployment (Alternative)

#### Option 1: Using Docker Compose (Recommended)

```bash
docker-compose up --build

# Run in detached mode
docker-compose up -d --build

# Stop
docker-compose down
```

#### Option 2: Using Docker Directly

**For Development:**

```bash
# Build the development image
docker build -t developer-portfolio:dev -f Dockerfile.dev .

# Run the container
docker run -p 3000:3000 --name portfolio-dev developer-portfolio:dev

# Stop and remove container
docker stop portfolio-dev && docker rm portfolio-dev
```

**For Production:**

```bash
# Build the production image
docker build -t developer-portfolio:prod -f Dockerfile.prod .

# Run the production container
docker run -p 3000:3000 --name portfolio-prod developer-portfolio:prod
```

---

## Usage :joystick:

### Environment Variables Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Google Tag Manager (Optional - for analytics)
NEXT_PUBLIC_GTM=GTM-XXXXXXX

# Your deployed app URL
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Telegram Bot Configuration (for contact form notifications)
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# Gmail Configuration (for contact form emails)
GMAIL_PASSKEY=your_gmail_app_password
EMAIL_ADDRESS=your_email@gmail.com
```

#### Variable Descriptions:

| Variable              | Required | Description                                  |
| --------------------- | -------- | -------------------------------------------- |
| `NEXT_PUBLIC_GTM`     | No       | Google Tag Manager ID for analytics tracking |
| `NEXT_PUBLIC_APP_URL` | Yes      | Your portfolio's public URL                  |
| `TELEGRAM_BOT_TOKEN`  | No       | Token for Telegram bot notifications         |
| `TELEGRAM_CHAT_ID`    | No       | Your Telegram chat ID for receiving messages |
| `GMAIL_PASSKEY`       | No       | Gmail app password for email notifications   |
| `EMAIL_ADDRESS`       | No       | Your Gmail address for sending emails        |

> **Note**: Contact form features require either Telegram or Gmail configuration (or both).

---

### Customize Your Portfolio Data

All portfolio content is managed through data files in the `utils/data/` folder:

#### 📝 Personal Information (`personal-data.js`)

```javascript
export const personalData = {
  name: "YOUR NAME",
  profile: "/profile.png", // Path to your profile image
  designation: "Software Developer", // Your job title
  description: "Your bio and introduction...", // About yourself
  email: "your.email@example.com",
  phone: "+1234567890",
  address: "City, Country",
  github: "https://github.com/yourusername",
  facebook: "https://www.facebook.com/yourprofile",
  linkedIn: "https://www.linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourusername",
  stackOverflow: "https://stackoverflow.com/users/your-id",
  leetcode: "https://leetcode.com/yourusername/",
  devUsername: "yourusername", // dev.to username for blog integration
  resume: "https://link-to-your-resume.pdf",
};
```

#### 💼 Additional Data Files

| File               | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| `experience.js`    | Your work experience and job history           |
| `projects-data.js` | Portfolio projects with descriptions and links |
| `skills.js`        | Technical skills and competencies              |
| `educations.js`    | Academic background and certifications         |
| `contactsData.js`  | Contact form configuration                     |

#### 🎨 Adding Your Profile Image

Place your profile picture in the `public/` directory and update the `profile` field in `personal-data.js`:

```javascript
profile: "/your-image-name.png"; // or .jpg, .webp
```

---

## Deployment :rocket:

### 🚀 Deploy to Vercel (Recommended)

**Manual Deployment:**

1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Add environment variables in **Settings** → **Environment Variables**
4. Deploy

**Features:**

- Native Next.js 16 support
- Automatic deployments on push
- Preview deployments for PRs
- Edge runtime support
- Global CDN and free SSL

---

### 🌐 Deploy to Netlify

**Manual Deployment:**

1. Sign up at [Netlify](https://www.netlify.com/)
2. Import your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables in **Site Settings** → **Environment**

---

### 🐳 Deploy with Docker

```bash
# Build production image
docker build -t developer-portfolio:prod -f Dockerfile.prod .

# Run
docker run -d -p 80:3000 --name portfolio developer-portfolio:prod

# Or use Docker Compose
docker-compose -f docker-compose.prod.yml up -d
```

---

## Tutorials :wrench:

### 📧 Gmail App Password Setup

1. Go to [https://myaccount.google.com/](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **Security** → **App Passwords**
4. Select app: **Mail**, device: **Other (Custom name)**
5. Generate and copy the 16-character password
6. Add to `.env` file:

```env
GMAIL_PASSKEY=abcd efgh ijkl mnop
EMAIL_ADDRESS=your.email@gmail.com
```

---

### 🤖 Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Set bot name and username (must end with `bot`)
4. Copy the bot token
5. Send a message to your bot
6. Get chat ID from: `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
7. Add to `.env` file:

```env
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

---


The portfolio automatically fetches and displays your latest public articles. No API key required.

---

## Packages Used :package:

### Core Dependencies

| Package         | Version | Purpose                                                      |
| --------------- | ------- | ------------------------------------------------------------ |
| **next**        | ^16.0.1 | Latest React framework with App Router and Server Components |
| **react**       | ^19.2.0 | JavaScript library with improved concurrent rendering        |
| **react-dom**   | ^19.2.0 | React package for working with the DOM                       |
| **tailwindcss** | ^4.1.16 | Modern utility-first CSS framework                           |
| **sass**        | Latest  | CSS preprocessor for styling                                 |

### UI & Animations

| Package                | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| **lottie-react**       | Lightweight animations with Lottie files   |
| **react-fast-marquee** | Smooth scrolling marquee component         |
| **react-icons**        | Popular icon library with easy integration |
| **react-toastify**     | Beautiful notification toasts              |

### Functionality

| Package                    | Purpose                           |
| -------------------------- | --------------------------------- |
| **axios**                  | Promise-based HTTP client         |
| **nodemailer**             | Email sending functionality       |
| **@emailjs/browser**       | Client-side email service         |
| **react-google-recaptcha** | Google reCAPTCHA integration      |
| **sharp**                  | High-performance image processing |
| **@next/third-parties**    | Third-party script optimization   |

---

## Troubleshooting :wrench:

### Common Issues and Solutions

<details>
<summary><strong>❌ "next is not recognized as an internal or external command"</strong></summary>

**Solution:**

```bash
# Option 1: Install Next.js globally
npm install -g next

# Option 2: Use npx (recommended)
npx next dev

# Option 3: Use package manager scripts
npm run dev
```

</details>

<details>
<summary><strong>❌ Port 3000 is already in use</strong></summary>

**Solution:**

```bash
# Find and kill the process using port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
PORT=3001 npm run dev
```

</details>

<details>
<summary><strong>❌ Module not found or dependency errors</strong></summary>

**Solution:**

```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Or with pnpm:
rm -rf node_modules pnpm-lock.yaml
pnpm store prune
pnpm install
```

</details>

<details>
<summary><strong>❌ Environment variables not working</strong></summary>

**Solution:**

- Ensure `.env` file is in the root directory
- Restart the development server after changing `.env`
- Check that variables starting with `NEXT_PUBLIC_` are used for client-side code
- Server-side variables should NOT start with `NEXT_PUBLIC_`

</details>

<details>
<summary><strong>❌ Images not loading</strong></summary>

**Solution:**

- Verify images are in the `public/` directory
- Use paths starting with `/` (e.g., `/profile.png`)
- Check image file extensions match the code
- Ensure image files are committed to your repository

</details>

<details>
<summary><strong>❌ Contact form not sending emails</strong></summary>

**Solution:**

- Verify Gmail App Password is correct (16 characters)
- Check that 2-Step Verification is enabled on your Google account
- Ensure `EMAIL_ADDRESS` matches the Gmail account
- Test Telegram bot token and chat ID separately
- Check browser console for error messages

</details>

---

## Contributing :handshake:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add some AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## License :page_with_curl:

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Support :coffee:

Support

- ⭐ Star the repository
- 🐛 Report issues
- 💡 Suggest features

Made with ❤️ by Ayush Kumar Sahu


