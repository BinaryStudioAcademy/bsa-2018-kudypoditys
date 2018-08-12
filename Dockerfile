# Pull base image from stock node image.
FROM node:10.8.0

# Maintainer
MAINTAINER Rusinka Bohdan <bohdan.rusinka@binary-studio.com>

# Need global gulp
RUN npm install gulp -g

# Make app directory
RUN mkdir /opt/kudypoditys

# Add the current working folder to the /opt/src dir
ADD . /opt/kudypoditys

# Set the current working directory to the new mapped folder.
WORKDIR /opt/kudypoditys

# Install package.json
RUN npm install

# Expose the node.js port to the Docker host.
EXPOSE 5000

# Start the app
CMD [ "node", "server.js" ]