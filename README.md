## SAR (System Activity Report) Graph
An Online/Offline Tool to view the SAR output in graphical charts.

SARchart is an online tool to view the performance of a Linux server using the SAR (System Activity Report) output in an impressive graphical chart layout. This tool displays graphs for multiple days to a server. Also provides information of Peak CPU/Load/Memory/IO in the dashboard. The tool helps you view the charts on CPU, Memory, Load, Run Queue, Swap usage, Processes, Contexts, Interrupts, Paging, NFS, Sockets etc. of a server in graphical layout. 
Note: Currently this works only for Linux/AIX OS

![](assets/sargraph-samples.gif)

## How to Use
The steps involved in generating the SAR Graph are as follows:

1. Create a SAR output as a text file from the Unix server.
  + Login as root or with sudo access run the following commands to fetch the sar output for a specific date. Example:
  ```shell
  sar -A -f /var/log/sa/sa19 > /tmp/sa19_$(hostname).txt
  chmod 755 /tmp/sa19_$(hostname).txt
  ```
  + For multiple days files:
  ```
  ls /var/log/sa/sa?? | xargs -i sar -A -f {} > /tmp/sar_$(uname -n).txt
  chmod 755 /tmp/sar_$(uname -n).txt
  ```

2. Download the SAR text file to the desktop
  + Use any SCP software like Winscp or pscp to download the file from the server. I prefer pscp command to download the files from Unix server to the desktop. Example:
  ```batch
  pscp suresh@hostname143:/tmp/sa19_hostname143.txt .
  ```
3. Upload the SAR text file to this site.
  + Navigate on to the [SAR Graph](https://sargraph.github.io). Just click on Upload button to upload the file to the site.
4. The site will create all the charts.
  + That's all folks! the charts are ready for viewing. 
  + Kindly star this repository if you found this interesting.
  
## New Features
+ SAR chart will plot the values of multiple days for a server.
+ Uses only JavaScript to plot the charts/graphs.
+ Client side interface. So does not save any information.
+ No need to install any package in the server
+ Works with AM/PM and 24 Hour format also.
+ Improved designs and buttons
+ Can export graph reports

## SAR Reports
Currently the report includes the following
+ CPU - CPU0,CPU1, CPU2, CPU3, CPU All
+ Processes, Contexts, Interrupts
+ Swapping
+ Paging Activity
+ IO
+ Page
+ Memory Usage
+ Memory Misc
+ Swap Usage
+ Load (runq)
+ NFS Client
+ NFS Server
+ Sockets

## Features
+ Uses only Javascript to plot the charts/graphs.
+ Client side interface. So does not save any information.
+ SAR chart currently will plot the values for a given single server.
+ No additional packages required to be installed in the server

## OS Platform supported
+ Currently the output is tested in the following OS: Linux, AIX
+ Planning to include other OS in future

## Website Links
[SAR Chart](http://sarchart.weebly.com)

## Author
[Suresh Raju](https://suresh-raju.github.io)<br>
copyright 2016
