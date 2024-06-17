terraform {
  required_providers {
    grafana = {
      source  = "grafana/grafana"
      version = "1.43.0"
    }

    aws = {
      version = "5.54.1"
    }
  }
}
provider "grafana" {
  url = "{url}" #grafana url
  auth = "{user}:{password}"  #grafana user and password
}
