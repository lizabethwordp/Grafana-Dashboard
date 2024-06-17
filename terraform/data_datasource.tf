resource "grafana_data_source" "data_mysql_datasource" {
  name      = var.data_mysql_grafana_name
  type      = "mysql"
  url       = var.data_mysql_url
  database_name  = var.data_mysql_database
  username = var.data_mysql_username
  password = var.data_mysql_password
  
}
