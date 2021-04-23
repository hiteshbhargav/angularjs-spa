myApp.controller("shopController", function ($scope) {
  $scope.heading = "products";
  $scope.product = [
    {
      id: 1,
      img: "../images/products/logitech/ergo.webp",
      name: "ERGO M575",
      price: 3995,
      brand: "logitech",
      category: "mouse",
      trending: false,
    },
    {
      id: 2,
      img: "../images/products/logitech/mx-master-3.webp",
      name: "Mx master 3",
      price: 9495,
      brand: "logitech",
      category: "mouse",
      trending: false,
    },
    {
      id: 3,
      img: "../images/products/logitech/mx-master-anywhere.webp",
      name: "MX Anywhere 3",
      price: 7995,
      brand: "logitech",
      category: "mouse",
      trending: true,
    },
    {
      id: 4,
      img: "../images/products/logitech/k380.png",
      name: "K380 Keyboard",
      price: 3195,
      brand: "logitech",
      category: "keyboard",
      trending: false,
    },
    {
      id: 5,
      img: "../images/products/logitech/mx-keys.webp",
      name: "Mx keys",
      price: 12995,
      brand: "logitech",
      category: "keyboard",
      trending: true,
    },
    {
      id: 6,
      img: "../images/products/logitech/k480.png",
      name: "K480 Bluetooth",
      price: 3295,
      brand: "logitech",
      category: "keyboard",
      trending: false,
    },
    {
      id: 7,
      img: "../images/products/hyperx/cloudx.jpg",
      name: "HyperX Cloud Core",
      price: 6439,
      brand: "hyperx",
      category: "headphone",
      trending: true,
    },
    {
      id: 8,
      img: "../images/products/hyperx/cloud-stinger.jpg",
      name: "HyperX Cloud Stinger",
      price: 3490,
      brand: "hyperx",
      category: "headphone",
      trending: false,
    },
    {
      id: 9,
      img: "../images/products/hyperx/hyperx-cloud.jpg",
      name: "HyperX CloudX",
      price: 5243,
      brand: "hyperx",
      category: "headphone",
      trending: false,
    },
  ];
});
