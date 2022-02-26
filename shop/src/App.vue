<template>
  <div class="wrapper">
    <div class="container">
      <p class="btn-wrapper">
        <button class="btn-cart" v-on:click="modalOpen">
          <svg class="cart--icon" width="33" height="29" viewBox="0 0 33 29"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.199 29C26.5512 28.9738 25.9396 28.6948 25.4952 28.2227C25.0509 27.7506 24.8094 27.1232 24.8225 26.475C24.8356 25.8269 25.1023 25.2097 25.5653 24.7559C26.0283 24.3022 26.6508 24.048 27.2991 24.048C27.9474 24.048 28.5697 24.3022 29.0327 24.7559C29.4957 25.2097 29.7624 25.8269 29.7755 26.475C29.7886 27.1232 29.5471 27.7506 29.1028 28.2227C28.6585 28.6948 28.0468 28.9738 27.399 29H27.199ZM7.75098 26.32C7.75098 25.79 7.90815 25.2718 8.20264 24.8311C8.49712 24.3904 8.91569 24.0469 9.4054 23.844C9.8951 23.6412 10.434 23.5881 10.9539 23.6915C11.4737 23.7949 11.9512 24.0502 12.326 24.425C12.7009 24.7998 12.9562 25.2773 13.0596 25.7972C13.163 26.317 13.1098 26.8559 12.907 27.3456C12.7041 27.8353 12.3606 28.2539 11.9199 28.5483C11.4792 28.8428 10.9611 29 10.431 29C10.0789 29.0003 9.73017 28.9311 9.40479 28.7966C9.0794 28.662 8.78374 28.4646 8.53467 28.2158C8.2856 27.9669 8.08805 27.6713 7.95325 27.3461C7.81844 27.0208 7.74902 26.6721 7.74902 26.32H7.75098ZM11.551 20.686C11.2916 20.6868 11.039 20.6024 10.8322 20.4457C10.6253 20.2891 10.4756 20.0689 10.406 19.819L5.573 2.36401H2.18005C1.86657 2.36401 1.56591 2.23947 1.34424 2.01781C1.12257 1.79614 0.998047 1.49549 0.998047 1.18201C0.998047 0.868519 1.12257 0.567873 1.34424 0.346205C1.56591 0.124537 1.86657 5.81268e-06 2.18005 5.81268e-06H6.46106C6.72055 -0.00080736 6.97309 0.0837201 7.17981 0.240568C7.38653 0.397416 7.53589 0.617884 7.60498 0.868006L12.438 18.323H25.616L29.999 8.27501H15.399C15.2409 8.27961 15.0834 8.25242 14.9359 8.19507C14.7884 8.13771 14.6539 8.05134 14.5404 7.94108C14.4269 7.83082 14.3366 7.69891 14.275 7.55315C14.2134 7.40739 14.1816 7.25075 14.1816 7.0925C14.1816 6.93426 14.2134 6.77762 14.275 6.63186C14.3366 6.4861 14.4269 6.35419 14.5404 6.24393C14.6539 6.13367 14.7884 6.0473 14.9359 5.98994C15.0834 5.93259 15.2409 5.90541 15.399 5.91001H31.812C32.0077 5.90996 32.2003 5.95866 32.3724 6.05172C32.5446 6.14478 32.6908 6.27926 32.798 6.44301C32.9058 6.60729 32.9714 6.79569 32.9889 6.99145C33.0063 7.18721 32.9752 7.38424 32.8981 7.565L27.493 19.977C27.4007 20.1876 27.249 20.3668 27.0565 20.4927C26.864 20.6186 26.6391 20.6858 26.4091 20.686H11.551Z"/>
          </svg>
        </button>
      </p>
    </div>
    <div class="modal" v-if="isModalOpen">
      <p class="btn-wrapper">
        <button class="btn-cart" v-on:click="modalClose">
          <svg class="cart--icon" width="18" height="18" viewBox="0 0 18 18"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"/>
          </svg>
        </button>
      </p>
      <div class="container">
        <ul class="cart">
          <li class="cart-item" v-bind:key="item.id" v-for="item of cart">
            <h3>{{ item.title }}</h3>
            <p class="cart-item-price">{{ item.price }}</p>
            <p class="cart-item-quantity">Quantity: {{ item.count }}</p>
            <button class="btn-delete" v-on:click="removeFromCart(item.id)">Delete from cart</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <ul class="catalog">
        <li class="catalog-item" v-bind:key="item.id" v-for="item of catalog">
          <h3>{{ item.title }}</h3>
          <p class="catalog-item-price">{{ item.price }}</p>
          <button class="btn-add" v-on:click="addToCart(item)">Add to cart</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "John",
      isModalOpen: false,
      catalog: [],
      cart: []
    };
  },
  methods: {
    modalOpen() {
      this.isModalOpen = true;
    },
    modalClose() {
      this.isModalOpen = false;
    },
    addToCart: function(product) {
      const index = this.cart.findIndex((item) => item.id === parseInt(product.id));
      if (index < 0) {
        const item = Object.assign({}, product);
        item.count = 1;
        this.cart.push(item);
      } else {
        const item = this.cart.find((item) => item.id === parseInt(product.id));
        item.count++;
      }
    },
    removeFromCart: function(id) {
      const item = this.cart.find((item) => item.id === parseInt(id));
      if (item) {
        if (item.count > 1) {
          item.count--;
        } else {
          this.cart.splice(this.cart.indexOf(item), 1);
        }
      }
      if (this.cart.length === 0) {
        this.isModalOpen = false;
      }
    }
  },
  mounted() {
    this.catalog = [
      {
        id: 1,
        title: "Jacket white",
        price: 336
      },
      {
        id: 2,
        title: "Hat red",
        price: 116
      },
      {
        id: 3,
        title: "Socks orange",
        price: 970
      },
      {
        id: 4,
        title: "Jacket white",
        price: 386
      },
      {
        id: 5,
        title: "Shirt black",
        price: 262
      },
      {
        id: 6,
        title: "Jacket white",
        price: 482
      },
      {
        id: 7,
        title: "Shoes black",
        price: 237
      },
      {
        id: 8,
        title: "Hat orange",
        price: 570
      },
      {
        id: 9,
        title: "Hat green",
        price: 279
      },
      {
        id: 10,
        title: "Shirt orange",
        price: 441
      },
      {
        id: 11,
        title: "Hat white",
        price: 778
      },
      {
        id: 12,
        title: "Hat white",
        price: 938
      },
      {
        id: 13,
        title: "Shirt red",
        price: 145
      },
      {
        id: 14,
        title: "Jacket green",
        price: 730
      },
      {
        id: 15,
        title: "Jacket black",
        price: 234
      },
      {
        id: 16,
        title: "Hat black",
        price: 667
      },
      {
        id: 17,
        title: "Hat white",
        price: 675
      },
      {
        id: 18,
        title: "Hat orange",
        price: 574
      },
      {
        id: 19,
        title: "Hat red",
        price: 558
      },
      {
        id: 20,
        title: "Hat orange",
        price: 382
      }
    ];
  }
};
</script>
<style lang="scss">
$desktop-width: 1140px;
$item-width: 360px;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}

