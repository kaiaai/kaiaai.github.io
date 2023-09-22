---
layout: post
title:  "Tutoial: Windows PC setup"
author: iliao
categories: [ Announcements ]
# tags: [red, yellow]
image: assets/images/webp/pc-setup.webp
# description: "Please pardon the dust - we are setting thingsup!"
featured: true
hidden: true
# comments: false
# rating: 4.5
---
Here are instructions on setting up your local Windos PC.

## Prerequisites and Hardware Minimums
- Your Windows PC must be running Windows 10 or newer (to support WSL2).
- Your Windows PC must have 4Gb RAM minimum (to run Docker), 8Gb or more recommended.
- A fast local WiFi network is a must
- Your PC will be running the bulk of the robot's computation, including mapping,
localization, navigation, image recognition and - at a later time - AI.
Therefore, the faster your PC, the more RAM and the faster your GPU - the more
responsive and smart your home robot will be. No, you don't need a beefed-up PC right away,
but please plan accordingly.

## Windows PC setup instructions

1. Install [Windows WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install)
2. Install[Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
3. Install [VcXsrv](https://sourceforge.net/projects/vcxsrv/).
VcxSrv displays GUI from the Docker Linux container, so you can - if you wish - develop hands-on
using ROS2 Rviz2 robot viewer, Gazebo 3D robot simulator, rqt robot internals viewer and so on.
  - Once you have installed VcXsrv, launch `c:\Program Files\VcXsrv\xlaunch.exe` and set its
  *display number* to *zero* when prompted.
4. Last but not the least, download the Kaia.ai developer's Docker image:
  - Open a Window PowerShell or command window.
  - Type `docker pull kaiaai/kaiaai-ros-dev:humble`.

Once your `docker pull` succeeds, you are good to go (fingers crossed)!``

<small>Credits: image by storyset on Freepik</small>