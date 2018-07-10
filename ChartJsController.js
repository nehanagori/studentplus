({
    createChart : function(component, event, helper){
        var chartdata = {
            labels: ['Red','Yellow', 'Blue', 'Green'],
            datasets: [
                {
                    label: 'colors',
                    data: [10, 20, 30, 40],
                    borderColor:'rgba(62, 159, 222, 1)',
                    fill: true,
                    backgroundColor: ["#ff0000", "#ffff4d" , "#3399ff" , "#33cc33" ] 
                }
            ]
        }
        var ctx = component.find("pie").getElement();
        var lineChart = new Chart(ctx ,{
            type: 'pie',
            data: chartdata,
            options: {	
                legend: {
                    position: 'bottom',
                    padding: 10,
                },
                responsive: true
            }
        });
        
        },
})
