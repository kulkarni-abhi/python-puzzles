function loadCpuChart() {
var chart = new CanvasJS.Chart("cpuChartContainer", {"animationEnabled": true, "exportEnabled": true, "axisY": {"title": "Percentage"}, "toolTip": {"shared": true}, "data": [{"dataPoints": [{"y": 53, "label": "2020-04-07 17:57:11"}, {"y": 75, "label": "2020-04-07 17:58:11"}, {"y": 10, "label": "2020-04-07 17:59:11"}, {"y": 41, "label": "2020-04-07 18:00:11"}, {"y": 70, "label": "2020-04-07 18:01:11"}, {"y": 39, "label": "2020-04-07 18:02:11"}, {"y": 10, "label": "2020-04-07 18:03:11"}, {"y": 22, "label": "2020-04-07 18:04:11"}, {"y": 53, "label": "2020-04-07 18:05:11"}, {"y": 28, "label": "2020-04-07 18:06:11"}, {"y": 89, "label": "2020-04-07 18:07:11"}, {"y": 29, "label": "2020-04-07 18:08:11"}, {"y": 22, "label": "2020-04-07 18:09:11"}, {"y": 24, "label": "2020-04-07 18:10:11"}, {"y": 81, "label": "2020-04-07 18:11:11"}, {"y": 21, "label": "2020-04-07 18:12:11"}, {"y": 42, "label": "2020-04-07 18:13:11"}, {"y": 71, "label": "2020-04-07 18:14:11"}, {"y": 82, "label": "2020-04-07 18:15:11"}, {"y": 30, "label": "2020-04-07 18:16:11"}, {"y": 88, "label": "2020-04-07 18:17:11"}, {"y": 89, "label": "2020-04-07 18:18:11"}, {"y": 55, "label": "2020-04-07 18:19:11"}, {"y": 51, "label": "2020-04-07 18:20:11"}, {"y": 82, "label": "2020-04-07 18:21:11"}, {"y": 49, "label": "2020-04-07 18:22:11"}, {"y": 35, "label": "2020-04-07 18:23:11"}, {"y": 10, "label": "2020-04-07 18:24:11"}, {"y": 40, "label": "2020-04-07 18:25:11"}, {"y": 88, "label": "2020-04-07 18:26:11"}, {"y": 33, "label": "2020-04-07 18:27:11"}, {"y": 77, "label": "2020-04-07 18:28:11"}, {"y": 91, "label": "2020-04-07 18:29:11"}, {"y": 16, "label": "2020-04-07 18:30:11"}, {"y": 68, "label": "2020-04-07 18:31:11"}, {"y": 24, "label": "2020-04-07 18:32:11"}, {"y": 45, "label": "2020-04-07 18:33:11"}, {"y": 14, "label": "2020-04-07 18:34:11"}, {"y": 25, "label": "2020-04-07 18:35:11"}, {"y": 35, "label": "2020-04-07 18:36:11"}, {"y": 38, "label": "2020-04-07 18:37:11"}, {"y": 22, "label": "2020-04-07 18:38:11"}, {"y": 38, "label": "2020-04-07 18:39:11"}, {"y": 19, "label": "2020-04-07 18:40:11"}, {"y": 40, "label": "2020-04-07 18:41:11"}, {"y": 58, "label": "2020-04-07 18:42:11"}, {"y": 95, "label": "2020-04-07 18:43:11"}, {"y": 66, "label": "2020-04-07 18:44:11"}, {"y": 82, "label": "2020-04-07 18:45:11"}, {"y": 71, "label": "2020-04-07 18:46:11"}, {"y": 12, "label": "2020-04-07 18:47:11"}, {"y": 73, "label": "2020-04-07 18:48:11"}, {"y": 61, "label": "2020-04-07 18:49:11"}, {"y": 27, "label": "2020-04-07 18:50:11"}, {"y": 41, "label": "2020-04-07 18:51:11"}, {"y": 17, "label": "2020-04-07 18:52:11"}, {"y": 82, "label": "2020-04-07 18:53:11"}, {"y": 85, "label": "2020-04-07 18:54:11"}, {"y": 80, "label": "2020-04-07 18:55:11"}, {"y": 25, "label": "2020-04-07 18:56:11"}], "type": "spline", "name": "cpu#0", "showInLegend": true}, {"dataPoints": [{"y": 63, "label": "2020-04-07 18:57:11"}, {"y": 69, "label": "2020-04-07 18:58:11"}, {"y": 71, "label": "2020-04-07 18:59:11"}, {"y": 43, "label": "2020-04-07 19:00:11"}, {"y": 10, "label": "2020-04-07 19:01:11"}, {"y": 83, "label": "2020-04-07 19:02:11"}, {"y": 52, "label": "2020-04-07 19:03:11"}, {"y": 89, "label": "2020-04-07 19:04:11"}, {"y": 84, "label": "2020-04-07 19:05:11"}, {"y": 32, "label": "2020-04-07 19:06:11"}, {"y": 90, "label": "2020-04-07 19:07:11"}, {"y": 86, "label": "2020-04-07 19:08:11"}, {"y": 73, "label": "2020-04-07 19:09:11"}, {"y": 86, "label": "2020-04-07 19:10:11"}, {"y": 69, "label": "2020-04-07 19:11:11"}, {"y": 48, "label": "2020-04-07 19:12:11"}, {"y": 20, "label": "2020-04-07 19:13:11"}, {"y": 97, "label": "2020-04-07 19:14:11"}, {"y": 71, "label": "2020-04-07 19:15:11"}, {"y": 74, "label": "2020-04-07 19:16:11"}, {"y": 40, "label": "2020-04-07 19:17:11"}, {"y": 32, "label": "2020-04-07 19:18:11"}, {"y": 31, "label": "2020-04-07 19:19:11"}, {"y": 12, "label": "2020-04-07 19:20:11"}, {"y": 75, "label": "2020-04-07 19:21:11"}, {"y": 86, "label": "2020-04-07 19:22:11"}, {"y": 58, "label": "2020-04-07 19:23:11"}, {"y": 94, "label": "2020-04-07 19:24:11"}, {"y": 83, "label": "2020-04-07 19:25:11"}, {"y": 77, "label": "2020-04-07 19:26:11"}, {"y": 43, "label": "2020-04-07 19:27:11"}, {"y": 24, "label": "2020-04-07 19:28:11"}, {"y": 18, "label": "2020-04-07 19:29:11"}, {"y": 92, "label": "2020-04-07 19:30:11"}, {"y": 77, "label": "2020-04-07 19:31:11"}, {"y": 19, "label": "2020-04-07 19:32:11"}, {"y": 86, "label": "2020-04-07 19:33:11"}, {"y": 16, "label": "2020-04-07 19:34:11"}, {"y": 50, "label": "2020-04-07 19:35:11"}, {"y": 32, "label": "2020-04-07 19:36:11"}, {"y": 81, "label": "2020-04-07 19:37:11"}, {"y": 68, "label": "2020-04-07 19:38:11"}, {"y": 44, "label": "2020-04-07 19:39:11"}, {"y": 18, "label": "2020-04-07 19:40:11"}, {"y": 85, "label": "2020-04-07 19:41:11"}, {"y": 33, "label": "2020-04-07 19:42:11"}, {"y": 61, "label": "2020-04-07 19:43:11"}, {"y": 16, "label": "2020-04-07 19:44:11"}, {"y": 44, "label": "2020-04-07 19:45:11"}, {"y": 57, "label": "2020-04-07 19:46:11"}, {"y": 58, "label": "2020-04-07 19:47:11"}, {"y": 56, "label": "2020-04-07 19:48:11"}, {"y": 95, "label": "2020-04-07 19:49:11"}, {"y": 69, "label": "2020-04-07 19:50:11"}, {"y": 25, "label": "2020-04-07 19:51:11"}, {"y": 38, "label": "2020-04-07 19:52:11"}, {"y": 25, "label": "2020-04-07 19:53:11"}, {"y": 98, "label": "2020-04-07 19:54:11"}, {"y": 48, "label": "2020-04-07 19:55:11"}, {"y": 63, "label": "2020-04-07 19:56:11"}], "type": "spline", "name": "cpu#1", "showInLegend": true}, {"dataPoints": [{"y": 89, "label": "2020-04-07 19:57:11"}, {"y": 78, "label": "2020-04-07 19:58:11"}, {"y": 92, "label": "2020-04-07 19:59:11"}, {"y": 47, "label": "2020-04-07 20:00:11"}, {"y": 96, "label": "2020-04-07 20:01:11"}, {"y": 93, "label": "2020-04-07 20:02:11"}, {"y": 20, "label": "2020-04-07 20:03:11"}, {"y": 20, "label": "2020-04-07 20:04:11"}, {"y": 59, "label": "2020-04-07 20:05:11"}, {"y": 95, "label": "2020-04-07 20:06:11"}, {"y": 41, "label": "2020-04-07 20:07:11"}, {"y": 10, "label": "2020-04-07 20:08:11"}, {"y": 29, "label": "2020-04-07 20:09:11"}, {"y": 31, "label": "2020-04-07 20:10:11"}, {"y": 79, "label": "2020-04-07 20:11:11"}, {"y": 73, "label": "2020-04-07 20:12:11"}, {"y": 33, "label": "2020-04-07 20:13:11"}, {"y": 18, "label": "2020-04-07 20:14:11"}, {"y": 11, "label": "2020-04-07 20:15:11"}, {"y": 28, "label": "2020-04-07 20:16:11"}, {"y": 60, "label": "2020-04-07 20:17:11"}, {"y": 54, "label": "2020-04-07 20:18:11"}, {"y": 89, "label": "2020-04-07 20:19:11"}, {"y": 100, "label": "2020-04-07 20:20:11"}, {"y": 26, "label": "2020-04-07 20:21:11"}, {"y": 77, "label": "2020-04-07 20:22:11"}, {"y": 53, "label": "2020-04-07 20:23:11"}, {"y": 34, "label": "2020-04-07 20:24:11"}, {"y": 35, "label": "2020-04-07 20:25:11"}, {"y": 39, "label": "2020-04-07 20:26:11"}, {"y": 73, "label": "2020-04-07 20:27:11"}, {"y": 22, "label": "2020-04-07 20:28:11"}, {"y": 24, "label": "2020-04-07 20:29:11"}, {"y": 24, "label": "2020-04-07 20:30:11"}, {"y": 51, "label": "2020-04-07 20:31:11"}, {"y": 11, "label": "2020-04-07 20:32:11"}, {"y": 82, "label": "2020-04-07 20:33:11"}, {"y": 49, "label": "2020-04-07 20:34:11"}, {"y": 65, "label": "2020-04-07 20:35:11"}, {"y": 20, "label": "2020-04-07 20:36:11"}, {"y": 23, "label": "2020-04-07 20:37:11"}, {"y": 59, "label": "2020-04-07 20:38:11"}, {"y": 95, "label": "2020-04-07 20:39:11"}, {"y": 44, "label": "2020-04-07 20:40:11"}, {"y": 25, "label": "2020-04-07 20:41:11"}, {"y": 42, "label": "2020-04-07 20:42:11"}, {"y": 72, "label": "2020-04-07 20:43:11"}, {"y": 19, "label": "2020-04-07 20:44:11"}, {"y": 94, "label": "2020-04-07 20:45:11"}, {"y": 86, "label": "2020-04-07 20:46:11"}, {"y": 94, "label": "2020-04-07 20:47:11"}, {"y": 96, "label": "2020-04-07 20:48:11"}, {"y": 71, "label": "2020-04-07 20:49:11"}, {"y": 72, "label": "2020-04-07 20:50:11"}, {"y": 95, "label": "2020-04-07 20:51:11"}, {"y": 16, "label": "2020-04-07 20:52:11"}, {"y": 63, "label": "2020-04-07 20:53:11"}, {"y": 71, "label": "2020-04-07 20:54:11"}, {"y": 25, "label": "2020-04-07 20:55:11"}, {"y": 91, "label": "2020-04-07 20:56:11"}], "type": "spline", "name": "cpu#2", "showInLegend": true}, {"dataPoints": [{"y": 89, "label": "2020-04-07 20:57:11"}, {"y": 20, "label": "2020-04-07 20:58:11"}, {"y": 37, "label": "2020-04-07 20:59:11"}, {"y": 53, "label": "2020-04-07 21:00:11"}, {"y": 37, "label": "2020-04-07 21:01:11"}, {"y": 56, "label": "2020-04-07 21:02:11"}, {"y": 76, "label": "2020-04-07 21:03:11"}, {"y": 78, "label": "2020-04-07 21:04:11"}, {"y": 18, "label": "2020-04-07 21:05:11"}, {"y": 74, "label": "2020-04-07 21:06:11"}, {"y": 20, "label": "2020-04-07 21:07:11"}, {"y": 26, "label": "2020-04-07 21:08:11"}, {"y": 40, "label": "2020-04-07 21:09:11"}, {"y": 56, "label": "2020-04-07 21:10:11"}, {"y": 82, "label": "2020-04-07 21:11:11"}, {"y": 49, "label": "2020-04-07 21:12:11"}, {"y": 44, "label": "2020-04-07 21:13:11"}, {"y": 81, "label": "2020-04-07 21:14:11"}, {"y": 12, "label": "2020-04-07 21:15:11"}, {"y": 13, "label": "2020-04-07 21:16:11"}, {"y": 78, "label": "2020-04-07 21:17:11"}, {"y": 36, "label": "2020-04-07 21:18:11"}, {"y": 58, "label": "2020-04-07 21:19:11"}, {"y": 23, "label": "2020-04-07 21:20:11"}, {"y": 38, "label": "2020-04-07 21:21:11"}, {"y": 26, "label": "2020-04-07 21:22:11"}, {"y": 57, "label": "2020-04-07 21:23:11"}, {"y": 64, "label": "2020-04-07 21:24:11"}, {"y": 62, "label": "2020-04-07 21:25:11"}, {"y": 70, "label": "2020-04-07 21:26:11"}, {"y": 81, "label": "2020-04-07 21:27:11"}, {"y": 44, "label": "2020-04-07 21:28:11"}, {"y": 98, "label": "2020-04-07 21:29:11"}, {"y": 86, "label": "2020-04-07 21:30:11"}, {"y": 90, "label": "2020-04-07 21:31:11"}, {"y": 40, "label": "2020-04-07 21:32:11"}, {"y": 69, "label": "2020-04-07 21:33:11"}, {"y": 80, "label": "2020-04-07 21:34:11"}, {"y": 11, "label": "2020-04-07 21:35:11"}, {"y": 15, "label": "2020-04-07 21:36:11"}, {"y": 79, "label": "2020-04-07 21:37:11"}, {"y": 30, "label": "2020-04-07 21:38:11"}, {"y": 87, "label": "2020-04-07 21:39:11"}, {"y": 70, "label": "2020-04-07 21:40:11"}, {"y": 68, "label": "2020-04-07 21:41:11"}, {"y": 23, "label": "2020-04-07 21:42:11"}, {"y": 97, "label": "2020-04-07 21:43:11"}, {"y": 55, "label": "2020-04-07 21:44:11"}, {"y": 36, "label": "2020-04-07 21:45:11"}, {"y": 71, "label": "2020-04-07 21:46:11"}, {"y": 50, "label": "2020-04-07 21:47:11"}, {"y": 52, "label": "2020-04-07 21:48:11"}, {"y": 38, "label": "2020-04-07 21:49:11"}, {"y": 76, "label": "2020-04-07 21:50:11"}, {"y": 97, "label": "2020-04-07 21:51:11"}, {"y": 82, "label": "2020-04-07 21:52:11"}, {"y": 60, "label": "2020-04-07 21:53:11"}, {"y": 90, "label": "2020-04-07 21:54:11"}, {"y": 53, "label": "2020-04-07 21:55:11"}, {"y": 85, "label": "2020-04-07 21:56:11"}], "type": "spline", "name": "cpu#3", "showInLegend": true}], "legend": {"cursor": "pointer", "itemclick": "toggleDataSeries"}});

chart.render();

function toggleDataSeries(e) {
        if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
        }
        else {
                e.dataSeries.visible = true;
        }
        chart.render();
}

}
