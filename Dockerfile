FROM node:lts-buster
RUN git clone https://github.com/Afx-Abu/Jsl-MD /root/Abu/
WORKDIR /root/Abu/
RUN yarn install --network-concurrency 1
RUN npm start
