#!/bin/bash

# Codoko Club - Project Launcher for Mac/Linux
# Make this file executable: chmod +x run-codoko.sh

# Colors for better UI
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

show_menu() {
    clear
    echo -e "${CYAN}========================================"
    echo "   CODOKO CLUB - PROJECT LAUNCHER"
    echo -e "========================================${NC}"
    echo ""
    echo "Select an option:"
    echo ""
    echo "[1] Run Full Project (Frontend + Backend)"
    echo "[2] Run Frontend Only"
    echo "[3] Run Backend Only"
    echo "[4] Install Dependencies"
    echo "[5] Exit"
    echo ""
    echo -e "${CYAN}========================================${NC}"
    read -p "Enter your choice (1-5): " choice
    echo ""
}

run_full_project() {
    clear
    echo -e "${GREEN}========================================"
    echo "Starting Full Project"
    echo -e "========================================${NC}"
    echo ""
    echo "Checking dependencies..."
    echo ""

    # Check and install backend dependencies
    if [ ! -d "backend/node_modules" ]; then
        echo -e "${YELLOW}Installing backend dependencies...${NC}"
        cd backend
        npm install
        cd ..
    fi

    # Check and install frontend dependencies
    if [ ! -d "frontend/node_modules" ]; then
        echo -e "${YELLOW}Installing frontend dependencies...${NC}"
        cd frontend
        npm install
        cd ..
    fi

    echo ""
    echo -e "${GREEN}Starting Backend Server...${NC}"
    
    # Start backend in background
    cd backend
    npm start &
    BACKEND_PID=$!
    cd ..

    sleep 3

    echo -e "${GREEN}Starting Frontend Server...${NC}"
    
    # Start frontend in background
    cd frontend
    npm run dev &
    FRONTEND_PID=$!
    cd ..

    echo ""
    echo -e "${GREEN}========================================"
    echo "Both servers are running!"
    echo -e "========================================${NC}"
    echo "Backend PID: $BACKEND_PID"
    echo "Frontend PID: $FRONTEND_PID"
    echo ""
    echo -e "${YELLOW}Press Ctrl+C to stop both servers${NC}"
    echo ""
    
    # Wait for user interrupt
    trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; echo ''; echo 'Servers stopped.'; exit" INT
    wait
}

run_frontend() {
    clear
    echo -e "${GREEN}========================================"
    echo "Starting Frontend Only"
    echo -e "========================================${NC}"
    echo ""

    cd frontend

    if [ ! -d "node_modules" ]; then
        echo -e "${YELLOW}Installing dependencies...${NC}"
        npm install
        echo ""
    fi

    echo "Starting development server..."
    echo ""
    npm run dev

    cd ..
}

run_backend() {
    clear
    echo -e "${GREEN}========================================"
    echo "Starting Backend Only"
    echo -e "========================================${NC}"
    echo ""

    cd backend

    if [ ! -d "node_modules" ]; then
        echo -e "${YELLOW}Installing dependencies...${NC}"
        npm install
        echo ""
    fi

    echo "Starting backend server..."
    echo ""
    npm start

    cd ..
}

install_dependencies() {
    clear
    echo -e "${GREEN}========================================"
    echo "Installing All Dependencies"
    echo -e "========================================${NC}"
    echo ""

    echo -e "${CYAN}[1/2] Installing Backend Dependencies...${NC}"
    cd backend
    npm install
    cd ..
    echo -e "${GREEN}Backend dependencies installed!${NC}"
    echo ""

    echo -e "${CYAN}[2/2] Installing Frontend Dependencies...${NC}"
    cd frontend
    npm install
    cd ..
    echo -e "${GREEN}Frontend dependencies installed!${NC}"
    echo ""

    echo -e "${GREEN}========================================"
    echo "All dependencies installed successfully!"
    echo -e "========================================${NC}"
    echo ""
    read -p "Press Enter to return to menu..."
}

# Main loop
while true; do
    show_menu
    
    case $choice in
        1)
            run_full_project
            ;;
        2)
            run_frontend
            read -p "Press Enter to return to menu..."
            ;;
        3)
            run_backend
            read -p "Press Enter to return to menu..."
            ;;
        4)
            install_dependencies
            ;;
        5)
            clear
            echo ""
            echo -e "${GREEN}Thank you for using Codoko Club Launcher!${NC}"
            echo ""
            sleep 2
            exit 0
            ;;
        *)
            echo -e "${RED}Invalid choice. Please try again.${NC}"
            sleep 2
            ;;
    esac
done
