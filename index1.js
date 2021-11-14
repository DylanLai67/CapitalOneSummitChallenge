const activitiesList = document.querySelector(".activities-list");
const parksList = document.querySelector(".parks-list");


const apiData = {
    url: "https://developer.nps.gov/api/v1",
    slash: "/activities",
    parameter: "?limit=500",
    q: "&",
    apiK: "api_key=Fo69rJVxUwUrxeLPG7pKxSwHjzKCLH1HMOaHoD1l",
};



const { url, slash, parameter, q, apiK} = apiData;


const apiUrl = `${url}${slash}${parameter}${q}${apiK}`;


//activity api call

fetch(apiUrl)
    .then(res => res.json())        
    .then((file1) => 
        {file1.data.forEach(
            (act_name) => {
                    let D = document.createElement("li");
                    let a = document.createElement("p");
                    // a.setAttribute("href", act_name.url);
                    a.setAttribute("target", "_blank");
                    // a.setAttribute("rel", "noopener noreferrer");
                    a.addEventListener("click", function(){ myFunction(act_name.id)} );
                    a.setAttribute("style", "padding-top: 5px;")
                    a.textContent = act_name.name;
                    D.className = "activities-list";
                    D.appendChild(a);
                    activitiesList.appendChild(D);
            
                // console.log("This is activity name", act_name)

                
               
            }
        )}//file.data.forEach
    );//then


function myFunction(id){
    const apiData1 = {
        url: "https://developer.nps.gov/api/v1",
        slash: "/activities/parks",
        parameter: "?limit=500",
        q: "&",
        apiK: "api_key=Fo69rJVxUwUrxeLPG7pKxSwHjzKCLH1HMOaHoD1l",
    };
    const { url, slash, parameter, q, apiK} = apiData1;
    const apiUrl1 = `${url}${slash}${parameter}${q}${apiK}`;

    

    document.getElementById("root").innerHTML = "";
    fetch(apiUrl1)
        .then(res => res.json())
        .then((file2) => { console.log(file2.data)
            for(let i = 0; i < file2.data.length; i++){
                if(file2.data[i].id == id){
                    for(let j = 0; j < file2.data[i].parks.length; j++){
                       
                        let D = document.createElement("li");
                        let a = document.createElement("a");
                       
                        a.setAttribute("href", file2.data[i].parks[j].url);
                        a.setAttribute("target", "_blank");
                        a.setAttribute("rel", "noopener noreferrer");
                        a.setAttribute("style", "display:block; padding-top: 10px; color: black;")
                        a.textContent = file2.data[i].parks[j].fullName;
                        console.log(a)
                        D.className = "parks-list";
                        D.appendChild(a);
                        parksList.appendChild(D);
 
                       
                    }
                }
               
               
               
            }
           
        }
        )

      
        
        
        
        
        
        
        



}