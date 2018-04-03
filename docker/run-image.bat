@REM Run the image.

docker run -dt ^
  --name=react-app-cont ^
  -v %cd%\..:/home/docker ^
  -p 3000:3000 ^
  react-app
