// Step 1: set your neural network options
const options = {
    dataUrl: "diabetes.csv",
    task: 'classification',
    inputs:['Pregnancies','Glucose','BloodPressure','SkinThickness','Insulin','BMI','DiabetesPedigreeFunction','Age'],
    outputs:['Outcome'],
    debug: true
  }
  
  // Step 2: initialize your neural network
  const nn = ml5.neuralNetwork(options, dataLoaded);
  
  // Step 3: normalize data and train the model
  function dataLoaded(){
    nn.normalizeData();
    trainModel();
  }
  
  // Step 4: train the model
  function trainModel(){
    const trainingOptions = {
      epochs: 20,
      batchSize: 4
    }
    nn.train(trainingOptions, finishedTraining);
  }
  
  // Step 5: use the trained model
  function finishedTraining(){
    classify();
  }
  
  // Step 6: make a classification
  function classify(){
    const input = {
    Pregnancies: 2, 
    Glucose: 130, 
    BloodPressure: 60,
    SkinThickness: 35,
    Insulin: 0,
    BMI: 33.6,
    DiabetesPedigreeFunction: 0.627,
    Age: 24
    }
    nn.classify(input, handleResults);
  }
  
  // Step 7: define a function to handle the results of your classification
  function handleResults(error, result) {
      if(error){
        console.error(error);
        return;
      }
      console.log(result); // {label: 'red', confidence: 0.8};
  }
  