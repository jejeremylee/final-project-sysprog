echo "Starting matakubiru Django webserver" | systemd-cat -p info
python3 /home/user/sysprog/webserver-matakubiru/matakubiru/manage.py runserver 0.0.0.0:8000
