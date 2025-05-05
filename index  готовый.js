let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-60px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

    const searchBox = document.getElementById('searchBox');
    const products = document.querySelectorAll('.product');

    searchBox.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();
      products.forEach(product => {
        const text = product.textContent.toLowerCase();
        product.style.display = text.includes(searchTerm) ? 'block' : 'none';
      });
    });

    // Корзина
    let total = 0;
    const cart = document.getElementById('cart');

    products.forEach(product => {
      product.addEventListener('click', () => {
        const price = parseInt(product.getAttribute('data-price'));
        total += price;
        cart.textContent = `Корзина: ${total} руб.`;
      });
    });
   
    const faders = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // убрать наблюдение после появления
        }
      });
    }, {
      threshold: 0.2
    });
  
    faders.forEach(el => observer.observe(el));
    function toggleAccordion(button) {
      const content = button.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    }
    

