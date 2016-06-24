#!/bin/sh
if [ -z "$1" ]
  then
    echo "No argument supplied"
    exit 1
fi

file="$1.apk"
if [ -f "$file" ]
then
    rm "$file"
fi

echo "Making New Release"
echo ""
echo "Building android release"
echo ""
ionic build android
ionic build android --release

echo ""
echo "Copiying unsigned apk to base path"
echo ""
cp platforms/android/build/outputs/apk/android-release-unsigned.apk .

echo ""
echo "Signing unsigned apk file"
echo ""
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $1.keystore android-release-unsigned.apk $1

echo ""
echo "Zipaligning apk file"
echo ""
/home/aardid/Android/Sdk/build-tools/23.0.3/zipalign -v 4 android-release-unsigned.apk $1.apk

if [ -f "$file" ]
then
    rm android-release-unsigned.apk 
    echo ""
    echo "$file Created"
fi

