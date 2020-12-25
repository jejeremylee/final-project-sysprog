import re
import subprocess
device_re = re.compile(b"Bus\s+(?P<bus>\d+)\s+Device\s+(?P<device>\d+).+ID\s(?P<id>\w+:\w+)\s(?P<tag>.+)$", re.I)
df = subprocess.check_output("lsusb")
devices = []
for i in df.split(b'\n'):
    if i:
        info = device_re.match(i)
        if info:
            dinfo = info.groupdict()
            dinfo['path'] = '/dev/bus/usb/%s/%s' % (dinfo['bus'].decode("utf-8"), dinfo['device'].decode("utf-8"))
            devices.append(dinfo)

for i in devices :
    print ("Device: "+i['tag'].decode("utf-8"))
    print ("Bus: "+ i['bus'].decode("utf-8"))
    print ("Port: "+i['device'].decode("utf-8"))
    print ("Path: "+i['path'])
    print ("----------------------------------")
