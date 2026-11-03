@echo off
cd /d "%~dp0"
start "" cmd /c "ping -n 2 127.0.0.1 >nul & start http://localhost:8765/index.html"
where py >nul 2>&1 && goto :py
where python >nul 2>&1 && goto :python
echo Python이 설치되어 있지 않습니다.
pause
goto :eof
:py
py -3 -m http.server 8765
goto :eof
:python
python -m http.server 8765
goto :eof
