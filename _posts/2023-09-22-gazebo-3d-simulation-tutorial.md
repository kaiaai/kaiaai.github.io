---
layout: post
title:  "Tutorial: Simulate Home Robot in 3D (ROS2 Gazebo)"
author: iliao
categories: [ Tutorial, Simulation, ROS2, Gazebo, Snoopy ]
# tags: [red, yellow]
image: assets/images/webp/snoopy_sim_ball.webp
# description: "Tutorial: bot hides, plays ball in manual simulation"
# featured: true
# hidden: true
# comments: false
# rating: 4.5
---
Here is a step-by-step tutorial simulating Snoopy home robot in 3D VR using the Gazebo ROS2 simulator. 
I'm using here a Windows PC running ROS2 in a Docker container. You can use a Linux PC running Docker as well.

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
- Launch Rviz2 ROS2 viewer to view Snoopy's camera feed and laser scan data
- Launch teleop and drive Snoopy manually
- Drive Snoopy around the living room
- Make Snoopy hide under the table
- Make Snoopy play with the red ball
- Stop teleop and launch self-driving
- Snoopy drives around the living room automatically

## Tutorial: Step-by-step Snoopy 3D VR Gazebo simulation
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/lock_Erbg_E?si=hHRQBSiTV3rw61v_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
