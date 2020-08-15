export const environment = {
  production: true,
  apiConfig: {
    baseUrl: 'http://localhost:3000',
    endpoints: {
      layouts: 'layouts',
      users: 'users',
      profiles: 'profiles'
    }
  },
  firebase: {
    apiKey: '',
    authDomain: 'ng-profile-builder.firebaseapp.com',
    databaseURL: 'https://ng-profile-builder.firebaseio.com',
    projectId: 'ng-profile-builder',
    storageBucket: 'ng-profile-builder.appspot.com',
    messagingSenderId: ''
  }
};
