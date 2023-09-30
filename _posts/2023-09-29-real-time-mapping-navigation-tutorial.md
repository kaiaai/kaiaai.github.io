---
layout: post
title:  "Tutorial: Map your room in real time in ROS2"
author: iliao
categories: [ Tutorials, Simulation, ROS2, real-time, Snoopy, Mapping, Navigation ]
# tags: [red, yellow]
image: assets/images/webp/snoopy-mapping-screenshot.webp
# description: "Tutorial: bot hides, plays ball in manual simulation"
# featured: true
# hidden: true
# comments: false
# rating: 4.5
---
Here is a step-by-step tutorial creating a map of the room and navigating around the room using the newly-created map in real time.
I'm using here a Windows PC running ROS2 in a Docker container. You can use a Linux PC running Docker as well.

If you are using a Windows PC, make sure to
set up your Windows PC folliwing these instructions [here](https://kaia.ai/blog/local-pc-setup-windows/).

If you are using a Linux PC, please install [Docker](https://docs.docker.com/engine/install/ubuntu/) for your Linux distro.

The (simple) self-driving code is
[here](https://github.com/kaiaai/kaiaai_simulations/blob/main/kaiaai_gazebo/src/self_drive_gazebo.cpp).

## Step-by-step real-time mapping tutorial
<div class="text-center">


</div>

Here are the steps.

- Launch Docker for Windows on your local Windows PC.
- Launch VcXsrv on your local Windows PC.
- Pull the Kaia.ai developer Docker image to your local PC.
```
docker pull kaiaai/kaiaai-ros-dev:humble
```

- Launch the Kaia.ai developer Docker image on your local PC.
```
docker run --name kaiaai-ros-dev-humble -it --rm -p 8888:8888/udp -e DISPLAY=host.docker.internal:0.0 -e LIBGL_ALWAYS_INDIRECT=0 kaiaai/kaiaai-ros-dev:humble
```

- Launch the telemetry.
```
ros2 launch kaiaai_bringup main.launch.py
```

- Open a new shell window and start a new `bash` session in the Docker container.
```
docker exec -it kaiaai-ros-dev-humble bash
```

- In the newly opened window, launch Google Cartographer to start creating a map of the room.
The Cartographer launch script also opens the Rviz2 ROS2 viewer to view the map.
```
ros2 launch kaiaai_bringup cartographer.launch.py
```

- At this point you should be seeing Snoopy's laser scan data
- Open yet another new shell window and start yet another new `bash` session in the Docker container.
```
docker exec -it kaiaai-ros-dev-humble bash
```

- Launch the keyboard teleoperation script in the newly created bash session.
```
ros2 run kaiaai_teleop teleop_keyboard
```

- Drive Snoopy around the room, creating the map as it goes.
- Press `CTRL-C` to stop Snoopy's keyboard teleoperation script.
- Save the newly-created map.
```
ros2 run nav2_map_server map_saver_cli -f $HOME/my_map
```

- Press `CTRL-C` to stop Google Cartographer in the Cartographer's shell window.
- Press `CTRL-C` stop Rviz2 in Rviz2 shell window.
