
const appDiv = document.querySelector('.app-div')

function getUsersCard(pages){
    

    fetch(`https://reqres.in/api/users?page=${pages}`)
    .then(res => res.json())
    .then((resData) => {
        console.log(resData)

       const cards = resData.data.map((resdatas) => {
           console.log(resdatas)
            return `
                <div class="added-card">
             <h1>${resdatas.first_name}</h1>
            <img src="${resdatas.avatar}" alt="">
            <h4>${resdatas.last_name}</h4>
            <h6>${resdatas.id}</h6>
            </div> `
        }).join(' ');
        console.log(cards)

        document.querySelector('.app-div').innerHTML = cards
        
    


    })
    
  

}

getUsersCard()




{/* <div id="card-div">

            <h1>${resdatas.first_name}</h1>
            <img src="${resdatas.avatar}" alt="">
            <h4>${resdatas.email}</h4>
            <h6>${resdatas.id}</h6>
    
    
                </div> */}