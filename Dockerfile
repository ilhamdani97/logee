# Define Base Image

FROM telkomindonesia/alpine:nodejs-14

MAINTAINER Dimas Restu Hidayanto <dimas@playcourt.id>

# Set Working Directory Under Repository Directory
ARG ARGS_NODE_BUILD
ENV BABEL_DISABLE_CACHE=1
WORKDIR /usr/src/app

# Update Some Package
RUN apk add --update --no-cache --virtual .build-dev build-base python python-dev

# Copy all file inside repository to Working Directory
COPY . .

# install required package 
#   If your apps having bycypt please add this command before "&& apl del .build-dev"
#   > && npm rebuild bcrypt --build-from-source
RUN npm i -g npm \
    && npm i -g node-gyp \
    && npm i --legacy-peer-deps \
    && apk del .build-dev \
    && npm run build:${ARGS_NODE_BUILD}

# Expose Application Port

EXPOSE 4000

# Run Application
CMD ["npm", "start"]


