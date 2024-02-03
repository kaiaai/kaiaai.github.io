---
layout: post
title:  "Arduino LiDAR library available"
author: iliao
categories: [ Arduino, library, LiDAR, LDS, platform, ROS2, micro-ROS ]
# tags: [red, yellow]
image: assets/images/webp/lidar_sensors.webp
# description: "Tutorial: bot hides, plays ball in manual simulation"
# featured: true
# hidden: true
# comments: false
# rating: 4.5
---
Developer Update - I have combined support for various spinning LiDAR/LDS sensors into an [Arduino LDS library](https://github.com/kaiaai/LDS) with a single platform API. You can install this library from the Arduino Library Manager GUI.

Why support many LiDAR/LDS sensors? The reason is to make the hardware - supported by Kaia.ai platform - affordable to as many prospective users as possible.

Here is a list of supported and to-be-supported LiDARs/LDS sensors:
- YDLIDAR X4 (supported)
- YDLIDAR X2/X2L (supported)
- YDLIDAR X3/X3PRO (supported)
- Xiaomi Mi 1st gen LDS02RR (supported)
- Neato XV11 (supported)
- RPLIDAR A1 (in progress)
- 3irobotics Delta2G (TODO)
- Xiaomi LDS01RR (TODO)
- Hitachi-LG HLS-LFCD2 (TODO)
- LDLIDAR sensors (TODO)

This is what the Arduino LiDAR/LDS library does:
- wraps various LiDAR/LDS sensors into a single platform API
- adds PWM PID control to LiDARs/LDS that lack built-in motor control
- adds API for easy integration with sensor telemetry middleware including micro-ROS, Websockets, etc.
  - a callback to forward sensor data packet stream
- optional real-time angle and distance computation on the Arduino MCU
  - e.g. for low-latency object avoidance

## Video: Neato XV11 working with ROS2 using micro-ROS
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kfk1Q0RSJpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Video: Xiaomi Mi 1st gen LDS02RR working with ROS2 using micro-ROS
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/STbCVhdgLSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>