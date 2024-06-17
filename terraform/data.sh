#!/bin/bash
# Update the package index
sudo yum update -y

# Install Docker
sudo yum install docker -y

# Start Docker
sudo systemctl start docker

# Add the ec2-user to the docker group
sudo usermod -a -G docker ec2-user

# Enable Docker to start on boot
sudo systemctl enable docker

# Run Grafana
sudo docker run -d -p 3000:3000 --name=grafana grafana/grafana

# Ensure Grafana container starts on reboot
sudo tee /etc/systemd/system/grafana-docker.service > /dev/null << EOL
[Unit]
Description=Grafana Docker Container
After=docker.service
Requires=docker.service

[Service]
Restart=always
ExecStart=/usr/bin/docker start -a grafana
ExecStop=/usr/bin/docker stop -t 2 grafana

[Install]
WantedBy=default.target
EOL

sudo systemctl enable grafana-docker.service
sudo systemctl start grafana-docker.service

# Install MySQL
sudo docker pull mysql:8.0
sudo docker run -d -p 3306:3306 --name=mysql mysql

