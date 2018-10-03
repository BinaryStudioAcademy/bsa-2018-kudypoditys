# Pull base image from stock node image.
FROM node:10.8.0

# Make app directory
RUN mkdir /kudypoditys

# Add the current working folder to the /opt/src dir
ADD . /kudypoditys

# Set the current working directory to the new mapped folder.
WORKDIR /kudypoditys

# Install package.json
RUN npm install

# Create public folder
RUN npm run build
# Expose the node.js port to the Docker host.
EXPOSE 5000

# Start the app
CMD [ "node", "server.js" ]