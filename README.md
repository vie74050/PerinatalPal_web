# About

This repository is for the Web elements of the Perinatal Pal:
- Landing page: main entry point
- Unity WebGL builds for Stations and Positions interactions

This repo does not contain the Unity project source.  (TBD - link to Unity Project repo)

## History
The Perinatal Pal iOS native app was published 2013 and updated 2014.  At that time, it was decided native app support was too onerous and limited so we ported the resources onto the web, accessed at https://ltc.bcit.ca/multimedia/_SOH/PerinatalPal/ .
The landing page embeds or links to several resources.

Each resource can be access individually: the videos are on YouTube, and the Positions and Stations 3D interactives each have their own web sites.
However, the 3D interactives are only officially supported on desktop browsers (build using older Unity WebGL specification), and the original builds lack touch-based input detection.

### Versions:

- v1.0 2013 (iPad native app for iOS73.x)
- v2.0 2014 updated iPad native app and also adapted to WebGL 1.0 using Unity editor v5.x
- v3.0 2024 This version, update using Unity editor v 2019.1x

 ## Objective

In this update, native iOS app support is dropped, so we will update the landing page to reflect this. 
The 3D resources for Stations and Positions also need to be updated, to able to run on more WebgGL-supported devices, by using a more current WebGL build from Unity.

## Plan

Build using a more updated Unity editor, and move UI (buttons) elements to be handled in the web container, away from the Unity build.
