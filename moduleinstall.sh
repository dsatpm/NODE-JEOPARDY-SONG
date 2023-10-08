module_name="jeopardy-loading"
echo 'Enter the name of the module'
read module_name
npm view $module_name version 
echo "Do you want to install this version(y/N) " 
read option 
if [ "$option" = "N" ] || [ "$option" = "n" ]
then 
echo "exiting...."
exit 1
else
npm install $module_name
fi