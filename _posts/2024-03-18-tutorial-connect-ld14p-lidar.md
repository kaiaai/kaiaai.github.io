---
layout: post
title:  "Tutorial: Connect LDLIDAR LD14P LiDAR/LDS to Arduino ESP32"
author: iliao
categories: [ Arduino, library, LiDAR, LDS, ROS2, micro-ROS, ESP32 ]
# tags: [red, yellow]
image: assets/images/webp/lidar_sensors.webp
# description: "Tutorial: bot hides, plays ball in manual simulation"
# featured: true
# hidden: true
# comments: false
# rating: 4.5
---
LDROBOT LD14P is a low-cost laser distance sensor. We have not yet evaluated its performance, but eyeballing this sensor's output under indoor conditions makes us believe this sensor may have a reasonable performance.

## LDS Specifications
According to [LDROBOT LD14P specifications](https://www.waveshare.com/wiki/D200_LiDAR_Kit):
- uses triangulation for distance sensing
- performs 2 to 8 (default 6) 360-degree scans per second
- captures 4K distance points per second
- measured distance from 0.1 to 8 meters
- has a 2,200 hours of listed of service life
- claims 80,000 Lux as ambient light resistance
  - we have not checked this independently
- uses a Class 1 793mm laser
- consumes around 1.5W and weights 101g

Overall, these specifications appear to be quite competitive for an LDS that is available for purchase on AliExpress for as low as $35, with free shipping to USA. To give you a point of reference, some other low-cost LDS, priced similarly to LD14P, capture only 1.8K distance points per seconds and may require an additional adapter board in order to be connected to ESP32.

Please note that online sellers also offer LD14P as part of the D200 evaluation kit. That kit includes a USB-to-LD14P serial board adapter, so you can connect LD14P to your Linux or Windows PC (including ROS2) using USB.

## Connect LD14P to ESP32
Follow these steps to connect LD14P to ESP32:
- refering to [LD14P connector pinout](https://www.waveshare.com/wiki/D200_LiDAR_Kit), connect
  - LD14P VCC to 5V
  - LD14P GND to GND
  - LD14P TX to ESP32 GPIO16
  - LD14P PWR/RX to ESP32 GPIO15

## Set up LD14P with Arduino
- install the latest [Arduino LDS library](https://github.com/kaiaai/LDS)
- in Arduino IDE click File -> Examples, scroll to the bottom of the menu and click LDS -> [lds_basic_esp32](https://github.com/kaiaai/LDS/tree/main/examples/lds_basic_esp32)
  - click File -> Save and save a copy of this sketch into your sketchbootk
  - replace 'LDS_YDLIDAR_X4' with LDS_LDLIDAR_LD14P throughout the sketch
- configure Arduino to use ESP32 board that you intend to use
- build the modified sketch
  - connect your ESP32 module to your PC using a USB cable
  - upload the compiled sketch to your ESP32
- make sure your 5V power supply provides enough current for LD14P
- in Arduino IDE click Tools -> Serial Monitor to open the Arduino IDE
  - inspect the sketch output

Video: LDROBOT LD14P connected to Arduino ESP32 and ROS2
<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ebbHqs4lW0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Connecting LD14P to ROS2

Please follow instructions in [this README](https://github.com/kaiaai/kaiaai) to connect Arduino ESP32 with LDLIDAR LD14P to a ROS2 PC over WiFi using micro-ROS.