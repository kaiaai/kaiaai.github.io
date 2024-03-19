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

Here is a list of supported and to-be-supported (*) low-cost LiDAR/LDS sensors. "Tria" indicates triangulation LDS, as opposed to "ToF" time-of-flight LiDARs. You can purchase these sensors off AliExpress, Amazon, eBay and online stores that cater to robotics enthusiasts. The retail prices are approximate, as of 02/2024. The safety class indicates what the model's official datasheet says available. Some LiDAR/LDS models do not have official datasheets available publically.

| Model                | Type | Scans   | Points  | Range   | Cost     | Service | Safety  | Ambient | Spec |
|                      |      | per sec | per sec | meters  | retail   | life    |         | Lux     |      |
|:---------------------|:-----|---------|:--------|:--------|:---------|:--------|:--------|:--------|:-----|
| YDLIDAR X4           | Tria |  6-12Hz | 5KHz    | 0.12-10 | ~$70-90  |         | Class 1 |         | [PDF](https://www.ydlidar.com/Public/upload/files/2024-02-01/YDLIDAR%20X4%20Data%20sheet%20V1.2(240125).pdf) |
| YDLIDAR X4 PRO       | Tria |  6-12Hz | 5KHz    | 0.12-10 | ~$75-100 | 1,500h  | Class 1 |         | [PDF](https://www.ydlidar.com/Public/upload/files/2024-02-01/YDLIDAR%20X4PRO%20Datasheet%20V1.1%20(240124).pdf) |
| YDLIDAR X2/X2L       | Tria |  5..8Hz | 3KHz    | 0.12-10 | ~$75-100 | 1,500h  | Class 1 |         | [PDF](https://www.ydlidar.com/Public/upload/files/2024-02-01/YDLIDAR%20X2%20Data%20Sheet%20V1.2(240124).pdf) |
| YDLIDAR X3           | Tria |  5-10Hz | 3KHz    | 0.12-8  | ~$65     |         |         | 2K?     |      |
| YDLIDAR X3 PRO       | Tria |  6-12Hz | 4KHz    | 0.12-8  | ~$70     | 1,500h  |         | 40K?    | [Link](https://static.generation-robots.com/media/YDLIDARX4PRODatasheet.pdf) |
| XIAOMI LDS02RR       | Tria |   5Hz   | 1.8KHz  | 0.15-6? | ~$16     |         |         |         |      |
| XIAOMI LDS01RR*      | ToF  |   5Hz   |         | 0.15-9  | ~$37     | 1,095h  | Class 1 |         |      |
| Neato XV11           | Tria |   5Hz   | ~2KHz   | 0.15-6? | ~$35     |         |         |         |      |
| SLAMTEC RPLIDAR A1M8-R4 | Tria |  1-10Hz | 8KHz | 0.15-6  |          |         | Class 1 |         | [PDF](https://www.slamtec.ai/wp-content/uploads/2023/11/LD108_SLAMTEC_rplidar_datasheet_A1M8_v3.0_en.pdf) |
| SLAMTEC RPLIDAR A1M8-R5 | Tria |  1-10Hz | 8KHz | 0.15-12 | ~$99     |         | Class 1 |         | [PDF](https://www.slamtec.ai/wp-content/uploads/2023/11/LD108_SLAMTEC_rplidar_datasheet_A1M8_v3.0_en.pdf) |
| 3irobotics Delta-2A  | Tria | ~5.25Hz?| ~1.9KHz?| 0.15-5? | ~$28     |         |         | 1K?     |      |
| 3irobotics Delta-2G  | Tria | ~5.25Hz?| ~1.9KHz?| 0.15-5? | ~$17     |         |         |         |      |
| Hitachi-LG HLS-LFCD2*| ToF  |   5Hz   | 1.8KHz  | 0.12-3.5| ~$28     |         | Class 1 | 10K?    | [Link](https://emanual.robotis.com/docs/en/platform/turtlebot3/appendix_lds_01/) |
| Hitachi-LG HLS-LFCD3*| Tria |   5Hz   | 2.3KHz  | 0.16-8  | ~$17     | 1,000h  | Class 1 | 25K?    | [Link](https://emanual.robotis.com/docs/en/platform/turtlebot3/appendix_lds_02/) |
| LDROBOT LD14P        | Tria | 2..8Hz  | 4KHz    | 0.1-8   | ~$35     | 2,200h  |         | 80K?    | [Spec, Protocol](https://www.waveshare.com/wiki/D200_LiDAR_Kit) |
| LDROBOT LD20*        |      |         |         |         |          |         |         |         |      |
| RPLIDAR C1*          |      |         |         |         |          |         |         |         |      |

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
