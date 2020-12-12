lsusb -t

echo 
echo Which usb driver you want to disable from above?
echo '(example: input '2-1' (2 is Bus number and 1 is port number))'
echo '(please dont forget to put string quote in your input)'

read -p 'Input: ' number

echo $number | sudo tee /sys/bus/usb/drivers/usb/unbind
