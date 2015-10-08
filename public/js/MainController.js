angular.module('dynamicFormApp', [])
.config(['$interpolateProvider', function($interpolateProvider){
  // $interpolateProvider used to differentiate uses for angular from express
	$interpolateProvider.startSymbol('{[{'); 
	$interpolateProvider.endSymbol('}]}'); 
}])



.controller('mainColtroller',function($scope,$http) {
    // array to hold the form data
		$scope.formData=[];



    // variable contains json object
    var users = [
    { 
      // keys refer to html markup
      // label will render the label for the input form.
    	label: 'Name',
      placeholder: ' Enter Full Name ',
      value: '',
      type: 'text',
      name: 'fullname'

    },
    {
      // this value is hidden from the user 
    	placeholder: 'ID',
    	value: "",
    	type: 'hidden',
    	name: 'empId'
      
    },
    {
      // department data (drop down selection)
    	label: 'Department',
    	placeholder: 'DPT',
    	value: '',
      // options are for the select form
    	options: [
    	{value: 'Accounting'},
    	{value: 'Tech'},
    	{value: 'Marketing'}
    	],
    	type: 'select',
    	name: 'dpt'

    },
    {
      // email data
    	label: 'Email',
    	placeholder: ' Enter Email ',
    	value: '',
    	type: 'email',
    	name: 'email'

    },
    {
      // text area data
      label: 'Message',
      placeholder: ' Enter message ',
      value: '',
      type: 'textarea',
      name: 'message'

    },
    {
      // check box data
      label: 'Terms & Conditions',
      type: 'checkbox',
      name: 'terms'
    } 

  ];  




  // put json object into the form data array
  $scope.formData = users;
  var results = [];

  var name = results.slice(1, 1);
  var department = results.slice(3, 3);
  var email = results.slice(4, 4);
  var message = results.slice(5, 5);


  // WHEN FORM IS SUBMITED
  $scope.submitForm = function(isValid){
  
  // IF FORM IS VALID
    if(isValid){
      for (var i = 0; i < users.length; i++) {
        var val = users[i]['value'];
        // put the data submited by the form into the var results
        results.push(val);
      }
      // show results in the console
      console.log(results);

      console.log(department);
      $http.post('/complaint', results);
    }      
  }

});



