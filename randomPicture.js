window.addEventListener("DOMContentLoaded", () => {
    const catImages = [
      // sleepy cats
      "https://www.thesprucepets.com/thmb/5W_hnV7N_bnqt7wlwPN0gIdHPJ8=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1076898592-fce96b6133cc4a49aea2fe43ef13714e.jpg",
      "https://t4.ftcdn.net/jpg/06/31/04/85/360_F_631048570_vYLuQ0UkmSkoEFGFTHmRZZSUo1h1R0hK.jpg",
      "https://www.pd.com.au/wp-content/uploads/2023/02/cat-asleep-on-white-bed-scaled-1.webp",
      "https://www.cheshireandwain.com/cdn/shop/articles/CatBeds-CheshireAndWain-RachelOates-6_2048x.jpg?v=1647607298",
      "https://cdn.onemars.net/sites/perfect-fit_uk_Z61CM_JAs8/image/elisa-kennemer-u74i4h5z_u0-unsplash_1685973644137.png",
      "https://cdn.shopify.com/s/files/1/0255/9777/1885/files/cat_sleeping_with_tongue_out.jpg?v=1706095431",
      "https://www.seattleareafelinerescue.org/wp-content/uploads/2023/04/201054C-_MG_4420-720x380.jpg",
      "https://nexgard.com.au/sites/default/files/styles/large/public/2024-02/AdobeStock116049466_360x316.jpeg?itok=l4Rd2fjX",
      "https://d2zp5xs5cp8zlg.cloudfront.net/image-85240-800.jpg",
      "https://www.purina.co.uk/sites/default/files/2020-12/How%20Long%20Do%20Cats%20SleepTEASER.jpg",
      // silly cats
      "https://media.tenor.com/K2bnpusQYIMAAAAe/silly-cat.png",
      "https://static.wikia.nocookie.net/silly-cat/images/3/35/CuhBG.png/revision/latest?cb=20231025181331",
      "https://preview.redd.it/silly-cat-is-ready-for-christmas-v0-ibl5b7c2ev4c1.png?auto=webp&s=023241e73b5903dc9832159349acc5cea02251fe",
      "https://static.wikia.nocookie.net/silly-cat/images/9/95/Billy.png/revision/latest/thumbnail/width/360/height/360?cb=20231010114915",
      "https://www.boredpanda.com/blog/wp-content/uploads/2024/03/CV3pxczqbV7-png__700.jpg",
      "https://static.wikia.nocookie.net/silly-cat/images/3/36/Ah_So_Cat.png/revision/latest?cb=20231003075048",
      "https://pyxis.nymag.com/v1/imgs/d29/4a6/d8b19f15856697769dc1c586d59ce82bd8-22-cat-video-truth-smoking.rsquare.w400.jpg",
      "https://preview.redd.it/whats-something-absurd-or-silly-that-your-cat-is-scared-of-v0-c4ikezw1j6gc1.jpeg?auto=webp&s=0c7084180f492c2fe391f56a8946c84dd0882302",
      "https://preview.redd.it/19winbuo94t91.jpg?width=1080&crop=smart&auto=webp&s=eb7aa6ab993d13aa61724aac421b214adbc80527",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NnYhKdoLNqOd-SD2l6Y2Tg4Nft7e2LAVwnEjQJmOIhpQa2ZMbpLmp5Sf18X34k9dhYA&usqp=CAU",
      //angry cats
      "https://t4.ftcdn.net/jpg/00/68/33/03/360_F_68330331_dKqChy33w0TcNHJEkqT5iw97QOX8la7F.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGXG2dGApzVCQPrCfdbFBExo0NpLXaV0A6Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuaYSWUcWeEw99qjC59WPojMfJ2JTB49BM6Z87kdvhrCsJMi8heZN2eD6TGS48zdB0Jvc&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTxySZ2armD0EwdD4FndFjjKaXjfrkcn7fTJIAelUCfEE9Ie7s0RXQ3ATSgenTBE58lc&usqp=CAU",
      "https://pbs.twimg.com/media/FZyQ8wNaUAYhOPo.jpg",
      "https://i.pinimg.com/736x/1b/33/b2/1b33b2a4dd6abe25de00c431e9807c08.jpg",
      "https://m.media-amazon.com/images/I/51AxzJzP0RL._AC_UF894,1000_QL80_.jpg",
      //dressed up cats
      "https://i.redd.it/xxothi9tep671.jpg",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3a6f3fd5-58ef-42e9-9cd6-69ce7fe9046a/dgv1nkt-98e9aa10-474b-4c7d-afe2-fcd8da333715.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhNmYzZmQ1LTU4ZWYtNDJlOS05Y2Q2LTY5Y2U3ZmU5MDQ2YVwvZGd2MW5rdC05OGU5YWExMC00NzRiLTRjN2QtYWZlMi1mY2Q4ZGEzMzM3MTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Lez-2VmeGAllJY8GOCKifIyu78r-5ZNffFxuWGdn7_I",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsP_v3I-xks39LxHVAnXSI1yWE1DuLbGcFdQ1ANA1sdrVYYw7RZ_OE2RT3BdXaV-6qNEBlZ5xP9wReV-rsQO3lhDsuq9QiQ8bQSzNESdR8_xuZjieMWYoVqXyZ1uDtmjN8V5GsoAWdVAXz/s1600/black-cat.jpg",
    ];
  
    const randomIndex = Math.floor(Math.random() * catImages.length); 
    const randomImage = catImages[randomIndex];
    const catImage = document.getElementById('catImage'); 
    catImage.src = randomImage;
  });