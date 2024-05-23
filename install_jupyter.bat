set WEVDIR=%cd%

set IMAGE=gcr.io/weavechain/weave_jupyter_public:latest

mkdir "%WEVDIR%\config"

docker pull %IMAGE%
docker stop weave_jupyter_public
docker rm weave_jupyter_public
docker run -d --mount type=bind,src="%WEVDIR%\config",dst=/app/config --name weave_jupyter_public -p 0.0.0.0:18888:18888 gcr.io/weavechain/weave_jupyter_public:latest
