## SAR (System Activity Report) Graph
An Online/Offline Tool to view the SAR output in graphical charts.

SAR Graph is an online tool to view the performance of a Linux server using the SAR (System Activity Report) output in an impressive graphical chart layout. The tool helps you view the output of CPU, Memory, Load, Run Queue, Swap usage etc. of a server in graphical layout.

## How to Use
The steps involved in generating the SARchart are as follows:

1. Create a SAR output as a text file from the Unix server.
  + Login as root or with sudo access run the following commands to fetch the sar output for a specific date. Example:
  ```shell
  # sar -A -f /var/log/sa/sa19 > /tmp/sa19_$(hostname).txt
  # chmod 755 /tmp/sa19_$(hostname).txt
  ```
2. Download the SAR text file to the desktop
  + Use any SCP software like Winscp or pscp to download the file from the server. I prefer pscp command to download the files from Unix server to the desktop. Example:
  ```batch
  C:\> pscp suresh@servername:/tmp/sa19_hostname.txt .
  ```
3. Upload the SAR text file to this site.
  + Navigate on to the [SAR Graph](https://sargraph.github.io). Just click on Upload button to upload the file to the site.
4. The site will create all the charts.
  + That's all folks! the charts are ready for viewing. Kindly star my repository if you found this interesting.

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
+ Currently the output is tested in the following OS: Linux

## Website Links
[SAR Chart](http://sarchart.weebly.com)

## Author
[Suresh Raju](https://suresh-raju.github.io)<br>
copyright 2016
