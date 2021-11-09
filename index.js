const activitiesList = document.querySelector(".activities-list");

const apiData = {
    url: "https://developer.nps.gov/api/v1",
    slash: "/activities",
    parameter: "?name",
    q: "&",
    apiK: "api_key=Fo69rJVxUwUrxeLPG7pKxSwHjzKCLH1HMOaHoD1l",
};


const { url, slash, parameter, q, apiK} = apiData;
const apiUrl = `${url}${slash}${parameter}${q}${apiK}`;

// const slash_type = "/activities";
// const parameter_type = "?name";
// const q_type = "&";

// apiData.slash = slash_type;
// apiData.parameter = parameter_type;
// apiData.q = q_type;




console.log(apiUrl);
fetch(apiUrl)
    .then(res => res.json())        
    .then((file) => 
        {file.data.forEach(
            (act_name) => {
                
                    let D = document.createElement("li");
                    let a = document.createElement("a");
                    a.setAttribute("href", act_name.url);
                    a.setAttribute("target", "_blank");
                    a.setAttribute("rel", "noopener noreferrer");
                    a.textContent = act_name.name;
                    console.log(a);
                    console.log(D);
                    D.className = "activities-list";
                    D.appendChild(a);
                    activitiesList.appendChild(D);
            
                // console.log("This is activity name", act_name)

                
               
            }
        )}//file.data.forEach
    );//then



        
    



// console.log(apiUrl);
// fetch(apiUrl)
//     // .then(res => res.json())        
//     .then((data) => {data.data.name.forEach((activity) => {
//             let D = document.createElement("li");
//             let a = document.createElement("a");
//             a.setAttribute("href", activity.url);
//             a.setAttribute("target", "_blank");
//             a.setAttribute("rel", "noopener noreferrer");
//             a.textContent = activity.name;

//             D.className = "activities-list";
//             D.appendChild(a);
//             activitiesList.appendChild(D);


//         });
//     });
        


