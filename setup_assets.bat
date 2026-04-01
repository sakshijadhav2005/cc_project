@echo off
set "brainDir=C:\Users\jadha\.gemini\antigravity\brain\43eb4dde-f3a5-4849-baee-29db598bbedc"
set "targetDir=d:\react_js_project\cc_project"

echo Copying premium assets to your project folder...
copy /Y "%brainDir%\hero_farm_equipment_1774852734575.png" "%targetDir%\"
copy /Y "%brainDir%\electric_tractor_product_1774852753139.png" "%targetDir%\"
copy /Y "%brainDir%\harvester_product_1774852770336.png" "%targetDir%\"
copy /Y "%brainDir%\agri_drone_product_1774852789426.png" "%targetDir%\"

echo Done! Please refresh your browser to see the EcoHarvest website as intended.
pause