.wrapper {
  min-height: 100vh;
}

.modal {
  width: $desktop-width - 240px;
  height: $item-width;
  border: 1px solid #2c3e50;
  border-radius: 9px;
  top: 100px;
  left: calc(50% - 430px);
  position: absolute;
  background-color: white;
}

.container {
  max-width: $desktop-width;
  margin: 0 auto;
}

.catalog, .cart {
  list-style: none;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  text-align: center;
  padding-bottom: 10px;
}

.catalog-item, .cart-item {
  padding: 5px;
  background: #e2f7f6;

  & h3 {
    font-size: 20px;
    color: #276164;
    margin-bottom: 10px;
  }

  &-price {
    margin-bottom: 10px;

    &::before {
      content: "$";
      color: #b72121;
    }
  }

  &-quantity {
    margin-bottom: 10px;
  }

  & p {
    color: #0f059d;
  }
}

button {
  cursor: pointer;
}

.btn-add, .btn-delete {
  padding: 8px;
}

.btn-cart {
  padding: 10px;
  margin-bottom: 15px;
}

.cart--icon {
  fill: #F16D7F;
}

.btn-wrapper {
  text-align: end;
}

/* tablet */
@media (max-width: 1200px) {
  .container {
    max-width: calc(768px - 16px * 2);
  }
  .catalog, .cart {
    grid-template-columns: repeat(2, 1fr);
  }
  .modal {
    width: 640px;
    left: calc(50% - 320px);
  }
}

/*mobile*/
@media (max-width: 767px) {
  .container {
    max-width: calc(375px - 16px * 2);
  }
  .catalog, .cart {
    grid-template-columns: repeat(1, 1fr);
  }
  .modal {
    width: 340px;
    left: calc(50% - 170px);
  }
}
</style>
