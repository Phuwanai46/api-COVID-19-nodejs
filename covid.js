const getdata = () => {
    axios.get('https://covid19.th-stat.com/json/covid19v2/getTodayCases.json').then(response => {
    console.log(response.data);
});
};
