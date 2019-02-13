'use strict';
//helper functions

var _random = function(min,max){
  return Math.random()*(max-min)*min;
};

// render_store();

var pike = {
  store_name: '1st and Pike',
  min_customer: 23,
  max_customer: 65,
  avg_cookies: 6.3,
  store_open: 6,
  store_close: 21,
  list_hour:[],
  cookies_sold_each_hour:[],
  total_cookies:[],
};
//caluculate number of cookies at certain hour based on random # of customers.
pike.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_customer,this.max_customer));
  return Math.floor(this.avg_cookies * random_customers);
};
//Add number of cookies to array for each hour.
pike.caulculate_cookies_sold_each_hour = function(){
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
    this.list_hour.push([i]);
  }
};

//calculate total number of cookies
pike.calculate_total_cookies = function(){
  var resultSum = 0;
  for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    resultSum += this.cookies_sold_each_hour[i];
  }
  this.total_cookies.push(resultSum);
};

var seaTac = {
  store_name: 'SeaTac Airport',
  min_customer: 3,
  max_customer: 24,
  avg_cookies: 1.2,
  store_open: 6,
  store_close: 21,
  list_hour:[],
  cookies_sold_each_hour:[],
  total_cookies:[],
};
//caluculate number of cookies at certain hour based on random # of customers.
seaTac.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_customer,this.max_customer));
  return Math.floor(this.avg_cookies * random_customers);
};
//Add number of cookies to array for each hour.
seaTac.caulculate_cookies_sold_each_hour = function(){
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
    this.list_hour.push([i]);
  }
};

//calculate total number of cookies
seaTac.calculate_total_cookies = function(){
  var resultSum = 0;
  for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    resultSum += this.cookies_sold_each_hour[i];
  }
  this.total_cookies.push(resultSum);
};


var seattleCenter = {
  store_name: 'Seatte Center',
  min_customer: 11,
  max_customer: 38,
  avg_cookies: 3.7,
  store_open: 6,
  store_close: 21,
  list_hour:[],
  cookies_sold_each_hour:[],
  total_cookies:[],
};
//caluculate number of cookies at certain hour based on random # of customers.
seattleCenter.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_customer,this.max_customer));
  return Math.floor(this.avg_cookies * random_customers);
};
//Add number of cookies to array for each hour.
seattleCenter.caulculate_cookies_sold_each_hour = function(){
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
    this.list_hour.push([i]);
  }
};

//calculate total number of cookies
seattleCenter.calculate_total_cookies = function(){
  var resultSum = 0;
  for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    resultSum += this.cookies_sold_each_hour[i];
  }
  this.total_cookies.push(resultSum);
};


var capitolHill = {
  store_name: 'Capitol Hill',
  min_customer: 20,
  max_customer: 38,
  avg_cookies: 2.3,
  store_open: 6,
  store_close: 21,
  list_hour:[],
  cookies_sold_each_hour:[],
  total_cookies:[],
};
//caluculate number of cookies at certain hour based on random # of customers.
capitolHill.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_customer,this.max_customer));
  return Math.floor(this.avg_cookies * random_customers);
};
//Add number of cookies to array for each hour.
capitolHill.caulculate_cookies_sold_each_hour = function(){
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
    this.list_hour.push([i]);
  }
};

//calculate total number of cookies
capitolHill.calculate_total_cookies = function(){
  var resultSum = 0;
  for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    resultSum += this.cookies_sold_each_hour[i];
  }
  this.total_cookies.push(resultSum);
};


var alki = {
  store_name: 'Alki',
  min_customer: 2,
  max_customer: 16,
  avg_cookies: 4.6,
  store_open: 6,
  store_close: 21,
  list_hour:[],
  cookies_sold_each_hour:[],
  total_cookies:[],
};
//caluculate number of cookies at certain hour based on random # of customers.
alki.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_customer,this.max_customer));
  return Math.floor(this.avg_cookies * random_customers);
};
//Add number of cookies to array for each hour.
alki.caulculate_cookies_sold_each_hour = function(){
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
    this.list_hour.push([i]);
  }
};

//calculate total number of cookies
alki.calculate_total_cookies = function(){
  var resultSum = 0;
  for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    resultSum += this.cookies_sold_each_hour[i];
  }
  this.total_cookies.push(resultSum);
};

var render_store = function(){
  var target = document.getElementById('store-container');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  //add store name
  h2_el.textContent = this.store_name;

  //create new <li> for cookies sold at each hour
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++){
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.list_hour[i] + ':00 : ' + this.cookies_sold_each_hour[i] + ' cookies';
    ul_el.appendChild(hour_li_el);
  }
  //add total cookies
  var total_li_el = document.createElement('li');
  total_li_el.textContent = 'Total: ' + this.total_cookies + ' cookies';

  ul_el.appendChild(total_li_el);
  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);

};

pike.render =render_store;
pike.caulculate_cookies_sold_each_hour();
pike.calculate_total_cookies();
pike.render();

seaTac.render = render_store;
seaTac.caulculate_cookies_sold_each_hour();
seaTac.calculate_total_cookies();
seaTac.render();

seattleCenter.render = render_store;
seattleCenter.caulculate_cookies_sold_each_hour();
seattleCenter.calculate_total_cookies();
seattleCenter.render();

capitolHill.render = render_store;
capitolHill.caulculate_cookies_sold_each_hour();
capitolHill.calculate_total_cookies();
capitolHill.render();

alki.render = render_store;
alki.caulculate_cookies_sold_each_hour();
alki.calculate_total_cookies();
alki.render();


