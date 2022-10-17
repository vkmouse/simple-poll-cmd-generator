XCOPY /S /I /Y "..\backend\simple-poll-cmd-generator" "simple-poll-cmd-generator"

START /WAIT CMD /C "CD ..\frontend\simple-poll-cmd-generator & npm run build & exit"
MKDIR "simple-poll-cmd-generator\templates"
XCOPY /S /I /Y "..\frontend\simple-poll-cmd-generator\build\index.html" "simple-poll-cmd-generator\templates\*"
XCOPY /S /I /Y "..\frontend\simple-poll-cmd-generator\build\static" "simple-poll-cmd-generator\static"

RMDIR /S /Q "simple-poll-cmd-generator"

PAUSE