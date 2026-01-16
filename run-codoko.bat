@echo off
title Codoko Club - Project Launcher
color 0A

:menu
cls
echo ========================================
echo    CODOKO CLUB - PROJECT LAUNCHER
echo ========================================
echo.
echo Select an option:
echo.
echo [1] Run Full Project (Frontend + Backend)
echo [2] Run Frontend Only
echo [3] Run Backend Only
echo [4] Install Dependencies
echo [5] Exit
echo.
echo ========================================
set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" goto fullproject
if "%choice%"=="2" goto frontend
if "%choice%"=="3" goto backend
if "%choice%"=="4" goto install
if "%choice%"=="5" goto exit
echo Invalid choice. Please try again.
timeout /t 2 >nul
goto menu

:fullproject
cls
echo ========================================
echo Starting Full Project
echo ========================================
echo.
echo Checking dependencies...
echo.

cd backend
if not exist "node_modules\" (
    echo Installing backend dependencies...
    call npm install
)
cd ..

cd frontend
if not exist "node_modules\" (
    echo Installing frontend dependencies...
    call npm install
)
cd ..

echo.
echo Starting Backend Server...
start "Codoko Backend" cmd /k "cd backend && npm start"

timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "Codoko Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo Both servers are running!
echo ========================================
echo Backend: Check "Codoko Backend" window
echo Frontend: Check "Codoko Frontend" window
echo.
echo Press any key to return to menu...
pause >nul
goto menu

:frontend
cls
echo ========================================
echo Starting Frontend Only
echo ========================================
echo.

cd frontend

if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting development server...
echo.
call npm run dev

pause
goto menu

:backend
cls
echo ========================================
echo Starting Backend Only
echo ========================================
echo.

cd backend

if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting backend server...
echo.
call npm start

pause
goto menu

:install
cls
echo ========================================
echo Installing All Dependencies
echo ========================================
echo.

echo [1/2] Installing Backend Dependencies...
cd backend
call npm install
cd ..
echo Backend dependencies installed!
echo.

echo [2/2] Installing Frontend Dependencies...
cd frontend
call npm install
cd ..
echo Frontend dependencies installed!
echo.

echo ========================================
echo All dependencies installed successfully!
echo ========================================
echo.
echo Press any key to return to menu...
pause >nul
goto menu

:exit
cls
echo.
echo Thank you for using Codoko Club Launcher!
echo.
timeout /t 2 >nul
exit
