---
sidebar_position: 6
---
# Frontend

The application demoed here is an Airplane Tracker, which is similar to some other relevant applications, such as [FlightAware](https://flightaware.com/) and [Flightradar24](https://www.flightradar24.com/). However, we ************************************want to emphasize************************************ that the main focus of our work is not on the Airplane Tracker, but instead on the whole pipeline. When you set up the pipeline by following our tutorial, you can create a wide range of applications, not just the Airplane Tracker. The application here can also serve as one place for you to check if your pipeline is working or not. 

## Tech Stack of the Frontend Airplane Tracker

[React](https://react.dev/), [Mapbox](https://www.mapbox.com/), [AWS Amplify](https://aws.amazon.com/amplify/)

To use AWS Amplify to deploy the React application, please follow the link below:

[https://docs.amplify.aws/start/q/integration/react/](https://docs.amplify.aws/start/q/integration/react/) 

## Using the Frontend Airplane Tracker Visualization

### General Instructions:

- Visit the frontend page: [**https://tinyurl.com/specpipe**](https://tinyurl.com/specpipe)
- You can choose to allow your browser to see your location, **************************and then the map should center around your location. Otherwise, the map will center around Berkeley, CA by default.
- Every airplane dot/marker on the map represents a logged location at a certain time, with a trail of the same color markers representing a single plane.
- The Airplane Tracker application updates the map in **real time** with new airplane data every 20 seconds. The application cleans parts of the data when the number of markers is over a certain limit.
- To test:
    - Wait and watch for current data points to show up
    - Should look like the image below after some time has passed
    
    ![Screen Shot 2023-05-10 at 4.12.35 PM.png](/img/frontend_1.png)
    

The application also provides additional functionalities. 

### Feature 1: Airplane Marker Popup

- As you click on any marker on the map in the Airplane Tracker application, a popup will display additional information such as the airplane’s ICAO number, altitude, time of location broadcast, the aircraft type, etc., as can be seen in the image below.
    
    ![Screen Shot 2023-05-10 at 4.22.25 PM.png](/img/frontend_2.png)
    

### Feature 2: Search Markers based on Time Intervals

- There is an option to select a desired interval and see the plane trajectories during that time range using the calendar tool in the top-left corner of the application.
- In the image shown below, we specified the start time to be 10:00 am on May 8, 2023 and the end time to be 10:04 am on May 8, 2023.
- Make sure to select a max time range of 4 minutes to prevent too many airplane markers
    
    ![Screen Shot 2023-05-10 at 10.07.27 PM.png](/img/frontend_3.png)
    

### Feature 3: Filter Markers by Reporter

- To distinguish between different reporters, the Airplane Tracker application has a “filter by reporter” functionality using the “Select Reporter” dropdown in the left corner of the application.
- Select a specific reporter under the dropdown, and the application only shows the airplane markers with this reporter type.
    
    ![Screen Shot 2023-05-10 at 10.14.14 PM.png](/img/frontend_4.png)
    

### Feature 4: Search Markers based on Location

- Using the search box in the top-right corner of the application, users can provide a specific location, and the map will center around the location, just like the image below.
    
    ![Screen Shot 2023-05-10 at 10.20.06 PM.png](/img/frontend_5.png)
    

## Endnote

In the end, this Airplane Tracker application gives you a glimpse of what we could do with the pipeline and the wireless spectrum radio data. We hope that this could be a motivation for you to develop creative applications using wireless spectrum!