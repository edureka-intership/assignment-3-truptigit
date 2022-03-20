class restaurantManage{
    restaurantList = [
        {
            id:1,
            restaurantName:'KFC',
            address: 'M.G.Road',
            city: 'Delhi'
        },
        {
            id:2,
            restaurantName:'SUBWAY',
            address: 'BKC',
            city: 'Mumbai'
        },
        {
            id:3,
            RestaurantName:'DOMINOS',
            address: 'Katraj Road',
            City: 'Pune'
        },
        {
            id:4,
            restaurantName:'KFC',
            address: 'Kundan Halli',
            city: 'Banglore'
        } 

    ];
    /////
    
restObj.restaurantList
0: {id: 1, restaurantName: 'KFC', address: 'M.G.Road', city: 'Delhi'}
1: {id: 2, restaurantName: 'SUBWAY', address: 'BKC', city: 'Mumbai'}
2: {id: 3, RestaurantName: 'DOMINOS', address: 'Katraj Road', City: 'Pune'}
3: {id: 4, restaurantName: 'KFC', address: 'Kundan Halli', city: 'Banglore'}
length: 4


    ///Part1 b

    PrintAllRestaurantNames=()=>{
        return this.restaurantList.map((data)=> {
           return data.restaurantName
    })
}
    /////
4) ['KFC', 'SUBWAY', undefined, 'KFC']
0: "KFC"
1: "SUBWAY"
2: undefined
3: "KFC"
length: 4
[[Prototype]]: Array(0)


    //part 1-c
    FilterrestaurantBycity=(cityName)=>{
    return this.restaurantList.filter((data)=> {
         return data.city == cityName
       })
   }
}
///////
restObj.FilterrestaurantBycity('Delhi')
[{…}]
0: {id: 1, restaurantName: 'KFC', address: 'M.G.Road', city: 'Delhi'}
length: 1
[[Prototype]]: Array(0)

//Part2

var orderData = {
    'below 500': 20,
    '500-1000' : 29,
    '1000-1500' :30,
    '1500-2000' :44,
    'Above 2000' : 76
};


var out = 0;
for(key in orderData){
    out +=Number(orderData[key])
}

199

20/199*100
10.050251256281408



function getpercent(orderData){
    var total = 0;
    for (key in orderData){
        total += Number(orderData [key]);
    }

var output = [];
var count = 0;
for (key in orderData){
    var perCentValue = (orderData [key]/total)*100;
    count = count+1;
    let myObj = {}
    myObj.id = count;
    myObj.order=key;
    myObj.order_percentage = '${perCentValue} %'
    myObj.restaurant='punjabi Tadka'
    output.push(myObj)
}

   return output
}
/////
(5) [{…}, {…}, {…}, {…}, {…}]
0: {id: 1, order: 'below 500', order_percentage: '${perCentValue} %', restaurant: 'punjabi Tadka'}
1: {id: 2, order: '500-1000', order_percentage: '${perCentValue} %', restaurant: 'punjabi Tadka'}
2: {id: 3, order: '1000-1500', order_percentage: '${perCentValue} %', restaurant: 'punjabi Tadka'}
3: {id: 4, order: '1500-2000', order_percentage: '${perCentValue} %', restaurant: 'punjabi Tadka'}
4: {id: 5, order: 'Above 2000', order_percentage: '${perCentValue} %', restaurant: 'punjabi Tadka'}
length: 5
[[Prototype]]: Array(0)












