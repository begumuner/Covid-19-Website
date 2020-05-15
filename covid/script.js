var news = [
    {

        name : 'Coronavirus outbreak spreads in overcrowded Rohingya camps amid fear of humanitarian crisis',
        image : 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/15/thumbs/800x531/36044.jpg',
        link : 'https://www.dailysabah.com/world/asia-pacific/coronavirus-outbreak-spreads-in-overcrowded-rohingya-camps-amid-fear-of-humanitarian-crisis',
    },
    {

        name : 'Top dressing, bejeweled masks and more: Coronavirus and working from home is changing how we dress',
        image : 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/15/thumbs/800x531/35893.jpg',
        link : 'https://www.dailysabah.com/life/fashion/top-dressing-bejeweled-masks-and-more-coronavirus-and-working-from-home-is-changing-how-we-dress',
    },
    {

        name : 'China marks 1 month with no confirmed COVID-19 deaths',
        image : 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/15/36004.jpg',
        link : 'https://www.dailysabah.com/world/asia-pacific/china-marks-1-month-with-no-confirmed-covid-19-deaths',
    }

];


var index = 1;
var slaytcount = news.length;

show(index);

document.querySelector('.fa-angle-double-left').addEventListener('click',function(){

index++;
show(index);
console.log(index);


});


document.querySelector('.fa-angle-double-right').addEventListener('click',function(){

index--;
show(index);
console.log(index);
    
});

function show(index)
{

    index = index;

    if(index<0)
    {
        index= slaytcount - 1;
    }

    if(index>=slaytcount)
    {
        index = 0;
    }
    document.querySelector('.card-title').textContent = news[index].name;

    document.querySelector('.card-img').setAttribute('src',news[index].image);

    document.querySelector('.card-link').setAttribute('src',news[index].link);
}


