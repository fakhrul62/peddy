const loadPetCategory = async () => {
    try {
        const fetching = ('https://openapi.programming-hero.com/api/peddy/categories');
        const response = await fetch(fetching);
        const data = await response.json();
        displayCategory(data.categories);
    }
    catch (error) {
        console.error('Error:', error);
    }

}

const loadPet = async () => {
    try {
        const fetching = ('https://openapi.programming-hero.com/api/peddy/pets');
        const response = await fetch(fetching);
        const data = await response.json();
        displayPet(data.pets);
    }
    catch (error) {
        console.error('Error:', error);
    }

}

const loadPetByCategories = async (id) => {
    try {
        removeActiveButton();
        document
          .getElementById(`btn-${id}`)
          .classList.add("bg-[#0e7a81]", "bg-opacity-40", "rounded-full", "border-green-900");
        const fetching = (`https://openapi.programming-hero.com/api/peddy/category/${id}`);
        const response = await fetch(fetching);
        const data = await response.json();
        displayPet(data.data);
    }
    catch (error) {
        console.error('Error:', error);
    }

}