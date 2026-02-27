import { ref } from "vue";


const bookings = ref([]);
const loading = ref(false);

const fetchBookings = async () => {
    loading.value = true
    try {
        const res = await fetch('http://localhost:3001/bookings');
        bookings.value = await res.json();
    } finally {
        loading.value = false
    }
}

const reportCourse = async (course) => {
    const index = bookings.value.findIndex(b => b.id === course.id)
    const toDeleteCourse = bookings.value[index]
    
    bookings.value.splice(index, 1)
    
    try {
      const res = await fetch(`http://localhost:3001/bookings/${course.id}`, {
        method: "DELETE"
      })
    
      if(!res.ok){
        throw Error("Couldn't delete")
      }
    } catch (error) {
      console.log("ERROR REPORT", error);
      bookings.value.splice(index, 0 , toDeleteCourse)
    }
    }
    
    const registerCourse = async (course) => {
      if(bookings.value.some(b => b.id === course.id)){
        alert("Course already purchased!")
        return
      }
      const payload = {
        id: course.id,
        title: course.title,
        price: course.price,
        description: course.description,
        status: "pending"
      }
    
      try {
        bookings.value.push(payload);
    
        const res = await fetch('http://localhost:3001/bookings', {
        method: "POST",
        headers : {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...payload,
          status: "confirmed"
        })
      })
    
      const index = bookings.value.findIndex(b => b.id === payload.id);
      if(res.ok){
        bookings.value[index] = await res.json()
      } else {
        bookings.value.splice(index, 1);
        return
        // bookings.value.bookings.value.filter(b => b.id !== payload.id)
      }
      } catch (error) {
        console.log("ERROR", e);
        bookings.value = bookings.value.filter(b => b.id !== payload.id)
      } 
    }

export default function useBookings(){

    return {
        loading,
        bookings,
        fetchBookings,
        registerCourse,
        reportCourse
    }
}

