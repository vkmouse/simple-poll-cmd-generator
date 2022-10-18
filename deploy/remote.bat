REM bpy29664@cdfaq.com

REM Download
CD %~dp0
git clone git+ssh://git@push-n2-par-clevercloud-customers.services.clever-cloud.com/app_42554f66-5869-4150-a104-f0d0175421fd.git "simple-poll-cmd-generator"

REM Deploy Backend
CD %~dp0
XCOPY /S /I /Y "..\backend\simple-poll-cmd-generator" "simple-poll-cmd-generator"

REM Deploy Frontend
CD %~dp0
START /WAIT CMD /C "CD ..\frontend\simple-poll-cmd-generator & npm run build & exit"
IF NOT EXIST "simple-poll-cmd-generator\templates" MKDIR "simple-poll-cmd-generator\templates"
XCOPY /S /I /Y "..\frontend\simple-poll-cmd-generator\build\index.html" "simple-poll-cmd-generator\templates\*"
XCOPY /S /I /Y "..\frontend\simple-poll-cmd-generator\build\static" "simple-poll-cmd-generator\static"

REM Upload
CD %~dp0/simple-poll-cmd-generator
git add .
git commit -m 'Deploy'
git remote add clever git+ssh://git@push-n2-par-clevercloud-customers.services.clever-cloud.com/app_42554f66-5869-4150-a104-f0d0175421fd.git
git push -u clever master

REM Clean
CD %~dp0
RMDIR /S /Q "simple-poll-cmd-generator"

PAUSE
