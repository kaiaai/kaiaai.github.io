---
layout: post
title:  "Tutorial: build Micro-ROS Arduino library"
author: iliao
categories: [ Tutorials, Micro-ROS, Arduino ]
# tags: [red, yellow]
image: assets/images/webp/micro-ros-arduino-logos.webp
# description: "Tutorial: bot hides, plays ball in manual simulation"
# featured: true
# hidden: true
# comments: false
# rating: 4.5
---
Kaia.ai makes use of [Micro-ROS for Arduino](https://github.com/micro-ROS/micro_ros_arduino).
This article provides step-by-step instructions on how to (re)build the Micro-ROS
Arduino library.

I don't normally expect anyone to be rebuilding this library, so these instructions are,
essentially, a documentation for myself.

In some cases, tayloring Kaia.ai software for your particular robot
 may require tweaking your robot's Kaia.ai-compatible firmware.
 For example a firmware tweak may be necessary when adding new robot sensors.

The Micro-ROS library communicates sensor data from the Arduino micro-controller (ESP32 in our case)
to the PC running ROS2, where the sensor data gets processed.

If the newly-added sensor outputs the type of data that the Micro-ROS library does not support already,
the Micro-ROS library has to be extended accordingly. That includes tweaking the Micro-ROS code - e.g.
adding a special message type for the new sensor's data - followed by rebuilding the library.
 
As the first step in the process, follow these steps to
[extend](https://micro.ros.org/docs/tutorials/advanced/create_new_type/) Micro-ROS - for example by
creating a new sensor message type.

Next, set up your PC for building the Micro-ROS Arduino library.

- Install Docker for your PC platform and make sure the Docker agent is running,
see these [instructions](https://kaia.ai/blog/local-pc-setup-windows/)
- Install the Micro-ROS Arduino library for Kaia.ai using these
[instructions](https://github.com/kaiaai/micro_ros_arduino_kaiaai/)

 Let's assume you are using Arduino IDE for Windows and your Arduino libraries are stored under `C:\Users\YOUR-USER-NAME\Documents\Arduino\libraries`.

- Open a Windows command shell and run these commands to rebuild the library using the
[Micro-ROS library builder](https://github.com/micro-ROS/micro_ros_arduino):
```
cd %HOMEPATH%\Documents\Arduino\libraries
git clone -b iron --depth 1 https://github.com/kaiaai/micro_ros_arduino_kaiaai micro_ros_kaiaai
docker run -it --rm -v .\micro_ros_kaiaai:/project --env MICROROS_LIBRARY_FOLDER=extras microros/micro_ros_static_library_builder:iron
```

Please note, you can also rebuild the library for a particular platform only, e.g. for ESP32. By default,
Micro-ROS Arduino library builds for `stm32`, `OpenCR`, `Teensyduino`, `samd`, `sam`, `mbed`,
`esp32` and `mbed_portenta` architectures.
```
docker run -it --rm -v .\micro_ros_kaiaai:/project --env MICROROS_LIBRARY_FOLDER=extras microros/micro_ros_static_library_builder:iron -p esp32
```

Also, if needed, change `iron` in the instructions above to another ROS2 distro name, e.g. `humble`.

