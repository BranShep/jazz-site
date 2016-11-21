angular.module('jazz').controller('homeCtrl', function($scope, mainService){
  $scope.test = 'Hello there angular';

  $scope.trendingNews = [
    {
      img: '/images/boris-baby-lion.jpg',
      title: 'Social Media Minute: Pumpkins And A Hot New Look'
    },
    {
      img: '/images/bolomboy.jpg',
      title: 'Fast Break - Joel Bolomboy'
    },
    {
      img: '/images/thurl.jpg',
      title: 'Thurl Bailey Delivers Anti-Bullying Message'
    },
    {
      img: '/images/brazilian.jpg',
      title: 'Brazilian Feast'
    },
    {
      img: '/images/dancer.jpg',
      title: "A Dancer's Life - Morgan"
    },
    {
      img: '/images/granger.jpg',
      title: 'Granger Surprise'
    }
  ];

  $scope.featuredNews = [
    {
      img: '/images/locked-on-jazz.jpg',
      title: 'Insight from David Locke'
    },
    {
      img: '/images/recent-photos.jpg',
      title: 'Photos - #UTAatPOR'
    },
    {
      img: '/images/social-media-connect.jpg',
      title: 'Jazz Social Media Hub'
    }
  ]

})
