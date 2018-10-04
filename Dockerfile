
        FROM node:6

        RUN mkdir -p /server
        COPY . /server
        WORKDIR /server
        RUN npm install --production

        ENV PORT 8080
        EXPOSE  $PORT

        CMD ["npm", "start"]
