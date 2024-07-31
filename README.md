# 1. Introduction

Channels is a real-time chat application that supports different channels (duh!). It was built during the internet shutdown in Bangladesh with the intention of running it on the national intranet. The features and looks of the app is inspired by the old school IRC chats. Due to the unique circumstance in which it was built, it rejects all modern tooling and embraces the absolute simplest code (almost as if we went back to 1995). In fact without internet access, [this python script](https://github.com/imtixz/offline-npm-install) was used to install some of the npm modules. As a side effect, it has no bloat and is extremely fast. It does not support end-to-end encyrption yet but it'll will soon be added.

# 2. How to run

There are 2 ways to run the app. Using npm commands and using docker. I like to run things using docker when running them on production. But either should be fine. So, if you're not comfortable with docker, feel free to run the app using just npm.

### 2.1.1 Running with Docker

Pre-requisite: You need to have docker installed for this to work. If you don't have it installed, follow [their official docs](https://docs.docker.com/get-docker/) to download and install it.

Clone the repository

```
git clone <put ssh url here>
```

Enter the directory

```
cd channels
```

Run using docker compose (in daemon mode so it runs in the background)

```bash
docker compose up -d
```

### 2.1.2 Running with npm

Clone the repository

```
git clone <put ssh url here>
```

Enter the directory

```
cd channels
```

Install the node modules

```
npm install
```

Run the app using npm

```
npm start
```

### 2.2 Accessing it

Go to your web browser and type localhost:8006 and you should see the homescreen

# 3. How to use in LAN or Intranet

By default when you run the code it will run in localhost. But without any modification it will not run in the local network or the intranet. In order to make it work do the following:

### 3.1.1 Running in Local Network

Find the private IP address of the device that's running this app. It will most likely be in the wifi settings. If you can't find it there, another place where you may find it is the router's admin panel. It might have a list of devices connected to the router, their hostname and their private addresses. Copy the private address and then you need to replace some lines in the code.

### 3.1.2 Running in the Intranet

To do this, first you need to make sure you have real IP (an easy way to test this is to compare the WAN IP address from your router's admin panel and your IP address after googling "what is my IP", if it's real IP they should be the same). Then copy your real IP address and then you need to replace some lines in the code.

### 3.2 Modifying the codebase

Replace localhost with the IP address you copied in the following locations:

1. line 36 in client/index.html
2. line 93 in client/chat.html
3. line 47 in client/index.html

And then start/restart the app

### 3.3 Accessing it

Go to the web address and replace the localhost from the previous URL with the IP address you pasted. This should work in any deivce from the local network / the intranet (depending on which IP address you used)

# 4. Roadmap

These are some features I plan to bring into the app soon:

1. End to End encryption
2. File sharing
3. Audio Calls
