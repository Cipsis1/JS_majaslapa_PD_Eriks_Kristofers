function laiks(){
    const now = new Date();
    const formatetsLaiks = now.getFullYear() + "-" +
    String(now.getMonth()+1).padStart(2, '0') + "-" +
    String(now.getDate()).padStart(2, '0')+ " " +
    String(now.getHours()).padStart(2, '0')+ ":" +
    String(now.getMinutes()).padStart(2, '0')+ ":" +
    String(now.getSeconds()).padStart(2, '0');
   
    document.getElementById("laiks").textContent = formatetsLaiks;
  }
   
  laiks();
  setInterval(laiks,1000)
  
    let text;
    let person;
    if(window.localStorage.getItem("person") == null){
      person = prompt("Please enter your name (max 20 characters):");
      window.localStorage.setItem("person", person);
    }
    else{
      person = window.localStorage.getItem("person");
    }
    text = person.substring(0, 20); 
    document.getElementById("speletajs").innerHTML = text;
    
    // localStorage.clear();

    let punkti = window.localStorage.getItem('points');
    updatePointsDisplay()

    function updatePointsDisplay() {
      document.getElementById('punkti').innerHTML = punkti;
    }

    

