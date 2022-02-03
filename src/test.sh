mkdir music images videos
exts=$(ls | sed 's/^.*\.//' | sort -u)
for ext in $exts
do
echo Processing $ext
if[ "$ext" == "mp3" || "$ext" == "flac" ]
then
    mv -v *.$ext music/
elif [ "$ext" == "jpg"  || "$ext" == "png" ]
then
    mv -v *.$ext images/
elif [ "$ext" == "avi"  || "$ext" == "mov"]
then
     mv -v *.$ext videos/
elif [ "$ext" == "log" ]
then
     rm -rf *.$ext
fi
done