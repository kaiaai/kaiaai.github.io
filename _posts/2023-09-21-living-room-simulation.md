---
layout: post
title: A Living Room Simulation 3D Model
author: iliao
categories: [ ROS2, Gazebo Simulation ]
image: assets/images/webp/gazebo_maldives.webp
# featured: true
# hidden: true
# comments: true
# tags: [red, yellow]
# rating: .5
# comments: false
---
I'd like to share a simulated world I just made (my first). The simulator is called [Gazebo](https://gazebosim.org) - it is used for ROS2 robotic simulations.

I have also created the TV displaying a tropical paradise (emissive), the bright windows with semi-transparent curtains, the ivory-textured floor rug, the door and both wall posters

Sometime later I will post a tutorial showing how you can create and edit your own model and world - and how to simulate your own robot inside.

<blockquote>{% include signup-form.html %}</blockquote>

You may ask, why would you need to simulate your robot? Suppose you'd like to write software, so that your robot can play ball (the 10" red one in the picture). You can test your software in two ways - have your real robot play with a real ball - or have your simulated robot play with a simulated ball.

Suppose you need to run a hundred tests for this ball-playing skill (that vary ball and robot positions, the kick speed, etc.) Doing this physically would require you to stand up from your desk, manually position the robot and the ball, waiting for the robot to kick the ball, etc. Doing this in simulation lets you run those tests automatically and in parallel (in the cloud) - so you get results quickly and without even stepping away from your desk.

Open-source files are here:
- [A wall-mount](https://app.gazebosim.org/makerspet/fuel/models/tv_65in_emissive) TV displaying an island scene
- A red 10-inch [play ball](https://app.gazebosim.org/makerspet/fuel/models/red_ball_10in)
- A drywall-textured [room wall](https://app.gazebosim.org/makerspet/fuel/models/room_wall_2x5m)
- A [bright window](https://app.gazebosim.org/makerspet/fuel/models/window_curtains) (emissive) with semi-transparent curtains
- An ivory-textured [floor rug](https://app.gazebosim.org/makerspet/fuel/models/rug_ivory_2m)
- A simple [interior door](https://app.gazebosim.org/makerspet/fuel/models/door_08x2m)
- [A wall-mount TV](https://app.gazebosim.org/makerspet/fuel/models/tv_65in), non-emissive
- A [Kaia.ai poster](https://app.gazebosim.org/makerspet/fuel/models/kaiaai_poster)
- A [Maker's Pet poster](https://app.gazebosim.org/makerspet/fuel/models/makerspet_poster)
