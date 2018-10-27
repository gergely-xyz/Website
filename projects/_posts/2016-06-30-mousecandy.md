---
title: MouseCandy behavioural training device
---

Behavioural training automation at The Department of Physiology, Anatomy and Neuroscience - University of Szeged

To automate behavioural training of mice in the lab I have designed and built a compact device with an audio and a video output and five solenoid valves for stimulus delivery. The experimenter could wirelessly connect to he device to set up behavioural training sessions through a simple interface. The system's brain is a Raspberry pi that runs the Raspbian operating system. It acts as a WiFi access point that only serves a web interface (using CGI) for setting up training sessions. The training software (named MouseCandy) was mostly written in Python 2.7. I prefer Python 3 but the libraries used to control the hardware were only available for 2.7 at the time. The user can set up simple Pavlovian or Go/No-Go tasks for the animal, every parameter for these can be set up in a setup wizard like environment.

There are three types of stimuli that can be delivered: 
- auditory beeps with a given frequency and wave function
- moving grating patterns with given speed and angle
- scents as olfactory stimuli by opening one of the five solenoid valves

{% include image-gallery.html folder="projects/mcandy_pics" %}

*[CGI]: Common Gateway Interface