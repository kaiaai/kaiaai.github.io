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

Here is a list of supported and to-be-supported (*) low-cost LiDAR/LDS sensors. "Tria" indicates triangulation LDS, as opposed to "ToF" time-of-flight LiDARs. You can purchase these sensors off AliExpress, Amazon, eBay and online stores that cater to robotics enthusiasts. The retail prices are approximate, as of 02/2024. The safety class indicates what the model's official datasheet says available.

Please find the latest [2D LiDAR table here](https://github.com/kaiaai/awesome-2d-lidars/).

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

## ROS2 Companion Package

Kaia.ai [robot firmware](https://github.com/kaiaai/firmware) forwards LDS raw data - obtained from the Arduino LDS library - to a PC running ROS2 and micro-ROS. The ROS2 PC [kaiaai_telemetry package](https://github.com/kaiaai/kaiaai/tree/humble/kaiaai_telemetry) receives the raw LDS data, decodes that data and publishes it to the ROS2 `/scan` topic. If you are a ROS2 developer or enthusiast, please feel free to take a loot - and reuse - the [kaiaai_telemetry package](https://github.com/kaiaai/kaiaai/tree/humble/kaiaai_telemetry) ROS2 package.

## Adapter Board
Some of the LiDAR/LDS sensors listed above do not have built-in motor control. These sensors (LDS02RR, Neato XV11, Delta-2G, Delta-2A, etc.) therefore require an adapter PCB that implements motor control. Here are adapter PCBs:
- [adapter PCB](https://github.com/makerspet/pcb/tree/main/lds02rr_adapter) for LDS02RR
- [adapter PCB](https://github.com/makerspet/pcb/tree/main/neato_delta_adapter) for Neato XV1, Delta-2A, Delta-2G

Video: Adapter PCB for Xiaomi LDS02RR
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Wes9GYomUdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
