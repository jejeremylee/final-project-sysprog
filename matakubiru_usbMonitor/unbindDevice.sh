#!/bin/bash


sudo bash -c 'echo '+$1+' > /sys/bus/usb/drivers/usb/unbind'

