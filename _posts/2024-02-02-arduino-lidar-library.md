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

Why support many LiDAR/LDS sensors? The reason is to make the hardware - supported by Kaia.ai platform - affordable to as many prospective users as possible. Some of the sensors listed below are sold as used robot vacuum cleaner spare parts and cost as low as $16 or so (including shipping) available on AliExpress.

Here is a list of supported and to-be-supported LiDARs/LDS sensors:
- YDLIDAR X4 (supported)
- YDLIDAR X2/X2L (supported)
- YDLIDAR X3/X3PRO (supported)
- Xiaomi Mi 1st gen LDS02RR (supported)
- Neato XV11 (supported)
- RPLIDAR A1 (in progress)
- 3irobotics Delta-2G, Delta-2A, others (TODO)
- Xiaomi LDS01RR (TODO)
- Hitachi-LG HLS-LFCD2 (TODO)
- LDROBOT LD14P, LD20, others (TODO)

Here are examples of using the Arduino LDS library:
- a starter [sample Arduino sketch](https://github.com/kaiaai/LDS/tree/main/examples/lds_basic_esp32) that comes with the LDS library
- Maker's Pet [DIY pet robot](https://github.com/makerspet/makerspet_loki)
  - find the pet robot Arduino firmware [here](https://github.com/kaiaai/firmware)

This is what the Arduino LiDAR/LDS library does:
- wraps various LiDAR/LDS sensors into a single platform API
- adds PWM PID control to LiDARs/LDS that lack built-in motor control
- adds API for easy integration with sensor telemetry middleware including micro-ROS, Websockets, etc.
  - a callback to forward sensor data packet stream
- optional real-time angle and distance computation on the Arduino MCU
  - e.g. for low-latency object avoidance


Video: Neato XV11 working with ROS2 using micro-ROS, Arduino LDS library
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kfk1Q0RSJpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Video: Xiaomi Mi 1st gen LDS02RR working with ROS2 using micro-ROS, Arduino LDS library
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/STbCVhdgLSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Video: RPLIDAR A1 working with ROS2 using micro-ROS, Arduino LDS library
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/f8IYjfiXsMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Adapter Board
Some of the LiDAR/LDS sensors listed above do not have built-in motor control. These sensors (LDS02RR, Neato XV11, Delta-2G, Delta-2A, etc.) therefore require an adapter PCB that implements motor control. Here are adapter PCBs:
- [adapter PCB](https://github.com/makerspet/pcb/tree/main/lds02rr_adapter) for LDS02RR
- [adapter PCB](https://github.com/makerspet/pcb/tree/main/neato_delta_adapter) for Neato XV1, Delta-2A, Delta-2G

Video: Adapter PCB for Xiaomi LDS02RR
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Wes9GYomUdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
