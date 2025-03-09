---
layout: post
title: Kaia.ai Firmware, ROS2 Configuration Files
author: iliao
categories: [ Support ]
image: assets/images/webp/four_makerspet_esp32_boards.webp
# featured: true
# hidden: true
# comments: true
# tags: [red, yellow]
# rating: .5
# comments: false
---

Kaia.ai firmware works with a wide variety of ESP32 boards, supports robots of different sizes, with various Lidars, motors, motor drivers and motor encoders - all thanks to a
[configuration file](https://github.com/kaiaai/firmware/blob/iron/kaiaai-esp32/data/config.yaml)
where you can specify your GPIO assignments. Configuring Kaia.ai for your particular robot, board and its peripherals can be as easy as editing a text file called `config.yaml`. Kaia.ai firmware loads and parses this `config.yaml` file at boot time.

In this post I will present a `config.yaml` example along with detailed explanations.
You can find more sample `config.yaml` files for various ESP32 models and Maker's Pet boards and robots [here](https://github.com/kaiaai/firmware/tree/iron/kaiaai-esp32/data).

Follow instructions in the video below to upload your off-the-shelf or custom `config.yaml` to ESP32 in Arduino.

<div class="text-center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IOQBNl0O_tI"
        title="Arduino/ROS2 Lidar robot - software setup" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
        picture-in-picture; web-share" allowfullscreen>
    </iframe>
</div>
<p></p>

Be sure to keep the indents formatting to make sure the firmware parses `config.yaml` successfully.
Check the Arduino Serial Monitor at boot time for any parsing errors.
```
#
# Board-specific assignments
#
board:
  manufacturer: makerspet.com
  model: MINI-BDC30P-BODY with BDC-30P
  version: v1.1.1
lidar:
  gpio:
    tx: 35
    rx: 27
    pwm: 13
    en: 32
led:
  system:
    driver:
      type: direct
      gpio: 2
      invert: false
button:
  boot:
    gpio: 0
    invert: true
monitor:
  gpio:
    tx: 1
motor:
  driver:
    type: IN1_IN2
  encoder:
    type: AB_QUAD
  left:
    encoder:
      gpio:
        a: 39
        b: 36
    driver:
      gpio:
        in1: 26
        in2: 25
  right:
    encoder:
      gpio:
        a: 17
        b: 16
    driver:
      gpio:
        in1: 23
        in2: 22
adc:
  battery:
    attenuation: 7.0
    gpio: 33
    voltage:
      full: 9.9
      empty: 7.2

#
# Peripherals configuration
#
lidar:
  model: LDROBOT LD14P
# model: NEATO XV11
# model: SLAMTEC RPLIDAR A1
# model: XIAOMI LDS02RR
# model: YDLIDAR SCL
# model: YDLIDAR X2
# model: YDLIDAR X2L
# model: YDLIDAR X3
# model: YDLIDAR X3 PRO
# model: 3IROBOTIX DELTA-2G
# model: 3IROBOTIX DELTA-2A 115200
# model: 3IROBOTIX DELTA-2A
# model: 3IROBOTIX DELTA-2B
# model: YDLIDAR X4 PRO
# model: YDLIDAR X4
  scan:
    freq:
      target: 5.0
monitor:
  baud: 115200
base:
  wheel:
    track: 0.105043
    diameter: 0.043
    accel:
      max: 2.0
motor:
  rpm:
# derated
    max: 180
  driver:
    pid:
      period: 0.03
      kp: 0.001
      ki: 0.003
      kd: 0
      kpm: 0
  encoder:
    ppr: 1035
```

## Detailed Explanations

Let's start with the `board` top-level tag.

Here you can specify your board or DIY hardware name and version. Kaia.ai just prints out this information to Arduino Serial Monitor for identification purposes. The `#` hash character comments at the beginning of a text line acts as a comment.
```
#
# Board-specific assignments
#
board:
  manufacturer: makerspet.com
  model: MINI-BDC30P-BODY with BDC-30P
  version: v1.1.1
```

The `lidar` top-level tag contains ESP32 GPIO assignments for the Lidar port. You can ignore this section if you don't use a Lidar. If your Lidar does not have some of the pins listed below, you can leave those assignments unchanged (they will be ignored) or commend those lines out.
```
lidar:
  gpio:
    tx: 35
    rx: 27
    pwm: 13
    en: 32
```

The `led` top-level tag contains the system LED GPIO configure. The configuration example below is specifically for 30-pin ESP32 DOIT DevKit v1 modules that have an integrated LED connected to GPIO2. Other ESP32 modules may have a different GPIO LED assignment, a different type of LED (serial instead of driven directly by the GPIO) or may not have an integrated LED at all. You can find and reuse examples for various ESP32, ESP32S3, ESP32E, Arduino ESP32S3 Nano boards here https://github.com/kaiaai/firmware/tree/iron/kaiaai-esp32/data.
```
led:
  system:
    driver:
      type: direct
      gpio: 2
      invert: false
```

The `button` configuration assigns a GPIO to the `BOOT` button for the 30-pin ESP32. The choice of this GPIO may vary across ESP32 modules and boards. See https://github.com/kaiaai/firmware/tree/iron/kaiaai-esp32/data for examples.
```
button:
  boot:
    gpio: 0
    invert: true
```

`monitor` assigns a GPIO to the Arduino Serial Monitor (30-pin ESP32 boards in this example).
```
monitor:
  gpio:
    tx: 1
```

`motor` specifies the motor driver and motor encoder types. Simply speaking, Kaia.ai firmware supports two motor types:
- brushed DC with motor (driver type `IN1_IN2`) with quadrature encoder (encoder type `AB_QUAD`). This type of motor (popular low-cost N20, JGA25, etc.) have `MOTOR+` and `MOTOR-` motor inputs, directly driven usually by L298N, TB6612FNG or similar driver ICs that have `IN1` and `IN2` inputs. The quadrature encoder `AB_QUAD` has two outputs `A` and `B` (sometimes named `C1`, `C2` or similar).
- brushless DC motor with built-in ESC controller. Motors like this (driver type `PWM_CW`, encoder type `FG`) have `PWM` (speed) and `CW` (rotation direction) inputs and `FG` encoder output.

```
motor:
  driver:
    type: IN1_IN2
  encoder:
    type: AB_QUAD
```

Here is where you assign GPIO input to track the left motor quadrature encoder. If your motor is brushless with `fg` output, specify the GPIO number associated with `FG`. For example, `fg: 39`.
```
  left:
    encoder:
      gpio:
        a: 39
        b: 36
```

Here is where you assign GPIO outputs to your brushed motor driver IC (L298N, TB6612FNG, etc.) or to your brushless motor with built-in driver (using `pwm: xx` and `cw: xx`).

If your motors don't seem to work during your robot bring-up - including not rotating, rotating in the wrong direction and rotation never stopping - check the driver and encoder GPIO assignments. In particular, check if driver `in1` and `in2` GPIO assignments need to be swapped. Same goes for encoder `a` and `b` GPIO assignments.
```
    driver:
      gpio:
        in1: 26
        in2: 25
```

Set your GPIOs for the right motor here.
```
  right:
    encoder:
      gpio:
        a: 17
        b: 16
    driver:
      gpio:
        in1: 23
        in2: 22
```

Optionally, in the `adc` section, assign a GPIO analog input to track the battery voltage. If your battery voltage higher than what ESP32 GPIO can handle, you can use a resistor divider to attenuate the battery voltage. For example, if you are using a 9V battery, you can make a resistor divider that divides the battery voltage 7x before feeding it to the ESP32 ADC GPIO input. The full and empty battery voltage settings help calculating the percentage of charge left in the battery.
```
adc:
  battery:
    attenuation: 7.0
    gpio: 33
    voltage:
      full: 9.9
      empty: 7.2
```

So far we have configured the board-related assignments. The rest of the file configures the robot-related parameters.

In the `lidar` section, choose your Lidar model from the list of supported sensors and set the desired scan speed (if supported by firmware and your Lidar). If you are not using a Lidar, just leave this section unchanged.
```
#
# Peripherals configuration
#
lidar:
  model: LDROBOT LD14P
# model: NEATO XV11
# model: SLAMTEC RPLIDAR A1
# model: XIAOMI LDS02RR
# model: YDLIDAR SCL
# model: YDLIDAR X2
# model: YDLIDAR X2L
# model: YDLIDAR X3
# model: YDLIDAR X3 PRO
# model: 3IROBOTIX DELTA-2G
# model: 3IROBOTIX DELTA-2A 115200
# model: 3IROBOTIX DELTA-2A
# model: 3IROBOTIX DELTA-2B
# model: YDLIDAR X4 PRO
# model: YDLIDAR X4
  scan:
    freq:
      target: 5.0
```

Set the Arduino Serial Monitor baud rate in the `monitor` section.
```
monitor:
  baud: 115200
```

`base.wheel.track` specifies the istance between your wheels in meters. More specifically, it is the distance between the midpoints of your tires.
```
base:
  wheel:
    track: 0.105043
```

`base.wheel.diameter` specifies your outer wheel (tire) diameter in meters.
```
    diameter: 0.043
```

`base.wheel.accel.max` sets your robot's maximum allowed acceleration. For example, increase the acceleration if your robot motors and power supply can handle the load.

Decrease the max acceleration if
- your robot wheels slip
- your motors are not powerful enough (for the given robot's weight) to achieve the max acceleration
- your motor driver or motor power supply cannot supply enough current
```
    accel:
      max: 2.0
```

`motor.rpm.max` sets your motor maximum RPM (revolutions per minute) taken from your motor's datasheet and derated (i.e. multiplied by ~0.9). The derating factor is necessary because the actual max RPM varies from motor to motor. Therefore, letting both motors run at their max RPM without derating often causes the robot veer off the straight path.
```
motor:
  rpm:
# derated
    max: 180
```

Kaia.ai firmware controls motors using a PID controller. Set the PID controller coefficients in the `motor.driver.pid` section. Check these settings if your motors lag or oscillate. `motor.driver.pid.period` is how often the PID gets updated, in seconds. `kp`, `ki`, `kd` and `kpm` are the proportional (AKA proportional-on-error), integral, derivative and proportional-on-measurement gain coefficients respectively. PID tuning is a topic worth a separate post.
```
  driver:
    pid:
      period: 0.03
      kp: 0.001
      ki: 0.003
      kd: 0
      kpm: 0
```

Lastly, `motor.driver.encoder.ppr` sets the the number of pulses the motor encoder outputs per one rotation of the motors shaft (i.e. the motor gearbox output).
```
  encoder:
    ppr: 1035
```

## Configure LiDAR model in ROS2

As of March 2025, if your robot's LiDAR model differs from the default one provided in the Kaia.ai Docker image (e.g. `LDROBOT LD14P` for Maker's Pet Mini), you will need to edit the ROS2 configuration - in addition to editing `config.yaml` as described above.

Here are steps to change the default LiDAR model.

- Launch a `kaiaai/kaiaai:iron` Docker container as [described here](https://makerspet.com/blog/BLD-120MM-PACK/)
- edit Maker's Pet [Mini telem.yaml](https://github.com/makerspet/makerspet_mini/blob/iron/config/telem.yaml) file in the Docker Bash shell

```
pico /ros_ws/src/makerspet_mini/config/telem.yaml
```

- change `lidar_model: "LDROBOT-LD14P"` to one of the [compatible LiDAR models](https://github.com/kaiaai/kaiaai_telemetry/blob/iron/config/telem.yaml):
  - `YDLIDAR-X4`, `XIAOMI-LDS02RR`, `YDLIDAR-X2-X2L`, `YDLIDAR-X3-PRO`, `YDLIDAR-X3`, `NEATO-XV11`, `SLAMTEC-RPLIDAR-A1`, `3IROBOTIX-DELTA-2G`, `3IROBOTIX-DELTA-2A`, `3IROBOTIX-DELTA-2B`, `LDROBOT-LD14P`, `CAMSENSE-X1`, `YDLIDAR-SCL`
  - for example, `lidar_model: "3IROBOTIX-DELTA-2G"`
- save the edited file (Ctrl-X, Y, Enter)
- back up your `telem.yaml` because your changes will be lost once the Docker container is destroyed

```
cp /ros_ws/src/makerspet_mini/config/telem.yaml ~/maps/
```

- restore your modified `telem.yaml` file - or persist it permanently as described later in this post - next time you launch a new Kaia.ai container

```
cp ~/maps/telem.yaml /ros_ws/src/makerspet_mini/config/
```

## Configure Custom Robot Size in ROS2

If your robot's base dimensions differ from the default ones provided in the Kaia.ai Docker image (e.g. Maker's Pet Mini, Loki, Fido or Snoopy), you will need to edit the ROS2 robot configuration as well.

- `cd /ros_ws/src/makerspet_mini/config`
- edit these files to specify your custom robot's parameters
  - in `teleop_keyboard.yaml` set your robot's maximum and minimum linear and angular speed limits and steps
  - in `telem.yaml` set the battery voltage range
  - in `/ros_ws/src/makerspet_mini/urdf/robot.urdf.xacro` set your robot's`wheel_base`, `base_diameter`, `wheel_diameter` and `wheel_width`.
- back up your edited files
- restore - or persist permanently as described below - your edited files when you launch a new container

## Optionally, Persist Your ROS2 Configuration Changes

If you need to keep your changes permanently in the Docker image, you will need to build your own Docker image for your custom robot. Here are `kaiaai/kaiaai` [Docker image](https://github.com/kaiaai/install) build scripts for your reference.

Detailed instructions TODO.