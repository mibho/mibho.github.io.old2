---
layout: tocpost
title: 'Flare-On8-2021 - Chall 03: antioch'
categories: [FlareOn8, x86-64, Linux, ELF binary, Docker, Monty Python]
excerpt: 'Challenge #3 is a Monty Python themed exercise involving the use of Docker. Understanding the concept of multistage builds and layering in Docker is vital to make sense of the given files and apply any needed changes. The approach shown in this write-up gets around this by leveraging the fact that a Docker image is basically a diff and taking advantage of lucky guessing.' 
---
<div class = "myWay">
    <p>
        Challenge #3 is a <a href="https://en.wikipedia.org/wiki/Monty_Python_and_the_Holy_Grail">Monty Python</a> themed exercise involving the use of 
        <a href="https://www.docker.com/"> Docker </a>. Understanding the concept of multistage builds and layering in Docker is vital to make sense of the given files and apply any needed changes. The approach shown in this write-up gets around this by leveraging the fact that <b> a Docker image is basically a diff </b> and taking advantage of lucky guessing.
    </p>
</div>

## Chall. 03: antioch
#### Setup

![image](https://user-images.githubusercontent.com/86342821/141667679-40c0174e-2f51-490a-b0ee-16ab181e675c.png)

***NOTE: IF YOU HAVE BOTH VIRTUALBOX AND VMWARE INSTALLED ON YOUR SYSTEM PRIOR TO INSTALLING DOCKER, YOU MIGHT COME ACROSS A BIG TROUBLESHOOTING NIGHTMARE LIKE I DID. For this reason, I swapped to Ubuntu for this challenge (also doesn't hurt since we're dealing with an ELF [Linux] binary)***         

Download the zip file [here](https://github.com/mibho/mibho.github.io/raw/master/attachments/03_antioch.7z) and open it: 

![image](https://user-images.githubusercontent.com/86342821/141669884-3e28a9a5-2c95-4ae9-be3d-f3189cf36f14.png)

only to reveal yet another zip file..? Let's open that one up too:


![image](https://user-images.githubusercontent.com/86342821/141669942-15e40266-36d4-4a8a-b869-16669038b01e.png)

...
<div class = "myWay">
    <img src="/images/docRivers_blinking.gif">
    </div>
<br>

Uhhh.... 

I mean... I recognize the .json files at least..? I'll start with those. 

First, manifest.json:

![image](https://user-images.githubusercontent.com/86342821/143186722-b1a02a91-064f-49d6-966a-cfab8ac02f95.png)

I still don't know what I'm looking at. **BUT** there are two things I notice:

1. a13ffcf46cf41480e7f15c7f3c6b862b799bbe61e7d5909150d8a43bd3b6c039.json (the other .json file) is listed as ***config***.
2. 7016b68f19aed3bb67ac4bf310defd3f7e0f7dd3ce544177c506d795f0b2acf3/layer.tar is listed as ***layers***.

I know **.tar** files are archive files like .rar/.zip, so maybe I have to extract this .tar file to get more information and move onward. 
