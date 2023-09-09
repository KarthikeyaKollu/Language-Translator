// async function fetchDataFromServer() {
//     try {
//       const response = await fetch('http://localhost:5000/transfer');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data from server');
//       }
//       const data = await response.json();
//       console.log('Received data:', data);
//       // Process the received data as needed
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }



 async  function sendDataToServer(text_to_translate,target_lang) {
    try {
      const dataToSend = { 'name': text_to_translate ,'target_lang':target_lang};  // Example data to send
      const response = await fetch('http://localhost:5000/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });
  
      if (!response.ok) {
        throw new Error('Failed to send data to server');
      }
  
      const responseData = await response.json();
      console.log('Server response:', responseData);
      return responseData;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  
