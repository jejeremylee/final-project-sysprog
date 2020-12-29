# Webserver-matakubiru

This is webserver source code for matakubiru USB device driver monitor using Django Python.

## Port Forwarding

If you use VirtualBox or other VM to run your OVA check this out. 

Before trying to modify or running the webserver source code, there's something we gonna do folks.

1. Select your OVA at the Oracle VM VirtualBox Manager
2. Go to settings
3. Go to Network section
4. There should be first adapter you used for port forwarding named Adapter 1 that attached with NAT.
5. Click advanced (small dropdown button under Name)
6. Click port forwarding button
7. Click add new port forwarding rule (right side button options)
8. Fill new Host Port with 8080 as its value
9. Fill new Guest Port with  8000 as its value
10. Leave Host IP and Guest IP blank
11. Click Ok and then Ok again.

And its done, you can start your VM now.


## Requirements

Make sure to use root permission to install requirements.


Python (any version, 3 prefered)

```bash
sudo apt-get install python3 
```

python-pip

```bash
sudo apt-get install python3-pip
```

python-Django

```bash
sudo apt install python3-django
```

Django REST Framework

```bash
pip3 install djangorestframework
```

Django CORS Header

```bash
pip3 install django-cors-headers
```


## Running webserver

Go to matakubiru directory first!

```bash
python3 manage.py runserver
```

OR

```bash
python3 manage.py runserver 0.0.0.0:8000
```

## Accessing webserver
API:

1. **GET** hostname:8080/matakubiru/usb-list

   Get USB devices list from matakubiru kernel

2. **POST** hostname:8080/matakubiru/bind-usb

   bind USB devices list in matakubiru kernel
   
   POST Body example:
   {
      "bus":"1",
      "usbName":"Logitech Gaming Mouse"
   }

3. **POST** hostname:8080/matakubiru/unbind-usb

   unbind USB devices list in matakubiru kernel
   
   POST Body example:
   {
      "bus":"1",
      "usbName":"Logitech Gaming Mouse"
   }

   




###### made with tears and joy (mostly tears) by **matakubiru-dev**