FROM node:17

ARG VIMRC_PATH=.vimrc.example

COPY ${VIMRC_PATH} /home/node/.vimrc

RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]

USER node

EXPOSE 3000
