import re
import subprocess
import json
from rest_framework import status
from django.shortcuts import render
from rest_framework.response import Response
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

def bindUSBDevice(usb):
    bind = subprocess.call("sudo bash -c 'echo "+usb+" > /sys/bus/usb/drivers/usb/bind'", shell=True)
    return "OK"

def unbindUSBDevice(usb):
    unbind = subprocess.call("sudo bash -c 'echo "+usb+" > /sys/bus/usb/drivers/usb/unbind'", shell=True)
    return "OK"

@api_view(["GET"])
def usbList(request):
    content = getUSBDevices()
    return JsonResponse(content, safe=False)

@api_view(["POST"])
def bindUSB(request):
    data=json.loads(request.body)
    if request.body:
        usb = 'usb'+data['bus']
        okStat=bindUSBDevice(usb)
        return Response(okStat+": success binding "+data['usbName']+" device", status=status.HTTP_201_CREATED)
    return Response("error binding usb device", status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def unbindUSB(request):
    data=json.loads(request.body)
    if request.body:
        usb = 'usb'+data['bus']
        okStat=unbindUSBDevice(usb)
        return Response(okStat+": success unbinding "+data['usbName']+" device", status=status.HTTP_201_CREATED)
    return Response("error unbinding usb device", status=status.HTTP_400_BAD_REQUEST)
    

