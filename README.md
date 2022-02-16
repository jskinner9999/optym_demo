# optym_demo

create react environment
    npx create-react-app react-sample-chat
add pubnub framework

    cd react-sample-chat
    npm install --save pubnub pubnub-react

modify App.js
    enter in sub and pub keys into these fields

    const pubnub = new PubNub({
      publishKey: 'PUB-KEY-HERE',
      subscribeKey: 'SUB-KEY-HERE',
      uuid: 'PNREACT'
    });

uncompress node app
    gzip -d node.tar.gz

untar node app
    tar xvf node.tar

cd node

create pubnub framework
    npm install pubnub

start both the client and server side 

server 
    cd 