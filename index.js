const customers = [
    {
      name: "Lê Thị Kiều Linh",
    },
    {
      name: "Cao Như Uyên",
    },
    {
      name: "Nguyễn Thị Phương Nguyên",
    },
    {
      name: "Trần Thị Anh Thư",
    },
  ];
  const handleRenderDOM = () => {
    const list_customers = document.querySelector(".list_customers");
    customers.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.name;
      list_customers.appendChild(li);
    });
  };
  handleRenderDOM();
  const button = document.querySelector("button");
  const randomCustomers = () => {
    const result_random = document.querySelector("#result_random");
    result_random.style.display = "block";
    const result_name = document.querySelector("#result_name");
    const random = Number.parseInt(Math.random() * customers.length);
    const result = customers[random];
    result_name.textContent = result.name;
  };
  
  button.addEventListener("click", randomCustomers);
  