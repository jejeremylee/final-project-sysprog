import re
import subprocess
from django.shortcuts import render

from django.http import JsonResponse
from rest_framework.decorators import api_view


def getUSBDevices():
    device_re = re.compile(b"Bus\s+(?P<bus>\d+)\s+Device\s+(?P<device>\d+).+ID\s(?P<id>\w+:\w+)\s(?P<tag>.+)$", re.I)
    df = subprocess.check_output("lsusb")
    devices = []
    for i in df.split(b'\n'):
        if i:
            info = device_re.match(i)
            if info:
                dinfo = info.groupdict()
                #dinfo['path'] = '/dev/bus/usb/%s/%s' % (dinfo['bus'].decode("utf-8"), dinfo['device'].decode("utf-8"))
                result = [(key, value.decode('utf-8')) for key, value in dinfo.items()]
                devices.append(result)

    return devices


@api_view(["GET"])
def usbList(request):
    content = getUSBDevices()
    return JsonResponse(content, safe=False)
