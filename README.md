# 1. Introduction

Channels is a real-time chat application that supports private channels (duh!). It was built during the internet shutdown in Bangladesh with the intention of running it on the national intranet. The features and looks of the app is inspired by the old school IRC chats and it's end-to-end encrypted as well (which means even the server can't see what messages you send).

Due to the unique circumstance in which it was built, it rejects all modern tooling and embraces the absolute simplest code (almost as if we went back to 1995). In fact without internet access, [this python script](https://github.com/imtixz/offline-npm-install) was used to install some of the node modules. As a side effect, it has no bloat and is extremely fast. It does not support end-to-end encyrption yet but it'll soon be added.

Note: Just to clarify. It is a web app. It has no android/ios app and will never have one.

# 2. How to run the server

Clone the repository

```
git clone git@github.com:imtixz/channels.git
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

Then go to your web browser and type localhost:8383 and you should see the homescreen of channels.

# 3. How to use it in the intranet

By default when you run the code it will run in localhost. If you want to access it on the intranet you need to first ensure that you have a public IP address (most ISP packages worth 1500 BDT or more come with one). Then you have to do port forwarding. The steps are:

1. Find the private IP of the laptop/pc that's running the app. It will most likely be in the wifi settings in your laptop/pc. If you can't find it there, another place where you may find it is the router's admin panel. It should have a list of devices connected to the router, their hostname and their private IP address.

2. Find the port forwarding option on your router (some routers call it virtual server, idk why). It should ask for the port numbers and IP address. Put your device's private IP address there and put both ports as 8383. Leave everything else as default.

3. Then look for your public IP address in the admin panel. Copy and paste that into the browser and add 8383 port number just like last time. So the url would be your-real-ip:8383. You should then see the homescreen of channels

# 3. Roadmap

These are some features I plan to bring into the app soon:

1. File sharing
2. Audio Calls
