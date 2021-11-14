const parksList = document.querySelector(".parks-list")
const webcamsList = document.querySelector(".webcam-list")


const apiData = {
    url: "https://developer.nps.gov/api/v1",
    slash: "",
    parameter: "?limit=500",
    q: "&",
    apiK: "api_key=Fo69rJVxUwUrxeLPG7pKxSwHjzKCLH1HMOaHoD1l",
};

const parksKey = "/parks";
const webcamsKey = "/webcams";


apiData.slash = parksKey;



const { url, slash, parameter, q, apiK} = apiData;
const apiUrl = `${url}${slash}${parameter}${q}${apiK}`;


//activity api call
console.log(apiUrl);

fetch(apiUrl)
    .then(res => res.json())        
    .then((file1) => 
        {file1.data.forEach(
            (parks_name) => {                 
                    let D = document.createElement("li");
                    let a = document.createElement("p");
                    a.setAttribute("href", parks_name.url);
                    a.setAttribute("target", "_blank");
                    a.setAttribute("rel", "noopener noreferrer");
                    a.addEventListener("click", function(){ myFunction(parks_name.parkCode)} );
                    a.setAttribute("style", "padding-top: 5px;")
                    a.textContent = parks_name.fullName;
                    D.className = "parks-list";
                    D.appendChild(a);
                    parksList.appendChild(D);
  
            }
        )}//file.data.forEach
    );//then

function myFunction(Code){
    const apiData1 = {
        url: "https://developer.nps.gov/api/v1",
        slash: "/webcams",
        parameter: "?limit=500",
        q: "&",
        apiK: "api_key=Fo69rJVxUwUrxeLPG7pKxSwHjzKCLH1HMOaHoD1l",
    };
    const { url, slash, parameter, q, apiK} = apiData1;
    const apiUrl1 = `${url}${slash}${parameter}` + "parkCode=" + `${Code}${q}${apiK}`;

    apiData1.slash = webcamsKey;
    document.getElementById("root").innerHTML = "";
    console.log(apiUrl1);

    fetch(apiUrl1)
        .then(res => res.json())
        .then((file2) => { 
            let a = document.createElement("img"); 
            let D = document.createElement("li");
            let p = document.createElement("p");
            if(file2.data.length == 0){
                a.setAttribute("src", "pictures/tree-image.png")
                p.textContent = "No Image Available Currently"
                
            }
            
            (file2.data.forEach(
                (web_cam) => {
                    if(web_cam.images.length == 0){
                        a.setAttribute("src", "pictures/tree-image.png")
                        console.log("no image av")
                    } else if (web_cam.images.length >= 1){
                        a.setAttribute("src", web_cam.images[0].url)
                        p.textContent = web_cam.images[0].title
                        p.setAttribute("style", "font-size: 20px")
                        console.log("pull image")
                 

                    }
                }
            )
            )
            a.setAttribute("style", "margin-left:auto; margin-right:auto; height: 350px; width: 100%;")
                    console.log(a)
                    D.className = "webcam-list"
                    D.appendChild(a);
                    D.appendChild(p);
                    webcamsList.appendChild(D);
                    console.log(D)
    





        }
        )
}

