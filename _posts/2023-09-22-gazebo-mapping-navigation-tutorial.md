---
layout: post
title:  "Tutorial: Create a room map, navigate in ROS2 Gazebo"
author: iliao
categories: [ Tutorials, Simulation, ROS2, Gazebo, Snoopy, Mapping, Navigation ]
# tags: [red, yellow]
image: assets/images/webp/snoopy-mapping-gazebo.webp
# description: "Tutorial: bot hides, plays ball in manual simulation"
# featured: true
# hidden: true
# comments: false
# rating: 4.5
---
Here is a step-by-step tutorial creating a map of the room and navigating around the room using the newly-created map.
The simulation runs in ROS2 Gazebo. I'm using here a Windows PC running ROS2 in a Docker container.
You can use a Linux PC running Docker as well.

If you are using a Windows PC, make sure to
set up your Windows PC folliwing these instructions [here](https://kaia.ai/blog/local-pc-setup-windows/).

If you are using a Linux PC, please install [Docker](https://docs.docker.com/engine/install/ubuntu/) for your Linux distro.

The (simple) self-driving code is
[here](https://github.com/kaiaai/kaiaai_simulations/blob/main/kaiaai_gazebo/src/self_drive_gazebo.cpp).

Here are the steps in the tutorial:
- Launch Docker for Windows on your local Windows PC
- Launch VcXsrv on your local Windows PC
- Pull the Kaia.ai developer Docker image to your local PC
- Launch the Kaia.ai developer Docker image on your local PC
- Launch the Kaia.ai Living Room world and Snoopy robot in Gazebo ROS2 simulator
- Launch Google Cartographer to start creating a map of the room. The Cartographer launch script also launches Rviz2 ROS2 viewer to view the map, Snoopy's camera feed, and laser scan data
- Have Snoopy self-drive around the room, creating the map, by launching the self-drive script
- Save the newly-created map
- Shut down Google Cartographer and Rviz2
- Launch ROS2 Navigation (with a new Rviz2 window) and load the newly-created map
- Manually specify Snoopy's location on the map in Rviz2
- Manually specify the location where you want Snoopy to navigate
- Snoopy navigates automatically to the new location

## Step-by-step mapping and navigation tutorial
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/YBYoKGgWWO8?si=_4f7BhbWYE3C0IfH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>