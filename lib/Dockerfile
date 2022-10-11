FROM quay.io/afx-abu/abu-md
RUN git clone https://github.com/Afx-Abu/Abu-MD /Jsl/Abu/
WORKDIR /Jsl/Abu/
ENV TZ=Asia/Kolkata
RUN yarn install --ignore-engines
CMD ["node", "index.js"
