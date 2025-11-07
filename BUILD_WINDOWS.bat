@echo off
cd /d %~dp0
echo Installing deps...
call npm install
echo Building...
call npm run build
echo Done. Open .\dist\index.html
pause
