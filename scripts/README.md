# matakubiru-scripts

This is matakubiru scripts source code for matakubiru USB device driver monitor webserver development.

## Deskripsi Script
### Boot Scripts

1. **matakubiru_service.service**


Script ini digunakan untuk inisiasi service yang akan dipakai oleh systemd pada saat startup kernel
    
2. **matakubiru_service.sh**

Script ini yang akan dijalankan pada saat startup / booting oleh systemd


### Contoh file output matakubiru_service

1. **out.log**
2. **err.log**


### Driver Control Scripts
1. **listUSB.py**

Script ini digunakan untuk pengambilan daftar USB device yang terpasang dalam system. Script ini akhirnya di embed secara langsung ke dalam views.py dari webserver django matakubiru menggunakan library subprocess yang terdapat pada python.

2. **testUSBDriver.sh**

Script ini digunakan untuk pengembangan pertama kali controlling device yang tersambung ke system.

3. **bindDevice.sh**

Script ini digunakan untuk melakukan binding secara manual terhadap sebuah device pada bus yang ditentukan ke system.Script ini akhirnya di embed secara langsung ke dalam views.py dari webserver django matakubiru menggunakan library subprocess yang terdapat pada python.

4.  **unbindDevice.sh**

Script ini digunakan untuk melakukan unbinding secara manual terhadap sebuah device pada bus yang ditentukan ke system.Script ini akhirnya di embed secara langsung ke dalam views.py dari webserver django matakubiru menggunakan library subprocess yang terdapat pada python.


### Script lainnya

sisa dari script-script yang belum kita sebutkan umumnya digunakan untuk pada masa testing dan percobaan mengontrol device driver dan hanya yang disebutkan yang terlihat penggunaannya dalam pengembangan web app dan webserver matakubiru.


###### made with tears and joy (mostly tears) by **matakubiru-dev**