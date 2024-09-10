import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  //Loading Data
  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        //console.log(data);
        setMenu(data);
        setFilteredItems(data); // Initially, display all items
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    };

    //Call the function
    fetchData();
  }, []);
  //Filtering data base on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  //Show all data function
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
  };

  //Sorting based on A-Z, Z-A Low-High pricing

  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    //Logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div>
      {/* Menu banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-48  flex flex-col items-center justify-center gap-8">
          {/* text */}
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious
              <span className="text-green"> Food</span>
            </h2>
            <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for a moderate cost
            </p>
            {/* button */}
            <button className="btn bg-green font-semibold text-white px-8 py-3 rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Menu shop section */}
      <div className="section-container">
        {/* Filtering and sorting */}
        <div className="py-4 px-6 md:pl-6 md:py-0">Filtering and sorting</div>

        {/* Product cards */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {filteredItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
