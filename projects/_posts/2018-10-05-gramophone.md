---
title: Gramophone mouse treadmill
---

 During my years as an Info-bionics MSc student at the [Pázmány Péter Catholic University][ppkeitk] I started working as a Research assistant at [RozsaLab][rlab]. In collaboration with [Femtonics Ltd.][femto] we developed a device for the single dimension locomotion tracking of head-restrained mice for *in vivo* two-photon microscopy experiments. When I started an early version of the device was already in use in the lab. My first task was to prototype a new, more reliable hardware and an accompanying software package that can work in conjunction with Femtonics' microscopes. I have captured this design and testing process in my MSc thesis work. 

 The prototype turned out to be such a success that it made sense to turn it into a [product][gramo]. Working with a small group of engineers, developers and application specialists at [Femtonics][femto], we developed a new compact hardware and significantly improved the [software package][gramogithub]. My main task here was the development and [documentation][gramdocs] of the software which proved to be a great opportunity to test and deepen my knowledge in Python, Qt, HID communication, HDF handling, Sphinx documentation generation and LaTeX. Due to my background it was also my responsibility to facilitate communication between the research and engineering departments to ensure the end product meets the expectations of the end users. In the end the locomotion tracking module got a nice GUI and an API was added to generate two dimensional linear mazes in which the animals can be conditioned for different tasks.

{% include image-gallery.html folder="projects/gram_pics" %}

 The GramophoneTools package became Femtonics' first open-source software available under the GPL license on [GitHub][gramogithub].

[rlab]: http://rozsalab.eu/
[femto]: http://femtonics.eu/
[ppkeitk]: https://itk.ppke.hu/en
[gramo]: http://femtonics.eu/femtonics-accessories/gramophone/
[gramogithub]: https://github.com/Femtonics/GramophoneTools
[gramdocs]: http://gramophone.femtonics.eu/
*[MSc]: Master of Science
*[HID]: Human Interface Device
*[HDF]: Hierarchical Data Format
*[GUI]: Graphical User Interface
*[API]: Application Programming Interface
*[GPL]: GNU General Public License