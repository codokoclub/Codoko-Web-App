# 🚀 Codoko Club - Quick Launch Guide

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-19.1.1-61dafb.svg)
![Express](https://img.shields.io/badge/express-5.1.0-lightgrey.svg)

> **One-click launcher scripts** for the Codoko Club web application. Works on Windows, macOS, and Linux.

---

## ⚡ Quick Start

### Windows
```bash
# Simply double-click the file
run-codoko.bat
```

### Mac/Linux
```bash
# First time only - make executable
chmod +x run-codoko.sh

# Run the launcher
./run-codoko.sh
```

---

## � Menu Options

When you launch the script, you'll see an interactive menu:

| Option | Description | Use Case |
|--------|-------------|----------|
| **[1]** | Run Full Project | Start both frontend + backend |
| **[2]** | Run Frontend Only | UI/UX development |
| **[3]** | Run Backend Only | API development |
| **[4]** | Install Dependencies | First-time setup |
| **[5]** | Exit | Close the launcher |

---

## 🎯 Key Features

### 🔍 Smart Dependency Management
- Automatically detects missing `node_modules`
- Auto-installs dependencies when needed
- No manual `npm install` required

### 🪟 Convenient Workflow
- **Windows**: Separate terminal windows for each server
- **Mac/Linux**: Unified terminal with graceful shutdown (Ctrl+C)

### 🎨 Color-Coded Interface
- Clear visual feedback
- Easy-to-read menus
- Error messages highlighted

### ⚙️ Flexible Run Modes
- Full-stack development
- Frontend-only mode
- Backend-only mode

---

## 📁 What's Included

### `run-codoko.bat` (Windows)
- Batch script for Windows 7/8/10/11
- Launches servers in separate windows
- Automatic dependency checking
- 154 lines of automated goodness

### `run-codoko.sh` (Mac/Linux)
- Bash script for Unix-based systems
- Process ID tracking for clean shutdown
- Signal trapping for graceful exits
- 196 lines of shell scripting magic

---

## �️ Prerequisites

Before you start, make sure you have:

- **Node.js** v14 or higher ([Download](https://nodejs.org/))
- **npm** (bundled with Node.js)
- Internet connection (for dependency installation)

**Check your installation:**
```bash
node --version   # Should be v14+
npm --version    # Should be 6+
```

---

## 🔧 Manual Setup (Alternative)

Prefer doing it manually? Here's how:

### 1. Install Dependencies
```bash
# Backend
cd backend
npm install

# Frontend  
cd frontend
npm install
```

### 2. Run Development Servers
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```

---

## 🌐 Access Your Application

Once running, access the app at:

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend**: [http://localhost:3500](http://localhost:3500)

---

## 🐛 Troubleshooting

<details>
<summary><strong>Windows: "Script execution is disabled"</strong></summary>

**Solution:**
- Right-click `run-codoko.bat`
- Select "Run as Administrator"
- Or add project folder to antivirus exceptions
</details>

<details>
<summary><strong>Mac/Linux: "Permission denied"</strong></summary>

**Solution:**
```bash
chmod +x run-codoko.sh
```
</details>

<details>
<summary><strong>Any OS: "Command not found: npm"</strong></summary>

**Solution:**
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal
- Verify with `node --version`
</details>

<details>
<summary><strong>Any OS: "Port already in use"</strong></summary>

**Solution (Mac/Linux):**
```bash
# Kill process on port 5173 (frontend)
lsof -ti:5173 | xargs kill -9

# Kill process on port 3500 (backend)
lsof -ti:3500 | xargs kill -9
```

**Solution (Windows):**
```powershell
# Find process on port 5173
netstat -ano | findstr :5173
# Kill it (replace PID with actual process ID)
taskkill /PID <PID> /F
```
</details>

---

## 💡 Pro Tips

1. **First Run?** Always select option `[4]` to install dependencies
2. **Full-Stack Dev?** Use option `[1]` to run both servers
3. **Frontend Focus?** Option `[2]` saves resources by skipping backend
4. **API Testing?** Option `[3]` runs backend without frontend

---

## 📦 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | React | 19.1.1 |
| Build Tool | Vite | 7.1.7 |
| Backend | Express | 5.1.0 |
| Database | MongoDB | 8.18.3 (Mongoose) |
| Styling | Tailwind CSS | 4.1.14 |

---

## 🤝 Contributing

Found a bug or have a suggestion for the launcher scripts?

1. Open an issue on [GitHub](https://github.com/codokoclub/Codoko-Web-App/issues)
2. Submit a pull request
3. Contact the Codoko Club development team

---

## 📄 License

MIT License - Part of the Codoko Club project

---

## 👥 Authors

- Jatin Kumar Mehta
- Saurabh Kumar Mishra
- Pankaj Kumar Ray

---

<div align="center">

**Made with ❤️ by Codoko Club**

[Website](https://codoko.club) • [GitHub](https://github.com/codokoclub) • [Report Bug](https://github.com/codokoclub/Codoko-Web-App/issues)

</div>
