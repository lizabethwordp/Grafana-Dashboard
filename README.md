Terraform AWS Infrastructure for Grafana Instance


Overview

This repository provides Terraform scripts to set up an AWS EC2 instance, a bash script to install MySQL and Grafana using Docker, and steps to deploy a Grafana dashboard using Terraform.

Prerequisites

AWS Account: Ensure you have an AWS account with necessary permissions to create EC2 instances, security groups, VPCs, and related resources.

AWS CLI: Installed and configured with your AWS credentials.

Terraform: Installed on your local machine.

SSH Key Pair: Ensure you have an SSH key pair created in your AWS account.

Git: Installed on your local machine.


Repository Structure

Dummy data folder: application source code for generating dummy data

Terraform folder: contains the infrastructure configuration files

Dummy_Data_Transaction_Metrics-1718463516549.json: The dashboard JSON file

aws.tf: Terraform script to set up AWS infrastructure.

data.sh: Bash script to install MySQL and Grafana using Docker.

grafana_provider.tf: Terraform script to configure the Grafana provider and deploy a dashboard.

data_dashboard.tf: Terraform script containing the Grafana dashboard configuration.

data_variables.tf: Terraform script containing variable configurations.

data_datasource.tf: Terraform script containing the Grafana datasource configuration.


Steps to Setup

Clone the repository to your local machine: git clone https://github.com/lizabethwordp/Grafana-Dashboard.git

Initialize Terraform in the Directory: terraform init

Customize Variables (Optional): You can modify variables in variables.tf in the default block or create a terraform.tfvars file to override defaults.

Review the Terraform Plan: terraform plan

Apply the Terraform Configuration: terraform apply


Infrastructure Provisioning:

The aws.tf Terraform script provisions the following resources:

VPC: Configured with CIDR block 10.0.0.0/16, enabling DNS support and hostnames.

Subnet: Public subnet 10.0.1.0/24 with a route table association to the internet gateway.

Internet Gateway: Attached to the VPC for internet access.

Security Group: instance_sg allowing SSH, ICMP, Grafana (port 3000), and MySQL (port 3306) from anywhere.

Route Table: Configured to route traffic to the internet gateway.

EC2 Instance: Grafana instance launched in the public subnet, with specified AMI, instance type, and user data script.


Grafana Setup (Automated via data.sh)
After Terraform provisions the infrastructure, Grafana and MySQL are automatically set up on the EC2 instance using Docker with the data.sh script. The data.sh file is referenced using the user_data command declaration in the grafanaInstance provisioning as seen below:

<img width="512" alt="Screenshot 2024-06-17 at 12 48 52" src="https://github.com/lizabethwordp/Grafana-Dashboard/assets/52053436/2390d69f-f5f8-49c2-a953-dc1ecd389f2b">


Grafana Datasource Setup (datasource.tf) for accessing the mysql database
<img width="628" alt="Screenshot 2024-06-17 at 12 49 38" src="https://github.com/lizabethwordp/Grafana-Dashboard/assets/52053436/3445099e-4801-48ed-8598-814c63d0ff47">

Explanation:

name: Name of the Grafana datasource.

type: Type of datasource (MySQL).

url: URL of the MySQL database.

database_name: Name of the MySQL database.

username, password: Credentials to access the MySQL database.


Grafana Dashboard Setup (dashboard.tf)

<img width="648" alt="Screenshot 2024-06-17 at 12 50 20" src="https://github.com/lizabethwordp/Grafana-Dashboard/assets/52053436/04f0867e-c970-4622-b618-62a388a4edfa">

config_json: Configuration JSON for the Grafana dashboard, dynamically generated using a template file (var.data_filename).

DS_MYSQL_DUMMY_DATA_DASHBOARD: Reference to the datasource name (data_mysql_datasource) used by the dashboard.

depends_on: Ensures the Grafana datasource is created before deploying the dashboard.


Summary

Set up AWS infrastructure: Use Terraform to create a VPC, subnet, internet gateway, security group, and an EC2 instance.

Install MySQL and Grafana: Use a bash script to install MySQL and Grafana using Docker.

Deploy Grafana Dashboard: Use Terraform's Grafana provider to deploy a dashboard to Grafana.

Following these steps, you'll have a fully functional Grafana instance with MySQL running on an AWS EC2 instance, and a sample Grafana dashboard deployed using Terraform.
