#!/bin/bash


bind_usb() {
  echo "$1" > /sys/bus/usb/drivers/usb/bind
}

unbind_usb() {
  echo "$1" > /sys/bus/usb/drivers/usb/unbind
}

read -p "bind/unbind USB device?: " prompt
read -p "which port? " port

if [ $prompt = "unbind" ];
then
        unbind_usb "usb1"
        echo "unbinding usb"
elif [ $prompt = "bind" ];
then
        bind_usb "usb1"
        echo "binding usb"
else
	echo "wrong command please try again"
fi

