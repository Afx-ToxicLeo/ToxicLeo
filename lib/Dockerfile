FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Afx-Abu/Abu-Md /jsl/Abuser
WORKDIR /jsl/Abuser/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "index.js"]
