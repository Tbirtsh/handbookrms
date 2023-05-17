document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.createElement("div");
    menuIcon.classList.add("menu-icon");
    menuIcon.innerHTML = "<span></span><span></span><span></span>";
    document.body.appendChild(menuIcon);
  
    const menu = document.createElement("div");
    menu.classList.add("menu");
    document.body.appendChild(menu);
  
    const menuItems = [
      { name: "Confiscations", link: "confiscations.html" },
      { name: "Electronic Devices", link: "electronicdevices.html" },
      { name: "Clothing", link: "clothing.html" },
      { name: "Grades", link: "grades.html" },
      { name: "Transportation", link: "transportation.html" },
    ];
  
    const menuList = document.createElement("ul");
    menuItems.forEach(function (item) {
      const menuItem = document.createElement("li");
      const menuLink = document.createElement("a");
      menuLink.textContent = item.name;
      menuLink.href = item.link;
      menuItem.appendChild(menuLink);
      menuList.appendChild(menuItem);
    });
  
    menu.appendChild(menuList);
  
    menuIcon.addEventListener("click", function () {
      menuIcon.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });
  