const reviews = [

    {
        name :"Teszt Elek",
        job : "Javascript fejlesztő",
        img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam sequi at necessitatibus nesciunt doloribus. Minus mollitia unde ullam, velit molestiae odio id voluptatum distinctio explicabo eligendi tempora neque, repellat ad quas incidunt vel et placeat minima odit necessitatibus autem assumenda! Accusantium dolor nesciunt beatae cumque quo porro iste, quia, qui, perferendis vel dicta deserunt. Dicta commodi nam inventore laudantium excepturi deleniti necessitatibus quasi odio neque veritatis accusamus quae explicabo repudiandae assumenda cum eveniet qui sed praesentium perspiciatis, minima quis"


    },

    {
        name :"Szabó Róbert",
        job : "Web-designer",
        img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam sequi at necessitatibus nesciunt doloribus. Minus mollitia unde ullam, velit molestiae odio id voluptatum distinctio explicabo eligendi tempora neque, repellat ad quas incidunt vel et placeat minima odit necessitatibus autem assumenda! Accusantium dolor nesciunt beatae cumque quo porro iste, quia, qui, perferendis vel dicta deserunt. Dicta commodi nam inventore laudantium excepturi deleniti necessitatibus quasi odio neque veritatis accusamus quae explicabo repudiandae assumenda cum eveniet qui sed praesentium perspiciatis, minima quis"


    },

    {
        name :"Marie Rose",
        job : "Backend fejlesztő",
        img: "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam sequi at necessitatibus nesciunt doloribus. Minus mollitia unde ullam, velit molestiae odio id voluptatum distinctio explicabo eligendi tempora neque, repellat ad quas incidunt vel et placeat minima odit necessitatibus autem assumenda! Accusantium dolor nesciunt beatae cumque quo porro iste, quia, qui, perferendis vel dicta deserunt. Dicta commodi nam inventore laudantium excepturi deleniti necessitatibus quasi odio neque veritatis accusamus quae explicabo repudiandae assumenda cum eveniet qui sed praesentium perspiciatis, minima quis"


    }


];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let current = 0;

window.addEventListener("load", ()=>{

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;


})

function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;

}

nextBtn.addEventListener("click", () =>{

    current ++;

    if(current > reviews.lentgh -1){

        current = 0;

    }

    showPerson(current);


})

prevBtn.addEventListener("click", () => {

    current --;

    if(current < 0){

        current = reviews.length - 1;
    }
    showPerson(current);
})