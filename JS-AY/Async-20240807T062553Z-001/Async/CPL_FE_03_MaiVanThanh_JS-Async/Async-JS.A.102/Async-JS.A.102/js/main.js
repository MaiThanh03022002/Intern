(function () {
  var app = angular.module('myApp', []);

  app.controller('demoCtrl', ['$scope', DemoController]);

  function getDataPromise(url) {
    return new Promise(function (resolve, reject) {
      $.get(url, function (data, status) {
        if (status === 'success') {
          resolve(data);
        }
        reject(new Error('Error while getting ' + url));
      });
    });
  }

  console.log('hi');

  const USER_API = 'https://jsonplaceholder.typicode.com/users';
  const POST_API = 'https://jsonplaceholder.typicode.com/posts?userId=';
  const COMMENT_API = 'https://jsonplaceholder.typicode.com/comments?postId='

  function DemoController($scope) {
    // Your Code Here
    // Callback-style
    $.get(USER_API, function (users) {
      let usersProcessed = 0;

      users.forEach(function (user) {
        $.get(POST_API + user.id, function (posts) {
          user.posts = posts;
          let postsProcessed = 0;

          posts.forEach(function (post) {
            $.get(COMMENT_API + post.id, function (comments) {
              post.comments = comments;
              postsProcessed++;

              if (postsProcessed === posts.length) {
                usersProcessed++;
                if (usersProcessed === users.length) {
                  $scope.$apply(function () {
                    $scope.users = users;
                  });
                  console.log(users);
                }
              }
            });
          });
        });
      });
    });
    // Promise-style
      let allUsers;
      // getDataPromise(USER_API)
      //   .then(function (users) {
      //     //...
      //   })
      //   //...
      getDataPromise(USER_API)
        .then(function (users) {
          allUsers = users;
          return Promise.all(
            users.map(user =>
              getDataPromise(POST_API + user.id).then(posts => {
                user.posts = posts;
                return Promise.all(
                  posts.map(post =>
                    getDataPromise(COMMENT_API + post.id).then(comments => {
                      post.comments = comments;
                    })
                  )
                );
              })
            )
          );
        })
        .then(function () {
          $scope.$apply(function () {
            $scope.users = allUsers;
          });
          console.log(allUsers);
        })
        .catch(function (error) {
          console.log(error);
        });
    // Async/await-style
      // (async () => {
      //   try {
      //     //...use getDataPromise function 
      //   } catch (error) {
      //     console.log(error)
      //   }
      // })();
      (async () => {
        try {
          let users = await getDataPromise(USER_API);
          for (let user of users) {
            let posts = await getDataPromise(POST_API + user.id);
            user.posts = posts;
            for (let post of posts) {
              let comments = await getDataPromise(COMMENT_API + post.id);
              post.comments = comments;
            }
          }
          $scope.$apply(function () {
            $scope.users = users;
          });
          console.log(users);
        } catch (error) {
          console.log(error);
        }
      })();
  }
})();
