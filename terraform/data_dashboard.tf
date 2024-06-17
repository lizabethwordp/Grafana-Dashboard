resource "grafana_dashboard" "data_dashboard" {
    config_json = templatefile("${var.data_filename}", {
    
    #this references the dashboard datasource
    DS_MYSQL_DUMMY_DATA_DASHBOARD = grafana_data_source.data_mysql_datasource.name,
  
  })

  # Ensure that the datasource is created before the dashboard is created
  depends_on = [
    grafana_data_source.data_mysql_datasource
  ]
}
