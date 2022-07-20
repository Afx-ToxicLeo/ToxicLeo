FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Afx-Abu/Abu-MD /Jsl/Abu
WORKDIR /Jsl/Abu
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines

CMD ["node", "index.js"]
