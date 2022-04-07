FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Afx-Abu/Abu_ser /root/Abu
WORKDIR /root/Abu/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --ignore-engines
RUN git clone https://github.com/Afx-Abu/media

CMD ["node", "bot.js"]
