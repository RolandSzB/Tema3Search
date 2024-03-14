import { defineStore } from "pinia";
export const useTodoStore = defineStore("todo", {
  state: () => {
    return {
      lists: [
        {
          image:
            "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
          name: "Duran Clayton",
          role: "UI/UX Designer",
        },
        {
          image:
            "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
          name: "Elen Clark",
          role: "UI/UX Designer",
        },
        {
          image:
            "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
          name: "Jimmy Jobby",
          role: "Frontend Developer",
        },
        {
          image:
            "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
          name: "Dur Eliott",
          role: " Designer",
        },
      ],
    };
  },
  actions: {
    saveToLocalStorage() {
      if (localStorage.getItem("todo-lists") === null) {
        localStorage.setItem("todo-lists", JSON.stringify(this.lists));
      } else {
        localStorage.removeItem("todo-lists");
        localStorage.setItem("todo-lists", JSON.stringify(this.lists));
      }
    },
  },
});
