'use strict';
//helper functions

var _random = function(min,max){
  return Math.random()*(max-min)*min;
};

var display_time= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


// render_store();

var store1 = {
  store_name: '1st and Pike',
  min_customer: 23,
  max_customer: 65,
  avg_cookies: 6.3,
  store_open: 6,
  store_close: 21,
  list_hour:[],
  cookies_sold_each_hour:[],
};
store1.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_customer,this.max_customer));
  return Math.floor(this.avg_cookies * random_customers);
};
store1.caulculate_cookies_sold_each_hour = function(){
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
    this.list_hour.push([i]);
  }
};

store1.render = function(){
  var target = document.getElementById('store-container');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;

  //create new <li> for cookies sold at each hour
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++){
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.list_hour[i] + ':00 : ' + this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);

};

store1.caulculate_cookies_sold_each_hour();

store1.render();

// var store_2 = {
//   store_name:'SeaTac Airport',
//   min_customer: 3,
//   max_customer: 24,
//   avg_cookies: 1.2,
//   list:[this.cookies_at_hour()],
//   cookies_at_hour:function(){
//     for(var counter = 0; counter < 15; counter++){
//       this.min_customer = Math.ceil(this.min_customer);
//       this.max_customer = Math.floor(this.max_customer);
//       var random_number_customer =  Math.floor(Math.random()*(this.max_customer-this.min_customer))+this.min_customer;
//       var num_of_cookies = random_number_customer*this.avg_cookies;
//       console.log(Math.round(num_of_cookies));
//     }
//   }
// };

// store_2.render = render_store();
// store_2.render();

// var store_3 = {
//   store_name:'Seattle Center',
//   min_customer: 11,
//   max_customer: 38,
//   avg_cookies: 3.7,
//   list:[this.cookies_at_hour()],
//   cookies_at_hour: function(){
//     for(var counter = 0; counter < 15; counter++){
//       this.min_customer = Math.ceil(this.min_customer);
//       this.max_customer = Math.floor(this.max_customer);
//       var random_number_customer =  Math.floor(Math.random()*(this.max_customer-this.min_customer))+this.min_customer;
//       var num_of_cookies = random_number_customer*this.avg_cookies;
//       console.log(Math.round(num_of_cookies));
//     }
//   }
// };

// store_3.render = render_store();
// store_3.render();

// var store_4 = {
//   store_name:'Capitol Hill',
//   min_customer: 20,
//   max_customer: 38,
//   avg_cookies: 2.3,
//   list:[this.cookies_at_hour()],
//   cookies_at_hour: function(){
//     for(var counter = 0; counter < 15; counter++){
//       this.min_customer = Math.ceil(this.min_customer);
//       this.max_customer = Math.floor(this.max_customer);
//       var random_number_customer =  Math.floor(Math.random()*(this.max_customer-this.min_customer))+this.min_customer;
//       var num_of_cookies = random_number_customer*this.avg_cookies;
//       console.log(Math.round(num_of_cookies));
//     }
//   }
// };

// store_4.render = render_store();
// store_4.render();

// var store_5 = {
//   store_name:'Alki',
//   min_customer: 2,
//   max_customer: 16,
//   avg_cookies: 4.6,
//   list:[this.cookies_at_hour()],
//   cookies_at_hour: function(){
//     for(var counter = 0; counter < 15; counter++){
//       this.min_customer = Math.ceil(this.min_customer);
//       this.max_customer = Math.floor(this.max_customer);
//       var random_number_customer =  Math.floor(Math.random()*(this.max_customer-this.min_customer))+this.min_customer;
//       var num_of_cookies = random_number_customer*this.avg_cookies;
//       console.log(Math.round(num_of_cookies));
//     }
//   }
// };

// store_5.render = render_store();
// store_5.render();

// function render_store(){

//   //creating elements
//   var li_el = document.createElement('li');
//   var article_el = document.createElement('article');
//   var h2_el = document.createElement('h2');
//   var ul_el = document.createElement('ul');
//   var li6am_el = document.createElement('li');
//   var li7am_el = document.createElement('li');
//   var li8am_el = document.createElement('li');
//   var li9am_el = document.createElement('li');
//   var li10am_el = document.createElement('li');
//   var li11am_el = document.createElement('li');
//   var li12pm_el = document.createElement('li');
//   var li1pm_el = document.createElement('li');
//   var li2pm_el = document.createElement('li');
//   var li3pm_el = document.createElement('li');
//   var li4pm_el = document.createElement('li');
//   var li5pm_el = document.createElement('li');
//   var li6pm_el = document.createElement('li');
//   var li7pm_el = document.createElement('li');
//   var li8pm_el = document.createElement('li');

//   //giving elements content
//   h2_el.textContent = this.store_name;
//   li6am_el.textContent = `6am : ${this.list[0]} cookies`;
//   li7am_el.textContent = `7am : ${this.list[1]} cookies`;
//   li8am_el.textContent = `8am : ${this.list[2]} cookies`;
//   li9am_el.textContent = `9am : ${this.list[3]} cookies`;
//   li10am_el.textContent = `10am : ${this.list[4]} cookies`;
//   li11am_el.textContent = `11am : ${this.list[5]} cookies`;
//   li12pm_el.textContent = `12pm : ${this.list[6]} cookies`;
//   li1pm_el.textContent = `1pm : ${this.list[7]} cookies`;
//   li2pm_el.textContent = `2pm : ${this.list[8]} cookies`;
//   li3pm_el.textContent = `3pm : ${this.list[9]} cookies`;
//   li4pm_el.textContent = `4pm : ${this.list[10]} cookies`;
//   li5pm_el.textContent = `5pm : ${this.list[11]} cookies`;
//   li6pm_el.textContent = `6pm : ${this.list[12]} cookies`;
//   li7pm_el.textContent = `7pm: ${this.list[13]} cookies`;
//   li8pm_el.textContent = `8pm : ${this.list[14]} cookies`;

//   //combine everything back together
//   ul_el.appendChild(li6am_el);
//   ul_el.appendChild(li7am_el);
//   ul_el.appendChild(li8am_el);
//   ul_el.appendChild(li9am_el);
//   ul_el.appendChild(li10am_el);
//   ul_el.appendChild(li11am_el);
//   ul_el.appendChild(li12pm_el);
//   ul_el.appendChild(li1pm_el);
//   ul_el.appendChild(li2pm_el);
//   ul_el.appendChild(li3pm_el);
//   ul_el.appendChild(li4pm_el);
//   ul_el.appendChild(li5pm_el);
//   ul_el.appendChild(li6pm_el);
//   ul_el.appendChild(li7pm_el);
//   ul_el.appendChild(li8pm_el);

//   h2_el.appendChild(ul_el);

//   article_el.appendChild(h2_el);

//   li_el.appendChild(article_el);
// }

// render_store();
