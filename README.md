# kudypoditys-frontend

Make sure you have `nodejs 10.7.x` and `npm 6.2.x`. 

Install the following packages globally (prepend `sudo` if using Unix system):
```bash
npm i -g yarn
npm i -g nodemon
npm i -g @storybook/cli
```

Clone repository:
```bash	
git clone https://github.com/BinaryStudioAcademy/bsa-2018-kudypoditys.git
cd bsa-2018-kudypoditys
```

Install dependencies:
```bash
yarn install
```

To run the client in a dev mode (file changes will be watched) execute the following command:
```bash
yarn start-client
```
It will start the client at http://localhost:3000/ (pointing to the local api server)

To run the api server locally, execute this command:
```bash
yarn start-api
```
The server will listen to http://localhost:5000/

To build and deploy the whole application locally do this:
```bash
yarn start
```
Files change will not trigger application restart.

To run your storybook, type:
```bash
yarn storybook
```