#!/bin/sh
ssh ubuntu@13.127.62.187 <<EOF
    cd ~/jenkins-mock-repo
    echo "printing files"
    ls
    git pull origin main
    curl -o-   https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh    | bash
    . ~/.nvm/nvm.sh
    nvm install v15.11.0
    npm install
    npm install -g nodemon pm2
    echo "printing files"
    ls
    pm2 restart ecosystem.config.js
    exit
EOF