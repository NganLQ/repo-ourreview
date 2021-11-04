const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
      {
        id: 5,
        name: "lq ngan",
        job: "web developer",
        img:
          "./ngan.jpg",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro ex, ipsa aut architecto, illo libero totam quaerat sed, eligendi voluptates dicta recusandae dignissimos sapiente labore fugiat rem corrupti nobis.",
      },
];
const image = document.querySelector('.image');
const title = document.querySelector('.nameAc');
const job = document.querySelector('.job');
const description = document.querySelector('.description');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const randomReview = document.querySelector('.random_review');

window.addEventListener('DOMContentLoaded', showOverview);
let index = 0;

function showOverview(){
  image.src = reviews[index].img;
  title.textContent = reviews[index].name;
  job.textContent = reviews[index].job;
  description.textContent = reviews[index].text;
}

next.addEventListener('click',() => {
  index++;
  if(index >= reviews.length) index = 0;
  showOverview(index);
})

prev.addEventListener('click',() => {
  index--;
  if(index < 0) index = reviews.length - 1;
  showOverview(index)
})

randomReview.addEventListener('click', () => {
  index = Math.floor(Math.random() * reviews.length)
  showOverview(index);
})


