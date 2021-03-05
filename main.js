var names = [
  "Prince Philip, Duke of Edinburgh","Charles, Prince of Wales","Diana, Princess of Wales"
    ];
    
    var images = [
    "Philip.jpg" , "Charles.jpg" , "Diana.jpg"
  ];
  
  var i = 0;
  function nextslide() { 
    document.getElementById("album").src = images [i];
    document.getElementById("name").innerHTML = names [i];

    i++;
    if (i == 9)
      {
  i=0;
  }                     
          
  }
  
  
  
  