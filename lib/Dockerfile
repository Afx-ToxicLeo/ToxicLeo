FROM quay.io/afx_toxicleo/leo-md
RUN git clone  https://github.com/Afx-ToxicLeo/ToxicLeo /root/Leo/
WORKDIR /root/Leo/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
