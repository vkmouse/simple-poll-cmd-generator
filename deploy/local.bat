REM Deploy Backend
CD %~dp0
XCOPY /S /I /Y "..\backend\simple-poll-cmd-generator" "simple-poll-cmd-generator"

REM Deploy Frontend
CD %~dp0
START /WAIT CMD /C "CD ..\frontend\simple-poll-cmd-generator & npm run build & exit"
IF NOT EXIST "simple-poll-cmd-generator\templates" MKDIR "simple-poll-cmd-generator\templates"
XCOPY /S /I /Y "..\frontend\simple-poll-cmd-generator\build\index.html" "simple-poll-cmd-generator\templates\*"
XCOPY /S /I /Y "..\frontend\simple-poll-cmd-generator\build\static" "simple-poll-cmd-generator\static"

REM Start
CD %~dp0/simple-poll-cmd-generator
go build .
simple-poll-cmd-generator.exe

REM Clean
CD %~dp0
RMDIR /S /Q "simple-poll-cmd-generator"

PAUSE
