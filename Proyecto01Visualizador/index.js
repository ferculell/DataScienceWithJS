const getData = async () => {
    const response = await fetch('WorldPopulation.csv');
    const data = await response.text();
    const rows = data.split('\n').slice(1);
    const labels = [];
    const values = [];
    rows.forEach(row => {
        const cells = row.trim().split(',');
        labels.push(cells[0]);
        values.push(cells[1]);
    })
    return [labels, values];
}

const renderChart = async () => {
    const [labels, values] = await getData();

    const data = {
        labels: labels.reverse(),
        datasets: [{
            label: 'Población mundial',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: values.reverse(),
        }]
    };
    
    const config = {
        type: 'line',
        data: data,
        options: {}
    };
    
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}


renderChart();