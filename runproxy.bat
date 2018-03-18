cls
SET mypath=%~dp0
echo %mypath%
Set mypath=%mypath:\=/%
echo %mypath%
chdir C:\cygwin64\bin
bash -c 'C:/cygwin64/usr/local/sbin/haproxy.exe -f %mypath%/proxy.cfg'
